import * as functions from 'firebase-functions';
import * as express from 'express';
import { Express } from 'express';

import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';

const server: Express = express();

const startNestApplication = async (expressInstance: Express) => {
  const app = await NestFactory.create(ApplicationModule, expressInstance);
  app.init();
}

startNestApplication(server);
exports.api = functions.https.onRequest(server);