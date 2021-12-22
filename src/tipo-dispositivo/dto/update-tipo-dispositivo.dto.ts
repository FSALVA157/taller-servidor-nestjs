import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoDispositivoDto } from './create-tipo-dispositivo.dto';

export class UpdateTipoDispositivoDto extends PartialType(CreateTipoDispositivoDto) {}
