import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { PrismaService } from 'src/adapters/prisma.service';
import { TransactionsRepository } from './transaction.repository';

@Module({
  controllers: [TransactionController],
  providers: [TransactionService,TransactionsRepository, PrismaService],
})
export class TransactionModule {}
