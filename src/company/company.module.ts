import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { Company, CompanySchema } from './schemas/company.schema';

@Module({
  controllers:[CompanyController],
  providers: [CompanyService],
  imports: [MongooseModule.forFeature([
    {name: Company.name, schema: CompanySchema}
  ])],
})
export class CompanyModule {}
