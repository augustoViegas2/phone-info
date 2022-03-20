import { Module } from '@nestjs/common';
import { HealthcheckModule } from './healthcheck/healthcheck.module';
import { PhoneInfoModule } from './phone-info/phone-info.module';

@Module({
  imports: [HealthcheckModule, PhoneInfoModule],
})
export class AppModule {}
