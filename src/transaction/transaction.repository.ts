import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { Account } from "src/account/models/account.model";
import { PrismaService } from "src/adapters/prisma.service";
import { TransactionDto } from "./dto/transaction.dto";
import { Transaction, TransactionType } from "@prisma/client";
import { TransferDto } from "./dto/transfer.dto";

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

    async withdraw(data: TransactionDto): Promise<Transaction> {
        const account = await this.findAccountByNumber(data.accountNumber)

        if(account.balance < data.amount) {
            throw new BadRequestException("Saldo Insuficiente para saque.")

        }

        const [, transaction] = await this.prismaService.$transaction([
            
            this.prismaService.account.update({
                where: { number: data.accountNumber },
                data: { balance: { decrement: data.amount }}
            }),

            this.prismaService.transaction.create({
                data: {
                    type: 'WITHDRAW', 
                    amount: data.amount, 
                    Account: { connect: { number: data.accountNumber } }
                }
            })

        ])
        
        return transaction
    }

    async transfer(data: TransferDto): Promise<Transaction> {
        const fromAccount = await this.findAccountByNumber(data.fromAccountNumber)
        const toAccount = await this.findAccountByNumber(data.toAccountNumber)

        if(fromAccount.balance < data.amount) {
            throw new BadRequestException("Saldo Insuficiente para transferência.")
        }

        const [, , transaction] = await this.prismaService.$transaction([
            
            this.prismaService.account.update({
                where: { id: fromAccount.id },
                data: { balance: { decrement: data.amount }}
            }),

            this.prismaService.account.update({
                where: { id: toAccount.id },
                data: { balance: { increment: data.amount }}
            }),

            this.prismaService.transaction.create({
                data: {
                    type: 'TRANSFER', 
                    amount: data.amount, 
                    fromAccountNumber: data.fromAccountNumber,
                    toAccountNumber: data.toAccountNumber,
                    Account: { connect: { number: data.fromAccountNumber } },
                }
            })

        ])
        
        return transaction
    }
    
}