import { Module } from '@nestjs/common';
import { ComponentesService } from './componentes.service';
import { ComponentesController } from './componentes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Componente } from './entities/componente.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Componente
    ])
  ],
  controllers: [ComponentesController],
  providers: [ComponentesService]
})
export class ComponentesModule {}
