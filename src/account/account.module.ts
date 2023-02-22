import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { Account, AccountSchema } from './schemas/account.schema';

@Module({
  controllers: [AccountController],
  providers: [AccountService],
  imports: [MongooseModule.forFeature([
    {name: Account.name, schema: AccountSchema}
  ])],
})
export class AccountModule {}
