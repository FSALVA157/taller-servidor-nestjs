import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateComponenteDto } from './dto/create-componente.dto';
import { UpdateComponenteDto } from './dto/update-componente.dto';
import { Componente } from './entities/componente.entity';

@Injectable()
export class ComponentesService {

  constructor(
    @InjectRepository(Componente)
    private readonly componenteRepository: Repository<Componente>
  ){}


  async createOne(data: CreateComponenteDto) {
    try {
      return await this.componenteRepository.save(data);
    } catch (error) {
      throw new BadRequestException(error.message);
      
    }
  }

  async findAll() {
    try {
      return await this.componenteRepository.findAndCount();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: number) {
    try {
      return await this.componenteRepository.findOneOrFail(id);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(id: number, data: UpdateComponenteDto) {
    try {
      return await this.componenteRepository.update(id, data);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

 async remove(id: number) {
  try {
    return await this.componenteRepository.softDelete(id);
  } catch (error) {
    throw new BadRequestException(error.message);
  }
  }
}
