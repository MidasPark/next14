import { createClient } from 'redis';

/**
 * Redis 클라이언트 설정
 */
const redisClient = createClient({
  url: process.env['REDIS_URL'] || 'redis://localhost:6379',
  socket: {
    reconnectStrategy: (retries) => {
      if (retries > 10) {
        console.error('Redis 재연결 실패');
        return new Error('Redis 재연결 실패');
      }
      return Math.min(retries * 100, 3000);
    },
  },
});

/**
 * Redis 연결 이벤트 핸들러
 */
redisClient.on('connect', () => {
  console.log('✅ Redis 연결 성공');
});

redisClient.on('error', (err) => {
  console.error('❌ Redis 연결 에러:', err);
});

redisClient.on('reconnecting', () => {
  console.log('🔄 Redis 재연결 중...');
});

/**
 * Redis 연결 초기화
 */
export const initRedis = async (): Promise<void> => {
  try {
    await redisClient.connect();
  } catch (error) {
    console.error('Redis 연결 실패:', error);
    throw error;
  }
};

/**
 * Redis 연결 종료
 */
export const closeRedis = async (): Promise<void> => {
  await redisClient.quit();
  console.log('🔌 Redis 연결 종료');
};

export default redisClient; 