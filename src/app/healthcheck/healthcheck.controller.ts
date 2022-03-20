import { Controller, Get } from '@nestjs/common';
import { HealthcheckService } from './healthcheck.service';

@Controller('healthcheck')
export class HealthcheckController {
  constructor(private readonly service: HealthcheckService) {}

  @Get()
  getData() {
    return this.service.get();
  }
}
