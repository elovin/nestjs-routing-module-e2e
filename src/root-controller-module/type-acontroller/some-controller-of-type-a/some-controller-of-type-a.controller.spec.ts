import { Test, TestingModule } from '@nestjs/testing';
import { SomeControllerOfTypeAController } from './some-controller-of-type-a.controller';

describe('SomeControllerOfTypeAController', () => {
  let controller: SomeControllerOfTypeAController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SomeControllerOfTypeAController],
    }).compile();

    controller = module.get<SomeControllerOfTypeAController>(
      SomeControllerOfTypeAController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
