import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoComponenteService } from './tipo-componente.service';
import { CreateTipoComponenteDto } from './dto/create-tipo-componente.dto';
import { UpdateTipoComponenteDto } from './dto/update-tipo-componente.dto';

@Controller('tipo-componente')
export class TipoComponenteController {
  constructor(private readonly tipoComponenteService: TipoComponenteService) {}

  @Post()
  create(@Body() createTipoComponenteDto: CreateTipoComponenteDto) {
    return this.tipoComponenteService.create(createTipoComponenteDto);
  }

  @Get()
  findAll() {
    return this.tipoComponenteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoComponenteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoComponenteDto: UpdateTipoComponenteDto) {
    return this.tipoComponenteService.update(+id, updateTipoComponenteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoComponenteService.remove(+id);
  }
}
