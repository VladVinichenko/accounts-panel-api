import { Controller, HttpException, HttpStatus, Get } from '@nestjs/common';
import { CompanyService } from './company.service';
import { Company } from './schemas/company.schema';

@Controller('company')
export class CompanyController {
constructor(private readonly companyService: CompanyService){}


@Get()
async getAll() :Promise<Company[]> {
  try {
    return await this.companyService.getAll()
  } catch (error) {
    throw new HttpException(error, HttpStatus.NOT_FOUND)
  }
}
}
