const express = require('express');
const logger = require('./middleware/logger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger);

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok it isasds',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

// Only start the server when run directly, so tests can import the app.
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server siam listening on port ${PORT}`);
  });
}

module.exports = app;
