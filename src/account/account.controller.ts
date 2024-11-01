import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './models/account.model';

@Controller('accounts')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  async create(@Body() data: CreateAccountDto): Promise<Account> {
    return this.accountService.create(data)
  }

  @Get()
  async findAll(): Promise<Account[]> {
    return this.accountService.findAll()
  }

  @Get(':number')
  async findByNumber(@Param('number') number: number): Promise<Account> {
    return this.accountService.findByNumber(Number(number))
  }

  @Patch(':number')
  async update(@Param('number') number: number, @Body() data: UpdateAccountDto): Promise<Account> {
    return this.accountService.updateByNumber(Number(number), data)
  }

  @Delete(':number')
  async remove(@Param('number') number: number): Promise <Account> {
    return this.accountService.deleteByNumber(Number(number))
  }
}
