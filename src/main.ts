import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
declare const module: any;

async function bootstrap() {
  const PORT = process.env.PORT || 8080
  const app = await NestFactory.create(AppModule,   {cors: {
    origin: process.env.APP_URL,
  }},);
  await app.listen(PORT,"0.0.0.0");

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
