// scripts/test-event.ts
import * as amqp from 'amqplib';

async function sendTestEvent() {
  const queue = 'audit_queue';
  const connection = await amqp.connect('amqp://localhost:5672');
  const channel = await connection.createChannel();

  await channel.assertQueue(queue, { durable: false });

  const eventData = {
    id: 12345,
    exam2p_entity: 'TestEntity',
    exam2p_user: 'TestUser',
    description: 'Deleting unit test record'
  };

  // NestJS Microservices wrap the payload in specific ways usually, 
  // but for @EventPattern with Transport.RMQ, it often expects a specific pattern structure 
  // or just the data depending on serialization. 
  // Default NestJS RMQ serializer: { pattern: string, data: any }
  
  const message = {
    pattern: 'exam2p.record.deleted',
    data: eventData
  };

  channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));

  console.log(" [x] Sent 'exam2p.record.deleted'", message);

  setTimeout(() => {
    connection.close();
    process.exit(0);
  }, 500);
}

sendTestEvent().catch(console.error);
