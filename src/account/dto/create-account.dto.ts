import { IsNumber, IsPositive } from "class-validator"

export class CreateAccountDto {
    @IsNumber()
    number: number 

    @IsNumber({maxDecimalPlaces: 2})
    @IsPositive()
    balance: number

}
