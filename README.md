# Banco GPrimo Bank 

Uma API de gerenciamento de contas bancárias, que permite operações de depósito, saque e transferência entre contas

## Funcionalidades Principais

- Criar conta: Cria uma nova conta bancária com saldo inicial.
- Consultar conta: Busca uma conta específica pelo número, incluindo o histórico de transações.
- Atualiza conta: Atualiza uma conta através do seu número.
- Deleta conta: Deleta uma conta através do seu número.
- Depósito: Realiza depósitos na conta, atualizando o saldo.
- Saque: Permite saques na conta, com verificação de saldo suficiente.
- Transferência: Realiza transferências entre duas contas, com transações registradas para ambas as contas.

## Índice

- [Tecnologias](#tecnologias)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Instalação e Execução do Projeto](#instalação-e-execução-do-projeto)
- [Uso](#uso)
- [Observações](#observações)

## Tecnologias

- **Node.js**: Ambiente de execução.
- **NestJS**: Framework para construir aplicações escaláveis e eficientes.
- **Prisma**: ORM para manipulação de banco de dados.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados.
- **TypeScript**: Linguagem utilizada para o desenvolvimento do projeto.

## Configuração do Ambiente

Este projeto utiliza um arquivo `.env` para gerenciar as variáveis de ambiente necessárias para a conexão com o banco de dados e outras configurações.

### Passos para Configurar o Arquivo `.env`

1. **Criar o Arquivo `.env`**:
   No diretório raiz do seu projeto, crie um arquivo chamado `.env`.

2. **Adicionar Variáveis de Ambiente**:
   Abra o arquivo `.env` e adicione as seguintes variáveis, substituindo os valores de exemplo pelos seus dados reais:

   ```env
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

## Instalação e Execução do Projeto

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/michellekenia/gprimo-bank
   cd gprimo-bank

2. **Instale as dependências**:
   ```bash
   npm install

3. **Execute as migrações do banco de dados**:
   ```bash
   npx prisma migrate dev

4. **Inicie a aplicação**:
   ```bash
   npm run start

## Uso

**Exemplo de alguns retornos que a API oferece :**

**1. Criar conta (POST)**

**URL: http://localhost:3000/accounts** 
   

**Corpo da Requisição:**
   ~~~json
   { 
      "number": 1010,
      "balance": 1000
   }
   ~~~

**2. Realizar depósito (POST)**
**URL: http://localhost:3000/transactions/deposit**

**Corpo da Requisição:**

  ~~~json
 {
    "type": "DEPOSIT",
    "amount": 100, 
    "accountNumber": 2020 
  }
 ~~~

**3. Realizar saque (POST)**
**URL: http://localhost:3000/transactions/withdraw**

**Corpo da Requisição:**
  ~~~json
  {
    "type": "WITHDRAW",
    "amount": 100, 
    "accountNumber": 1010
  }
 ~~~

**4. Realizar transferência (POST)**
**URL: http://localhost:3000/transactions/transfer**

**Corpo da Requisição:**
  ~~~json
  { 
  "type": "TRANSFER",
  "fromAccountNumber": 2020,    
  "toAccountNumber": 1010,      
  "amount": 155             
}

 ~~~

**5. Buscar uma conta específica (GET)**

**URL: http://localhost:3000/account{numeroconta}**
 ~~~json
{
  "id": 2,
  "number": 1010,
  "balance": 455,
  "createdAt": "2024-11-03T23:16:59.526Z",
  "transactions": [
    {
      "id": 1,
      "type": "DEPOSIT",
      "amount": 100,
      "createdAt": "2024-11-03T23:17:10.869Z",
      "fromAccountNumber": null,
      "toAccountNumber": null,
      "accountId": 2
    }
  ]
}
   ~~~

**6. Buscar todas as contas (GET)**

**URL: http://localhost:3000/accounts**
 ~~~json
[
  {
    "id": 3,
    "number": 2020,
    "balance": 145,
    "createdAt": "2024-11-03T23:33:40.053Z",
    "transactions": [
      {
        "id": 2,
        "type": "DEPOSIT",
        "amount": 100,
        "createdAt": "2024-11-03T23:33:47.880Z",
        "fromAccountNumber": null,
        "toAccountNumber": null,
        "accountId": 3
      },
      {
        "id": 3,
        "type": "TRANSFER",
        "amount": 155,
        "createdAt": "2024-11-03T23:34:10.423Z",
        "fromAccountNumber": 2020,
        "toAccountNumber": 1010,
        "accountId": 3
      }
    ]
  },
  {
    "id": 2,
    "number": 1010,
    "balance": 305,
    "createdAt": "2024-11-03T23:16:59.526Z",
    "transactions": [
      {
        "id": 1,
        "type": "DEPOSIT",
        "amount": 100,
        "createdAt": "2024-11-03T23:17:10.869Z",
        "fromAccountNumber": null,
        "toAccountNumber": null,
        "accountId": 2
      },
      {
        "id": 4,
        "type": "WITHDRAW",
        "amount": 150,
        "createdAt": "2024-11-04T00:04:02.435Z",
        "fromAccountNumber": null,
        "toAccountNumber": null,
        "accountId": 2
      }
    ]
  }
]
   ~~~


## Observações

### As tecnologias utilizadas foram escolhidas para testar aprendizados obtidos no curso de JavaScript + NestJS da {Reprograma}.
### Algumas melhorias são necessárias, como ajustar arquitetura e realizar testes.

