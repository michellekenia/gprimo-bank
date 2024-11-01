import { TransactionType } from "../enums/transaction-type.enum";


export class Transaction {
  id: number;
  createdAt: Date;
  type: TransactionType;
  amount: number;
  accountNumber: number;
  fromAccount?: number;
  toAccount?: number;
  accountId: number;

  constructor(data: Partial<Transaction>) {
    Object.assign(this, data);
  }
}
