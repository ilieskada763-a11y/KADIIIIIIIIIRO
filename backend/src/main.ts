import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import serverless from 'serverless-http';

let cachedServer: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('AKAI STREAM API')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.init();
  const expressApp = app.getHttpAdapter().getInstance();
  return serverless(expressApp);
}

// Vercel prefers default export for functions sometimes, but handler is standard for AWS-style.
// We provide both to be safe.
const handler = async (event: any, context: any) => {
  if (!cachedServer) {
    cachedServer = await bootstrap();
  }
  return cachedServer(event, context);
};

export { handler };
export default handler;

// For local development
if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
  const startLocal = async () => {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(3001);
    console.log('Local server running on http://localhost:3001');
  };
  startLocal();
}
