import { Controller, Get, Param } from '@nestjs/common';
import { PhoneInfoService } from './phone-info.service';

@Controller('phone-info')
export class PhoneInfoController {
  constructor(private readonly phoneInfoService: PhoneInfoService) {}

  @Get(':phone')
  public async getPhoneInfo(@Param('phone') phone: string) {
    return await this.phoneInfoService.getPhoneInfo(phone);
  }
}
