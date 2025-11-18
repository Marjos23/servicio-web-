import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Cliente } from 'src/cliente/entities/cliente.entity';

@ObjectType()
export class Mascota {
  @Field(() => ID, { description: 'Example field (placeholder)' })
  id: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  nombre: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  color: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  id_cliente: string;

  @Field(() => Cliente, { description: 'Example field (placeholder)' })
  cliente: Cliente
}
