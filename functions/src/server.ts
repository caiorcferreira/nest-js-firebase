import * as functions from 'firebase-functions';
import * as express from 'express';

import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';

const server = express();
const app = NestFactory.create(ApplicationModule, server);

app.init();
exports.api = functions.https.onRequest(server);