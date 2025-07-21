import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AuthRequest, JwtPayload, AppError, ErrorCode } from '@/types';

/**
 * JWT 토큰 검증 미들웨어
 */
export const authenticateToken = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    throw new AppError(
      '인증 토큰이 필요합니다',
      401,
      ErrorCode.AUTHENTICATION_ERROR
    );
  }

  try {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new AppError(
        'JWT 시크릿이 설정되지 않았습니다',
        500,
        ErrorCode.INTERNAL_SERVER_ERROR
      );
    }

    const decoded = jwt.verify(token, secret) as JwtPayload;
    req.user = decoded;
    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      throw new AppError(
        '유효하지 않은 토큰입니다',
        401,
        ErrorCode.AUTHENTICATION_ERROR
      );
    }
    throw new AppError(
      '토큰 검증 중 오류가 발생했습니다',
      500,
      ErrorCode.INTERNAL_SERVER_ERROR
    );
  }
};

/**
 * 역할 기반 권한 검증 미들웨어
 */
export const authorizeRole = (allowedRoles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction): void => {
    if (!req.user) {
      throw new AppError(
        '인증이 필요합니다',
        401,
        ErrorCode.AUTHENTICATION_ERROR
      );
    }

    if (!allowedRoles.includes(req.user.role)) {
      throw new AppError(
        '접근 권한이 없습니다',
        403,
        ErrorCode.AUTHORIZATION_ERROR
      );
    }

    next();
  };
};

/**
 * 관리자 권한 검증 미들웨어
 */
export const requireAdmin = authorizeRole(['ADMIN']);

/**
 * 사용자 권한 검증 미들웨어
 */
export const requireUser = authorizeRole(['USER', 'ADMIN']); 