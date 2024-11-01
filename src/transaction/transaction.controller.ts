import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionDto } from './dto/transaction.dto';
import { Transaction } from './models/transaction.model';

@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post('deposit')
  async create(@Body() data: TransactionDto): Promise<Transaction> {
    return this.transactionService.deposit(data)
  }

  @Get()
  findAll() {
    
  }

  @Get(':id')
  findOne(@Param('id') id: string) {

  }

  @Delete(':id')
  remove(@Param('id') id: string) {
  }

}
