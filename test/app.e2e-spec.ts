import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { HealthcheckModule } from '../src/app/healthcheck/healthcheck.module';
import * as request from 'supertest';

describe('AppModule (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [HealthcheckModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/healthcheck (GET)', () => {
    const expeted = '{"status":"UP"}';
    return request(app.getHttpServer())
      .get('/healthcheck')
      .expect(200)
      .expect(expeted);
  });
});
