import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';
import { errorHandler, notFoundHandler } from '@/middleware/errorHandler';
import { testDatabaseConnection, closeDatabaseConnection } from '@/config/database';
import { initRedis, closeRedis } from '@/config/redis';
import { killPortIfUsed } from '../../shared/utils/kill-port';

// 환경 변수 로드
dotenv.config();

const app = express();
const PORT = Number(process.env['PORT'] || 3001);

(async () => {
  await killPortIfUsed(PORT);

  // 기본 미들웨어
  app.use(helmet()); // 보안 헤더 설정
  app.use(compression()); // 응답 압축
  app.use(cors({
    origin: process.env['FRONTEND_URL'] || 'http://localhost:3000',
    credentials: true,
  }));
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));

  // 로깅 미들웨어
  if (process.env['NODE_ENV'] === 'development') {
    app.use(morgan('dev'));
  } else {
    app.use(morgan('combined'));
  }

  // Rate Limiting
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15분
    max: 100, // IP당 최대 요청 수
    message: {
      success: false,
      message: '너무 많은 요청이 발생했습니다. 잠시 후 다시 시도해주세요.',
      error: 'RATE_LIMIT_EXCEEDED',
      timestamp: new Date().toISOString(),
    },
  });
  app.use('/api/', limiter);

  // Swagger 설정
  const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: '풀스택 API 서버',
        version: '1.0.0',
        description: 'Express API 서버 문서',
      },
      servers: [
        {
          url: `http://localhost:${PORT}`,
          description: '개발 서버',
        },
      ],
    },
    apis: ['./src/routes/*.ts', './src/controllers/*.ts'],
  };

  const specs = swaggerJsdoc(swaggerOptions);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

  // 헬스 체크 엔드포인트
  app.get('/health', (_req, res) => {
    res.json({
      success: true,
      message: '서버가 정상적으로 실행 중입니다',
      timestamp: new Date().toISOString(),
    });
  });

  // API 라우트 (나중에 추가)
  app.use('/api/auth', (_req, res) => {
    res.json({ message: 'Auth routes will be added here' });
  });

  app.use('/api/users', (_req, res) => {
    res.json({ message: 'User routes will be added here' });
  });

  // 404 에러 핸들러
  app.use(notFoundHandler);

  // 글로벌 에러 핸들러
  app.use(errorHandler);

  // 서버 시작
  const startServer = async (): Promise<void> => {
    try {
      // 데이터베이스 연결 테스트
      await testDatabaseConnection();
      // Redis 연결
      await initRedis();
      app.listen(PORT, () => {
        console.log(`🚀 서버가 포트 ${PORT}에서 실행 중입니다`);
        console.log(`📚 API 문서: http://localhost:${PORT}/api-docs`);
        console.log(`🏥 헬스 체크: http://localhost:${PORT}/health`);
      });
    } catch (error) {
      console.error('서버 시작 실패:', error);
      process.exit(1);
    }
  };

  // Graceful Shutdown
  const gracefulShutdown = async (): Promise<void> => {
    console.log('🔄 서버 종료 중...');
    try {
      await closeDatabaseConnection();
      await closeRedis();
      console.log('✅ 서버가 안전하게 종료되었습니다');
      process.exit(0);
    } catch (error) {
      console.error('❌ 서버 종료 중 오류 발생:', error);
      process.exit(1);
    }
  };

  process.on('SIGTERM', gracefulShutdown);
  process.on('SIGINT', gracefulShutdown);

  await startServer();
})(); 