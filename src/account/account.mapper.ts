import { Account } from './models/account.model';

export function mapPrismaToAccount(data: any): Account {
  return new Account({
    id: data.id,
    number: data.number,
    balance: data.balance,
    createdAt: data.createdAt,
    transactions: data.transactions || []
  })
}
