import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 8080
  const app = await NestFactory.create(AppModule,   {cors: {
    origin: process.env.APP_URL,
  }},);
  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}
bootstrap();
