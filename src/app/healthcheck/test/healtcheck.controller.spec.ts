import { Test, TestingModule } from '@nestjs/testing';
import { HealthcheckController } from '../healthcheck.controller';
import { HealthcheckService } from '../healthcheck.service';

describe('HealthcheckController', () => {
  let healthcheckController: HealthcheckController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HealthcheckController],
      providers: [HealthcheckService],
    }).compile();

    healthcheckController = app.get<HealthcheckController>(
      HealthcheckController,
    );
  });

  describe('healthcheck', () => {
    it('should return STATUS: UP', () => {
      const expeted = { "status": "UP" };
      expect(healthcheckController.healthcheck()).toEqual(expeted);
    });
  });
});
