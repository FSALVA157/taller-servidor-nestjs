import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoDispositivoService } from './tipo-dispositivo.service';
import { CreateTipoDispositivoDto } from './dto/create-tipo-dispositivo.dto';
import { UpdateTipoDispositivoDto } from './dto/update-tipo-dispositivo.dto';

@Controller('tipo-dispositivo')
export class TipoDispositivoController {
  constructor(private readonly tipoDispositivoService: TipoDispositivoService) {}

  @Post()
  create(@Body() createTipoDispositivoDto: CreateTipoDispositivoDto) {
    return this.tipoDispositivoService.create(createTipoDispositivoDto);
  }

  @Get()
  findAll() {
    return this.tipoDispositivoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoDispositivoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoDispositivoDto: UpdateTipoDispositivoDto) {
    return this.tipoDispositivoService.update(+id, updateTipoDispositivoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoDispositivoService.remove(+id);
  }
}
