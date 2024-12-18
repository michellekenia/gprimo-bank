import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionDto } from './dto/transaction.dto';
import { Transaction } from './models/transaction.model';
import { TransferDto } from './dto/transfer.dto';

@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post('deposit')
  async deposit(@Body() data: TransactionDto): Promise<Transaction> {
    return this.transactionService.deposit(data)
  }

  @Post('withdraw')
  async withdraw(@Body() data: TransactionDto): Promise<Transaction> {
    return this.transactionService.withdraw(data)
  }

  @Post('transfer')
  async transfer(@Body() data: TransferDto): Promise<Transaction> {
    return this.transactionService.transfer(data)
  }

}
