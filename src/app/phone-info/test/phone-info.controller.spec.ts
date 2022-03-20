import { Test, TestingModule } from '@nestjs/testing';
import { PhoneInfoController } from '../phone-info.controller';
import { PhoneInfoService } from '../phone-info.service';
import { PhoneInfo } from '../types/phone-info';

describe('PhoneInfoController', () => {
  let phoneInfoController: PhoneInfoController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PhoneInfoController],
      providers: [PhoneInfoService],
    }).compile();

    phoneInfoController = app.get<PhoneInfoController>(PhoneInfoController);
  });

  describe('getPhoneInfo', () => {
    it('should return an object with phone info', async () => {
      const phone = '5551999999999';
      const expected: PhoneInfo = {
        phoneInfo: {
          countryCode: '55',
          phone: phone.substring(2),
        },
        fullPhone: phone,
        country: 'Brasil'
      }
      expect(await phoneInfoController.getPhoneInfo(phone)).toMatchObject(expected);
    });
  });
});
