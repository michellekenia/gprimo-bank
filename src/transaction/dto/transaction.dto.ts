import { TransactionType } from "@prisma/client";
import { IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, Min } from "class-validator";


export class CreateTransactionDto {}


export class TransactionDto {
    @IsEnum(TransactionType)
    type: TransactionType;
  
    @IsNumber({maxDecimalPlaces: 2})
    @IsPositive()
    amount: number;
  
    @IsInt()
    @Min(1, { message: 'O número da conta deve ser positivo.' })
    accountNumber: number

    @IsInt()
    @IsOptional()
    @Min(1, { message: 'O número da conta deve ser positivo.' })
    fromAccountId?: number;
  
    @IsInt()
    @IsOptional()
    @Min(1, { message: 'O número da conta deve ser positivo.' })
    toAccountId?: number;
  }
  