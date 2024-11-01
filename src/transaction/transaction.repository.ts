import { Injectable, NotFoundException } from "@nestjs/common";
import { Account } from "src/account/models/account.model";
import { PrismaService } from "src/adapters/prisma.service";

import { Transaction } from "./models/transaction.model";
import { TransactionDto } from "./dto/transaction.dto";
import { TransactionType } from "./enums/transaction-type.enum";

@Injectable()
export class TransactionsRepository {

    constructor(private readonly prismaService: PrismaService) { }

    async findAccountByNumber(accountNumber: number): Promise<Account> {
        const account = await this.prismaService.account.findUnique({
            where: {
                number: accountNumber
            }
        })
        if (!account) throw new NotFoundException('Conta não encontrada.')
        return account
    }

    async deposit(data: TransactionDto): Promise<Transaction> {
        const account = await this.findAccountByNumber(data.accountNumber)
        const updatedAccount = await this.prismaService.account.update({
            where: { number: data.accountNumber },
            data: { balance: { increment: data.amount }}
        })
        return new Transaction({ 
            type: TransactionType.DEPOSIT, 
            amount: data.amount, 
            accountNumber: updatedAccount.number 
        })
    }


}