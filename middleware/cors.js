const cors = require('cors');

const allowedOrigins = [
  'http://localhost:3000', // local dev
  'https://api-tester-app-ochre.vercel.app' // deployed frontend
];

module.exports = cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS not allowed'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  credentials: true
});
