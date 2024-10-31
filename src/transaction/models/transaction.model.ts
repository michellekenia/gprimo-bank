import { Account } from "@prisma/client";
import { TransactionType } from "../enuns/transaction-type.enum";


export class Transaction {
    id: number;
    type: TransactionType;
    amount: number;
    fromAccount?: Account;
    toAccount?: Account; 
    createdAt: Date;
    accountId: number;
    
}