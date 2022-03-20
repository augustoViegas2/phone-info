import { Injectable } from '@nestjs/common';
import { onlyNumbers } from '../utils/phoneUtil';
import { countryInfo } from './country/country-info';
import { PhoneInfo } from './types/phone-info';

@Injectable()
export class PhoneInfoService {
  async getPhoneInfo(phone: string): Promise<PhoneInfo> {
    const number = onlyNumbers(phone)
    const country = countryInfo.find((country) => number.startsWith(country.countryCode))
    return {
      phoneInfo: {
        countryCode: country.countryCode,
        phone: number.substring(country.countryCode.length),
      },
      fullPhone: number,
      country: country.name
    }
  }
}
