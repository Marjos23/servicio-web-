import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MascotaService } from './mascota.service';
import { CreateMascotaDto } from './dto/create-mascota.dto';
import { UpdateMascotaDto } from './dto/update-mascota.dto';

@Controller('mascota')
export class MascotaController {
  constructor(private readonly mascotaService: MascotaService) {}

  @Get()
  findAll() {
    return this.mascotaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mascotaService.findOne(id);
  }
}
