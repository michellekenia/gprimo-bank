import { TransactionType } from "@prisma/client";
import { IsEnum, IsInt, IsNumber, IsOptional, IsPositive, Min } from "class-validator";

export class TransactionDto {
    @IsEnum(TransactionType)
    type: TransactionType;
  
    @IsNumber({maxDecimalPlaces: 2})
    @IsPositive({message: 'O saldo deve ser maior do que zero.'})
    amount: number;
  
    @IsInt()
    @Min(1, { message: 'O número da conta deve ser positivo.' })
    accountNumber: number
  }
  