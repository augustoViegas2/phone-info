import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthcheckService {
  get() {
    return { status: 'UP' };
  }
}
