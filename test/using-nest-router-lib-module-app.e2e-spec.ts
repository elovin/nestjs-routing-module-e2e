import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule, exampleRoutes } from '../src/app.module';
import { RouterModule } from '@nestjs/core';
import { RouterModule as RouterModuleFromNestRouterLib } from 'nest-router';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  afterEach(async () => {
    await app.close();
  });

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(RouterModule)
      .useFactory({
        factory: () => {
          return RouterModuleFromNestRouterLib.forRoutes(exampleRoutes);
        },
      })
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  // works
  it('/api/parent_controller_a/some-controller-of-type-a', () => {
    return request(app.getHttpServer())
      .get('/api/parent_controller_a/some-controller-of-type-a')
      .expect(200)
      .expect('Hello World!');
  });

  it('/api/parent_controller_a/some-controller-of-type-a', () => {
    return request(app.getHttpServer())
      .get('/api/parent_controller_a/some-controller-of-type-a')
      .expect(200)
      .expect('Hello World!');
  });
});
