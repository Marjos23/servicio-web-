import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { MascotaService } from './mascota.service';
import { Mascota } from './entities/mascota.entity';
import { CreateMascotaInput } from './dto/create-mascota.input';
import { UpdateMascotaInput } from './dto/update-mascota.input';
import { ServiceHttp } from 'src/servicios/http.service';
import { Cliente } from 'src/cliente/entities/cliente.entity';

@Resolver(() => Mascota)
export class MascotaResolver {
  constructor(private readonly mascotaService:ServiceHttp) {}

  @Query(() => [Mascota], { name: 'mascotas' })
  findAll() {
    return this.mascotaService.findAllMascotas();
  }

  @Query(() => Mascota, { name: 'mascota' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.mascotaService.findMascota(id);
  }

  @ResolveField(() => Cliente)
  async cliente(@Parent() mascota: Mascota) {
    return (await this.mascotaService.findCliente(mascota.id_cliente))
  }

}
