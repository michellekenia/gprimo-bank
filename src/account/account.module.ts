import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { AccountRepository } from './account.repository';
import { PrismaService } from 'src/adapters/prisma.service';

@Module({
  controllers: [AccountController],
  providers: [AccountService, AccountRepository, PrismaService],
})
export class AccountModule {}
