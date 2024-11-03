import { Injectable, NotFoundException } from "@nestjs/common";
import { Account } from "src/account/models/account.model";
import { PrismaService } from "src/adapters/prisma.service";
import { TransactionDto } from "./dto/transaction.dto";
import { Transaction } from "@prisma/client";

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
        await this.findAccountByNumber(data.accountNumber)
        const [, transaction] = await this.prismaService.$transaction([
            
            this.prismaService.account.update({
                where: { number: data.accountNumber },
                data: { balance: { increment: data.amount }}
            }),

            this.prismaService.transaction.create({
                data: {
                    type: 'DEPOSIT', 
                    amount: data.amount, 
                    Account: { connect: { number: data.accountNumber } }
                }
            })

        ])
        
        return transaction
    }
    
}