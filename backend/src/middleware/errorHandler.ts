import { Request, Response, NextFunction } from 'express';
import { AppError, ApiResponse, ErrorCode } from '@/types';

/**
 * 글로벌 에러 핸들링 미들웨어
 */
export const errorHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  console.error('에러 발생:', error);

  // AppError인 경우
  if (error instanceof AppError) {
    const response: ApiResponse = {
      success: false,
      message: error.message,
      error: error.errorCode,
      timestamp: new Date().toISOString(),
    };

    res.status(error.statusCode).json(response);
    return;
  }

  // JWT 에러인 경우
  if (error.name === 'JsonWebTokenError') {
    const response: ApiResponse = {
      success: false,
      message: '유효하지 않은 토큰입니다',
      error: ErrorCode.AUTHENTICATION_ERROR,
      timestamp: new Date().toISOString(),
    };

    res.status(401).json(response);
    return;
  }

  // JWT 만료 에러인 경우
  if (error.name === 'TokenExpiredError') {
    const response: ApiResponse = {
      success: false,
      message: '토큰이 만료되었습니다',
      error: ErrorCode.AUTHENTICATION_ERROR,
      timestamp: new Date().toISOString(),
    };

    res.status(401).json(response);
    return;
  }

  // Zod 검증 에러인 경우
  if (error.name === 'ZodError') {
    const response: ApiResponse = {
      success: false,
      message: '입력값 검증에 실패했습니다',
      error: ErrorCode.VALIDATION_ERROR,
      timestamp: new Date().toISOString(),
    };

    res.status(400).json(response);
    return;
  }

  // 기본 서버 에러
  const response: ApiResponse = {
    success: false,
    message: process.env['NODE_ENV'] === 'production' 
      ? '서버 내부 오류가 발생했습니다' 
      : error.message,
    error: ErrorCode.INTERNAL_SERVER_ERROR,
    timestamp: new Date().toISOString(),
  };

  res.status(500).json(response);
};

/**
 * 404 에러 핸들러
 */
export const notFoundHandler = (
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  const response: ApiResponse = {
    success: false,
    message: `경로 ${_req.originalUrl}을(를) 찾을 수 없습니다`,
    error: ErrorCode.NOT_FOUND,
    timestamp: new Date().toISOString(),
  };

  res.status(404).json(response);
}; 