import redis from 'redis';

// Create Redis client
const client = redis.createClient();

// Connect to Redis server
client.on('connect', () => {
  console.log('Redis client connected to the server');
});

// Handle errors
client.on('error', (err) => {
  console.error(`Redis client not connected to the server: ${err}`);
});
