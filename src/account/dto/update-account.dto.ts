import { IsNumber, IsPositive } from "class-validator";

export class UpdateAccountDto {
    
    @IsNumber({maxDecimalPlaces: 2})
    @IsPositive()
    balance?: number

}
