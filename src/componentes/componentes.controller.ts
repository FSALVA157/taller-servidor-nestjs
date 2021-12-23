import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, Put } from '@nestjs/common';
import { ComponentesService } from './componentes.service';
import { CreateComponenteDto } from './dto/create-componente.dto';
import { UpdateComponenteDto } from './dto/update-componente.dto';

@Controller('componentes')
export class ComponentesController {
  constructor(private readonly componentesService: ComponentesService) {}

  @Post()
  create(@Body() createComponenteDto: CreateComponenteDto) {
    try {
      return this.componentesService.createOne(createComponenteDto);      
    } catch (error) {
      throw new BadRequestException(error.message);
      
    }
  }

  @Get()
  findAll() {
    try {
      return this.componentesService.findAll();      
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.componentesService.findOne(+id);      
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateComponenteDto: UpdateComponenteDto) {
    try {
      return this.componentesService.update(+id, updateComponenteDto);      
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.componentesService.remove(+id);      
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
