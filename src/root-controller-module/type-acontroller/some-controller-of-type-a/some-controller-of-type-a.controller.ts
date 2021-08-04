import { Controller, Get } from '@nestjs/common';

@Controller('some-controller-of-type-a')
export class SomeControllerOfTypeAController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}
