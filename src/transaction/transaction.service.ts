import { Injectable } from '@nestjs/common'
import { TransactionDto } from './dto/transaction.dto';
import { TransactionsRepository } from './transaction.repository';
import { Transaction } from '@prisma/client';
import { TransferDto } from './dto/transfer.dto';


@Injectable()
export class TransactionService {
  
  constructor(private readonly transactionRepository: TransactionsRepository) { }

  async deposit(data: TransactionDto): Promise<Transaction> {
    return this.transactionRepository.deposit(data)
  }

  async withdraw(data: TransactionDto): Promise<Transaction> {
    return this.transactionRepository.withdraw(data)
  }

  async transfer(data: TransferDto): Promise<Transaction> {
    return this.transactionRepository.transfer(data)
  }

}
