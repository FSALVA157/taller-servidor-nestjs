import { Test, TestingModule } from '@nestjs/testing';
import { TipoComponenteService } from './tipo-componente.service';

describe('TipoComponenteService', () => {
  let service: TipoComponenteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoComponenteService],
    }).compile();

    service = module.get<TipoComponenteService>(TipoComponenteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
