import { Test, TestingModule } from '@nestjs/testing';
import { TipoComponenteController } from './tipo-componente.controller';
import { TipoComponenteService } from './tipo-componente.service';

describe('TipoComponenteController', () => {
  let controller: TipoComponenteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoComponenteController],
      providers: [TipoComponenteService],
    }).compile();

    controller = module.get<TipoComponenteController>(TipoComponenteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
