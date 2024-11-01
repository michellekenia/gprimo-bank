import { Account } from "./models/account.model";
import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateAccountDto } from "./dto/create-account.dto";
import { UpdateAccountDto } from "./dto/update-account.dto";
import { PrismaService } from "src/adapters/prisma.service";
import { mapPrismaToAccount } from "./account.mapper";

@Injectable()
export class AccountRepository {

    constructor(private readonly prismaService: PrismaService) { }

    async create(data: CreateAccountDto): Promise<Account> {
        const existingAccount = await this.prismaService.account.findUnique({
            where: { number: data.number }
        })

        if (existingAccount) {
            throw new BadRequestException('O número da conta já existe.')
        }

        const account = await this.prismaService.account.create({ 
            data: {
                number: data.number,
                balance: data.balance ?? 0
            }
        })

        return mapPrismaToAccount(account)
    }


    async findByNumber(number: number): Promise<Account> {
        const account = await this.prismaService.account.findUnique({
            where: { number },
            include: { transactions: true }
        })

        if (!account) {
            throw new NotFoundException('Conta não encontrada.')
        }

        return mapPrismaToAccount(account)
    }

    async updateByNumber(number: number, data: UpdateAccountDto): Promise<Account> {
        const account = await this.prismaService.account.findUnique({
            where: { number }
        })

        if (!account) {
            throw new NotFoundException('Conta não encontrada.')
        }

        if (data.balance !== undefined && data.balance < 0) {
            throw new BadRequestException('O saldo não pode ser negativo.')
        }

        const updatedAccount = await this.prismaService.account.update({
            where: { number },
            data: {
                balance: data.balance
            }
        })

        return mapPrismaToAccount(updatedAccount)
    }

    async deleteByNumber(number: number): Promise<Account> {
        const account = await this.prismaService.account.findUnique({ 
            where: { number } 
        })

        if (!account) {
            throw new NotFoundException('Conta não encontrada.')
        }

        const deletedAccount = await this.prismaService.account.delete({ 
            where: { number } 
        })

        return mapPrismaToAccount(deletedAccount)
    }

    async findAll(): Promise<Account[]> {
        const accounts = await this.prismaService.account.findMany({
          include: { transactions: true }
        })
      
        return accounts.map(account => mapPrismaToAccount(account))
      }
      

}