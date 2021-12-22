import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoComponenteDto } from './create-tipo-componente.dto';

export class UpdateTipoComponenteDto extends PartialType(CreateTipoComponenteDto) {}
