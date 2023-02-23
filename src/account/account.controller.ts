import { Controller, HttpException, HttpStatus, Get, Param, Post, Body, Put } from '@nestjs/common';
import { Delete, Query } from '@nestjs/common/decorators';
import { AccountService } from './account.service';
import { CreateAccountDTO } from './dto/create-account.dto';
import { CreatePatmentAccountDTO } from './dto/createPayment-account.dto';
import { Account } from './schemas/account.schema';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) { }

  @Get()
  async getAll(@Query('filter') filter?: string): Promise<Account[]> {

    try {
      return await this.accountService.getAll(filter)
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND)
    }
  }


  @Get(':id')
  async getOne(@Param('id') id:string): Promise<Account> {

    try {
      return await this.accountService.getById(id)
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND)
    }

  }

  @Post()
  async create(@Body() createAccountDTO: CreateAccountDTO) : Promise<Account> {
    try {
      return await this.accountService.create(createAccountDTO) 
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
    }
  }


  @Delete(':id')
  async remove(@Param('id') id: string) : Promise<Account> {
    return await this.accountService.remove(id)
  }

  @Put(':id')
  async createPayment(@Body() createPatmentDTO: CreatePatmentAccountDTO, @Param('id') id: string) : Promise<Account> {
    return this.accountService.createPayment(id, createPatmentDTO)
  }
}