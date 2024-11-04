import { TransactionType } from '@prisma/client';
import { IsEnum, IsInt, IsPositive } from 'class-validator';

export class TransferDto {

  @IsEnum(TransactionType)
  type: TransactionType

  @IsInt({ message: 'fromAccountNumber must be an integer number' })
  @IsPositive({ message: 'O número da conta de origem deve ser positivo.' })
  fromAccountNumber: number

  @IsInt({ message: 'toAccountNumber must be an integer number' })
  @IsPositive({ message: 'O número da conta de destino deve ser positivo.' })
  toAccountNumber: number

  @IsInt({ message: 'amount must be an integer number' })
  @IsPositive({ message: 'O valor da transação deve ser positivo.' })
  amount: number
}
