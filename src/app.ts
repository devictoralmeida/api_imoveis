import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import { handleErrors } from './middlewares/handleErrors.middleware';
import { usersRouter } from './routes/users.routes';
import { categoriesRouter } from './routes/categories.routes';
import { realEstatesRouter } from './routes/realEstates.routes';
import { schedulesRouter } from './routes/schedules.routes';
import { sessionsRouter } from './routes/sessions.routes';

const app = express();
app.use(express.json());

app.use('/users', usersRouter)
app.use('/login', sessionsRouter)

app.use('/categories', categoriesRouter)
app.use('/realEstate', realEstatesRouter)
app.use('/schedules', schedulesRouter)

app.use(handleErrors)

export default app;
