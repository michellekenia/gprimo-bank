import { IsNumber, IsOptional, IsPositive } from "class-validator";

export class UpdateAccountDto {
    
    @IsOptional()
    @IsNumber({maxDecimalPlaces: 2})
    @IsPositive()
    balance?: number

}
