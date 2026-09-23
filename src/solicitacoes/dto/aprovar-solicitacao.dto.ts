import { IsInt, Min, IsString, MinLength, MaxLength} from "class-validator";

export class AprovarSolicitacaoDto {
  @IsInt()
  @Min(1)
  versao: number;

  @IsString()
  @MinLength(2)
  @MaxLength(30)
  centroCusto: string;
}