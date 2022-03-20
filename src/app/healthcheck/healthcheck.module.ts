import { Module } from '@nestjs/common';
import { HealthcheckController } from './healthcheck.controller';
import { HealthcheckService } from './healthcheck.service';

@Module({
  imports: [],
  providers: [HealthcheckService],
  controllers: [HealthcheckController],
  exports: [HealthcheckService],
})
export class HealthcheckModule {}
