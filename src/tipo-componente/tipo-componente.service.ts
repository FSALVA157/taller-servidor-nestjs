import { Injectable } from '@nestjs/common';
import { CreateTipoComponenteDto } from './dto/create-tipo-componente.dto';
import { UpdateTipoComponenteDto } from './dto/update-tipo-componente.dto';

@Injectable()
export class TipoComponenteService {
  create(createTipoComponenteDto: CreateTipoComponenteDto) {
    return 'This action adds a new tipoComponente';
  }

  findAll() {
    return `This action returns all tipoComponente`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoComponente`;
  }

  update(id: number, updateTipoComponenteDto: UpdateTipoComponenteDto) {
    return `This action updates a #${id} tipoComponente`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoComponente`;
  }
}
