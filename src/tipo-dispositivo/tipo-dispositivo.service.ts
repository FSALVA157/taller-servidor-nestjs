import { Injectable } from '@nestjs/common';
import { CreateTipoDispositivoDto } from './dto/create-tipo-dispositivo.dto';
import { UpdateTipoDispositivoDto } from './dto/update-tipo-dispositivo.dto';

@Injectable()
export class TipoDispositivoService {
  create(createTipoDispositivoDto: CreateTipoDispositivoDto) {
    return 'This action adds a new tipoDispositivo';
  }

  findAll() {
    return `This action returns all tipoDispositivo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoDispositivo`;
  }

  update(id: number, updateTipoDispositivoDto: UpdateTipoDispositivoDto) {
    return `This action updates a #${id} tipoDispositivo`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoDispositivo`;
  }
}
