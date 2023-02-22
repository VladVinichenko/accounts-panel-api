import { Controller, HttpException, HttpStatus } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators';
import { CurrencyService } from './currency.service';

@Controller('currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService){}



  @Get()
  async getAccessible() {
    try {
      return this.currencyService.getAccessible()
    } catch (error) {
      throw new HttpException(error, HttpStatus.NOT_FOUND)
    }
  }

  @Get('all')
  async getAll() {
    try {
      return this.currencyService.getAll()
    } catch (error) {
      throw new HttpException(error, HttpStatus.NOT_FOUND)
    }
  }
}
