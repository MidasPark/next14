import { PrismaClient } from '@prisma/client';

/**
 * Prisma 클라이언트 인스턴스
 */
const prisma = new PrismaClient({
  log: process.env['NODE_ENV'] === 'development' ? ['query', 'error', 'warn'] : ['error'],
});

/**
 * 데이터베이스 연결 테스트
 */
export const testDatabaseConnection = async (): Promise<void> => {
  try {
    await prisma.$connect();
    console.log('✅ 데이터베이스 연결 성공');
  } catch (error) {
    console.error('❌ 데이터베이스 연결 실패:', error);
    throw error;
  }
};

/**
 * 데이터베이스 연결 종료
 */
export const closeDatabaseConnection = async (): Promise<void> => {
  await prisma.$disconnect();
  console.log('🔌 데이터베이스 연결 종료');
};

export default prisma; 