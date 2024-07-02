// config/server.js

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'http://localhost:1337'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'your-secret-key'),
    },
  },
  middleware: [
    // Example of a custom middleware
    async (ctx, next) => {
      // Add custom headers
      ctx.set('X-Custom-Header', 'CustomValue');
      await next();
    },
  ],
  // Example of a custom error handler
  load: {
    before: ['responseTime', 'logger', 'cors', 'responses', 'gzip'],
    order: [
      'Define the middlewares ordering',
      'Define the middlewares to load in a specific order',
    ],
    after: ['parser', 'router'],
  },
  settings: {
    cors: {
      origin: ['*'], // Allow all origins
      headers: ['Content-Type', 'Authorization'], // Allow these headers
    },
  },
});
