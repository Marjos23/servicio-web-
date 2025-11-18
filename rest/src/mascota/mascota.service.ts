import { Injectable } from '@nestjs/common';
import { CreateMascotaDto } from './dto/create-mascota.dto';
import { UpdateMascotaDto } from './dto/update-mascota.dto';

const mascotas = [{
  id: "1",
  nombre: "Firulais",
  color: "cafe",
  id_cliente: "1"
},
{
  id: "2",
  nombre: "Max",
  color: "cafe",
  id_cliente: "2"
},
{
  id: "3",
  nombre: "Manchas",
  color: "cafe",
  id_cliente: "1"
}]

@Injectable()
export class MascotaService {

  findAll() {
    return mascotas
  }

  findOne(id: string) {
    const mascota = mascotas.find((mascota)=> mascota.id ===id)
    return mascota
  }
}
