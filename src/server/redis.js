import redis from 'redis';

/*
Initialize with default host and port (localhost:6379)
 */
export const redisClient = new redis.RedisClient();
