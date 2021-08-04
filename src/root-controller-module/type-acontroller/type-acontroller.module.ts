import { Module } from '@nestjs/common';
import { SomeControllerOfTypeAController } from './some-controller-of-type-a/some-controller-of-type-a.controller';

@Module({
  providers: [SomeControllerOfTypeAController],
  exports: [SomeControllerOfTypeAController],
  controllers: [SomeControllerOfTypeAController],
})
export class TypeAcontrollerModule {}
