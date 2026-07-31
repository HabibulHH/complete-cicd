const assert = require('node:assert');
const test = require('node:test');

const app = require('./app');

test('GET /health returns ok', async (t) => {
  const server = app.listen(0);
  t.after(() => server.close());

  const { port } = server.address();
  const res = await fetch(`http://127.0.0.1:${port}/health`);

  assert.strictEqual(res.status, 200);

  const body = await res.json();
  assert.ok(body.status);
  assert.strictEqual(typeof body.uptime, 'number');
  assert.ok(!Number.isNaN(Date.parse(body.timestamp)));
});
