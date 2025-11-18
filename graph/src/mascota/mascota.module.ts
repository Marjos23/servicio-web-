import { Module } from '@nestjs/common';
import { MascotaService } from './mascota.service';
import { MascotaResolver } from './mascota.resolver';
import { ServiceHttp } from 'src/servicios/http.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [MascotaResolver, ServiceHttp],
})
export class MascotaModule {}
