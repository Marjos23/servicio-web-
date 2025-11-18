import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Mascota } from 'src/mascota/entities/mascota.entity';

@ObjectType()
export class Cliente {
  @Field(() => ID, { description: 'Example field (placeholder)' })
  id: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  nombre: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  correo: string;

  @Field(() => [Mascota], { description: 'Example field (placeholder)' })
  mascotas: Mascota[];
}
