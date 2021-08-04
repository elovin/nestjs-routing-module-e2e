import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RouterModule } from '@nestjs/core';
import { RootControllerModule } from './root-controller-module/root-controller.module';
import { TypeAcontrollerModule } from './root-controller-module/type-acontroller/type-acontroller.module';

export const exampleRoutes = [
  {
    path: 'api',
    module: RootControllerModule,
    children: [
      {
        path: 'parent_controller_a',
        module: TypeAcontrollerModule,
      },
    ],
  },
];

@Module({
  imports: [
    // routing path /api/parent_controller_a/
    RouterModule.register(exampleRoutes),
    RootControllerModule,
    TypeAcontrollerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
