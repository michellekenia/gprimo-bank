import { IsNotEmpty, IsNumber, Min } from "class-validator"

export class CreateAccountDto {
    @IsNotEmpty()
    @IsNumber()
    number: number 

    @IsNotEmpty()
    @IsNumber({maxDecimalPlaces: 2})
    @Min(0) 
    balance: number

}
