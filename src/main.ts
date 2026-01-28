import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'audit_queue',
      queueOptions: {
        durable: false
      },
    },
  });

  await app.startAllMicroservices();
  await app.listen(3001); // Using 3001 to avoid conflict if core service is on 3000
}
bootstrap();
