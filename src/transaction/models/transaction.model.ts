import { TransactionType } from "@prisma/client";



export class Transaction {
  id: number;
  createdAt: Date;
  type: TransactionType;
  amount: number;
  fromAccount?: number;
  toAccount?: number;
  accountId: number;

  constructor(data: Partial<Transaction>) {
    Object.assign(this, data);
  }
}
