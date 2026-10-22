import { IsNotEmpty, IsOptional, IsString,IsBoolean } from "class-validator";
export class UpdateTaskDto{
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsBoolean()
    done?: boolean;
}