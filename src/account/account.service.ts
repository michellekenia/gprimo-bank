import { Injectable } from '@nestjs/common';
import { UpdateAccountDto } from './dto/update-account.dto';
import { AccountRepository } from './account.repository';
import { CreateAccountDto } from './dto/create-account.dto';
import { Account } from './models/account.model';

@Injectable()
export class AccountService {
  constructor(private readonly accountRepository: AccountRepository) {}


  async create(data: CreateAccountDto): Promise <Account> {
    return this.accountRepository.create(data)
  }

  async findAll(): Promise <Account[]> {
    return this.accountRepository.findAll()
  }

  async findByNumber (number: number): Promise <Account> {
    return this.accountRepository.findByNumber(number)
  }

  async updateByNumber (number: number, data: UpdateAccountDto): Promise <Account> {
    return this.accountRepository.updateByNumber(number, data)
  }

  async deleteByNumber(number: number): Promise <Account> {
    return this.accountRepository.deleteByNumber(number)
  }
}
