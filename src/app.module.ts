import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DispositivosModule } from './dispositivos/dispositivos.module';
import { EstadoModule } from './estado/estado.module';
import { ComponentesModule } from './componentes/componentes.module';
import { TipoComponenteModule } from './tipo-componente/tipo-componente.module';
import { PersonalModule } from './personal/personal.module';
import { TipoDispositivoModule } from './tipo-dispositivo/tipo-dispositivo.module';
import { TrabajosModule } from './trabajos/trabajos.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnidadModule } from './unidad/unidad.module';
import { DepartamentoModule } from './departamento/departamento.module';
import { DivisionModule } from './division/division.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get<string>('DATABASE_HOST'),
        port: parseInt(config.get<string>('DATABASE_PORT'),10),
        username: config.get<string>('DATABASE_USERNAME'),
        password: config.get<string>('DATABASE_PASSWORD'),
        database: config.get<string>('DATABASE_NAME'),
        entities: [__dirname + "./**/**/*.entity{.ts,.js}"],
        autoLoadEntities: true,
        synchronize: true,
      }) 
    }),

    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),

    DispositivosModule,
    EstadoModule,
    ComponentesModule,
    TipoComponenteModule,
    PersonalModule,
    TipoDispositivoModule,
    TrabajosModule,
    UnidadModule,
    DepartamentoModule,
    DivisionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
