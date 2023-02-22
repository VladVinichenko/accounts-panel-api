import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';

@Module({
  controllers: [AccountController],
  providers: [AccountService],
  // imports: [MongooseModule.forFeature([
    // {name: Product.name, schema: ProductSchema}
  // ])],
})
export class AccountModule {}
