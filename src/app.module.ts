import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
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
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }),AccountModule, CompanyModule, CurrencyModule, MongooseModule.forRoot(process.env.URL_DB)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
