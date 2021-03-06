import { Test, TestingModule } from '@nestjs/testing';
import { HealthController } from './health.controller';


describe('HealthController', () => {
  let healthController: HealthController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HealthController]
    }).compile();

    healthController = app.get<HealthController>(HealthController);
  });

  describe('Healths', () => {
    it('should return an object of health', async () => {
      expect(await healthController.healthy()).toMatchObject({ healthy: true });
    });
  });
});
