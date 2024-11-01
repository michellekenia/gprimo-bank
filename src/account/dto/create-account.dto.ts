import { IsInt, IsNotEmpty, IsNumber, Min } from "class-validator"

export class CreateAccountDto {
    @IsNotEmpty()
    @IsInt()
    @Min(1, { message: 'O número da conta deve ser positivo.' })
    number: number 

    @IsNotEmpty()
    @IsNumber({maxDecimalPlaces: 2})
    @Min(0, {message: 'O saldo inicial não pode ser negativo.'}) 
    balance: number

}
