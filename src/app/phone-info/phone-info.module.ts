import { Module } from '@nestjs/common';
import { PhoneInfoController } from './phone-info.controller';
import { PhoneInfoService } from './phone-info.service';

@Module({
  imports: [],
  controllers: [PhoneInfoController],
  providers: [PhoneInfoService],
})
export class PhoneInfoModule {}
