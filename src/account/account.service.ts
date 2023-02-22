import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAccountDTO } from './dto/create-account.dto';
import { CreatePatmentAccountDTO } from './dto/createPayment-account.dto';
import { Account, AccountDocument } from './schemas/account.schema';

@Injectable()
export class AccountService {



  constructor(@InjectModel(Account.name) private accountModel: Model<AccountDocument>) { }


  async getAll(): Promise<Account[]> {
    return await this.accountModel.find().exec()
  }


  async getById(id: string): Promise<Account> {
    return await this.accountModel.findById(id)
  }

  async create(accountDTO: CreateAccountDTO): Promise<Account> {
    const accountNumber = await this.accountModel.find().count() + 1
    const zeroLength: number = 10
    return await this.accountModel.create({ ...accountDTO, accountNumber: `${Date.now().toString()}${accountNumber.toString().padStart(zeroLength, '0')}` })

  }

  async remove(id: string): Promise<Account> {
    return await this.accountModel.findByIdAndDelete(id)
  }

  async createPayment(id: string, createPatmentDTO: CreatePatmentAccountDTO): Promise<Account> {
    if (createPatmentDTO.sendPayment !== 'send') throw new HttpException('not payment', HttpStatus.BAD_REQUEST)
    const currentPaymentTime : any[] = await this.accountModel.find({_id: id})
    if (currentPaymentTime[0].paymentTime) throw new HttpException('will be payment', HttpStatus.BAD_REQUEST)    
    return this.accountModel.findByIdAndUpdate(id, { paymentTime: Date.now() }, {returnDocument: 'after'})

}
}