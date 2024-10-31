import { Transaction } from "src/transaction/models/transaction.model";

export class Account {
    id: number; 
    number: number;
    balance: number;
    createdAt: Date;
    transactions?: Transaction []
    
}