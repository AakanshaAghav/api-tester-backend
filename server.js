const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const corsMiddleware = require('./middleware/cors');

const healthRoutes = require('./routes/health.routes');
const proxyRoutes = require('./routes/proxy.routes');
const historyRoutes = require('./routes/history.routes');
const collectionsRoutes = require('./routes/collections.routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(corsMiddleware);
app.use(bodyParser.json());

app.use('/', healthRoutes);
app.use(proxyRoutes);
app.use(historyRoutes);
app.use(collectionsRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
