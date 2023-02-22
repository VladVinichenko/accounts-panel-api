import { Controller, HttpException, HttpStatus, Get } from '@nestjs/common';
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
