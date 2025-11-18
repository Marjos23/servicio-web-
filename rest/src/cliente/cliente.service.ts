import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

const clientes = [{
  id: "1",
  nombre: "Pedro",
  correo: "pedro@gmail.com"
},
{
  id: "2",
  nombre: "Juan",
  correo: "juan@gmail.com"
},
{
  id: "3",
  nombre: "Miquel",
  correo: "miquel@gmail.com"
}]

@Injectable()
export class ClienteService {

  findAll() {
    return clientes
  }

  findOne(id: string) {
    const cliente = clientes.find((cliente)=>cliente.id === id)
    return cliente
  }

}
