import app from './app';
import { AppDataSource } from './data-source';

const PORT: number = Number(process.env.PORT) || 3000;

AppDataSource.initialize()
  .then(async () => {
    console.log('Server is running');

    app.listen(PORT, () => console.log('Servidor executando'));
  })
  .catch((err: unknown): void => {
    console.error('Error during Data Source initialization', err);
  });
