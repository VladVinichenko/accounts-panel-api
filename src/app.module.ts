import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountController } from './account/account.controller';
import { AccountService } from './account/account.service';
import { AccountModule } from './account/account.module';
import { CompanyController } from './company/company.controller';
import { CompanyService } from './company/company.service';
import { CompanyModule } from './company/company.module';
import { CurrencyController } from './currency/currency.controller';
import { CurrencyService } from './currency/currency.service';
import { CurrencyModule } from './currency/currency.module';

@Module({
  imports: [AccountModule, CompanyModule, CurrencyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
