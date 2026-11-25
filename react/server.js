import express from 'express';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();
const port = Number(process.env.PORT) || 4001;
const projectRoot = fileURLToPath(new URL('.', import.meta.url));
const buildDirectory = resolve(projectRoot, 'dist');

app.use(express.json());

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', service: 'react-express-api' });
});

app.use(express.static(buildDirectory));
app.get(/.*/, (_request, response, next) => {
  response.sendFile(resolve(buildDirectory, 'index.html'), (error) => {
    if (error) next(error);
  });
});

app.listen(port, () => {
  console.log(`Node Express server listening on http://localhost:${port}`);
});
