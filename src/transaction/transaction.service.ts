import { Injectable } from '@nestjs/common'

import { TransactionDto } from './dto/transaction.dto';
import { Transaction } from './models/transaction.model';
import { TransactionsRepository } from './transaction.repository';

@Injectable()
export class TransactionService {
  
  constructor(private readonly transactionRepository: TransactionsRepository) { }

  async deposit(data: TransactionDto): Promise<Transaction> {
    return this.transactionRepository.deposit(data)
  }

}
