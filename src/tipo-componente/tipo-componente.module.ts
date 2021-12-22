import { Module } from '@nestjs/common';
import { TipoComponenteService } from './tipo-componente.service';
import { TipoComponenteController } from './tipo-componente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoComponente } from './entities/tipo-componente.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
        TipoComponente
    ])
  ],
  controllers: [TipoComponenteController],
  providers: [TipoComponenteService]
})
export class TipoComponenteModule {}
