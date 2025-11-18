import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteResolver } from './cliente.resolver';
import { ServiceHttp } from 'src/servicios/http.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [ClienteResolver, ServiceHttp],
})
export class ClienteModule {}
