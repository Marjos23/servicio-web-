import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { ClienteService } from './cliente.service';
import { Cliente } from './entities/cliente.entity';
import { CreateClienteInput } from './dto/create-cliente.input';
import { UpdateClienteInput } from './dto/update-cliente.input';
import { ServiceHttp } from 'src/servicios/http.service';
import { Mascota } from 'src/mascota/entities/mascota.entity';
import { Param } from '@nestjs/common';

@Resolver(() => Cliente)
export class ClienteResolver {
  constructor(private readonly clienteService: ServiceHttp) { }

  @Query(() => [Cliente], { name: 'clientes' })
  findAll() {
    return this.clienteService.findAllClientes();
  }

  @Query(() => Cliente, { name: 'cliente' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.clienteService.findCliente(id);
  }

  @ResolveField(() => [Mascota])
  async mascotas(@Parent() cliente: Cliente) {
    return (await this.clienteService.findAllMascotas()).filter((mascota) => mascota.id_cliente === cliente.id)
  }
}
