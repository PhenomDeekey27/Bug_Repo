# Medium Order API

Small Express API used for repository-level debugging tests.

## Run

```bash
npm install
npm test
npm start
```

## Endpoint

```text
GET /api/orders/:id
```

Example:

```text
GET http://localhost:3000/api/orders/ord-1001
```

The repository intentionally contains a bug for debugging evaluation.
Do not assume the test suite covers every behavior.
