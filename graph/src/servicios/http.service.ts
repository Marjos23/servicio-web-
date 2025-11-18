import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Mascota } from 'src/mascota/entities/mascota.entity';

@Injectable()
export class ServiceHttp {
  private readonly logger = new Logger(ServiceHttp.name);
  constructor(private readonly httpService: HttpService) {}

  async findAllClientes(): Promise<Cliente[]> {
    const { data } = await firstValueFrom(
      this.httpService.get<Cliente[]>('http://localhost:3000/api/cliente').pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response?.data);
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  }

    async findAllMascotas(): Promise<Mascota[]> {
        const { data } = await firstValueFrom(
        this.httpService.get<Mascota[]>('http://localhost:3000/api/mascota').pipe(
            catchError((error: AxiosError) => {
            this.logger.error(error.response?.data);
            throw 'An error happened!';
            }),
        ),
        );
    return data;
  }

  async findCliente(id: string): Promise<Cliente> {
    const { data } = await firstValueFrom(
      this.httpService.get<Cliente>(`http://localhost:3000/api/cliente/${id}`).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response?.data);
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  }
  async findMascota(id: string): Promise<Mascota> {
    const { data } = await firstValueFrom(
      this.httpService.get<Mascota>(`http://localhost:3000/api/mascota/${id}`).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response?.data);
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  }
}