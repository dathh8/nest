import { IsEmail, IsEmpty, IsNotEmpty, IsOptional } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty({message: 'name can\'t not emty'})
    name: string;

    @IsEmail({}, {message: 'invalid email'})
    email: string;

    @IsNotEmpty()
    password: string;

    @IsOptional()
    codeId: string;

    @IsOptional()
    codeExpired: string;
}
