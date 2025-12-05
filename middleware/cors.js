// api-tester-backend/middleware/cors.js

const cors = require('cors');

const allowedOrigins = [
  'http://localhost:3000',
  'https://api-tester-app-ochre.vercel.app',
  'https://api-tester-igm9bpiqz-aakanshas-projects-f4b2c9ab.vercel.app' 
  // ... Any other domains you added
];

module.exports = cors({
    origin: function (origin, callback) {
        // --- ADD THIS LINE ---
        console.log('Incoming Origin:', origin);
        // ---------------------
        
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            // This is the line that is failing!
            callback(new Error('CORS not allowed')); 
        }
    },
    // ... rest of your configuration
});