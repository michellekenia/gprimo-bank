import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionModule } from './transaction/transaction.module';
import { AccountModule } from './account/account.module';
import { PrismaService } from './adapters/prisma.service';

@Module({
  imports: [AccountModule, TransactionModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
  exports: [PrismaService]
})
export class AppModule {}
