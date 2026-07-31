const express = require('express');
const logger = require('./middleware/logger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger);

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok it is',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`Server hira  listening on port ${PORT}`);
});

module.exports = app;
