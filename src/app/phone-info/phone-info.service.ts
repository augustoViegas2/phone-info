import { Injectable } from '@nestjs/common';
import { onlyNumbers } from '../utils/phoneUtil';
import { countryInfo } from './country/country-info';
import { PhoneInfo } from './types/phone-info';

@Injectable()
export class PhoneInfoService {
  async getPhoneInfo(phone: string): Promise<PhoneInfo> {
    const number = onlyNumbers(phone);
    const country = this.findWithCountryCode(number);
    if (!country) {
      throw new Error(`No information found for number ${number}`);
    }
    return {
      phoneInfo: {
        countryCode: country.countryCode,
        phone: number.substring(country.countryCode.length),
        fullPhone: number,
      },
      country: country.name,
    };
  }

  private findWithCountryCode(number: string) {
    const fourDigitsCode = number.substring(0, 4);
    const threeDigitsCode = number.substring(0, 3);
    const twoDigitsCode = number.substring(0, 2);
    const oneDigitCode = number.substring(0, 1);
    const country = countryInfo.find((country) => {
      return (
        fourDigitsCode === country.countryCode ||
        threeDigitsCode === country.countryCode ||
        twoDigitsCode === country.countryCode ||
        oneDigitCode === country.countryCode
      );
    });
    return country;
  }
}
