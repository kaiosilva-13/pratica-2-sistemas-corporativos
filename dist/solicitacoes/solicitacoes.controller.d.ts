import { SolicitacoesService } from './solicitacoes.service';
import { CriarSolicitacaoDto } from './dto/criar-solicitacao.dto';
import { FiltrarSolicitacoesDto } from './dto/filtrar-solicitacoes.dto';
import { AprovarSolicitacaoDto } from './dto/aprovar-solicitacao.dto';
import { CancelarSolicitacaoDto } from './dto/cancelar-solicitacao.dto';
type RequisicaoAutenticada = {
    user: {
        id: number;
        papel: string;
    };
};
export declare class SolicitacoesController {
    private readonly solicitacoesService;
    constructor(solicitacoesService: SolicitacoesService);
    criar(dto: CriarSolicitacaoDto): Promise<import("./solicitacao.entity").Solicitacao>;
    listar(filtros: FiltrarSolicitacoesDto): Promise<import("./solicitacao.entity").Solicitacao[]>;
    buscarPorId(id: number): Promise<import("./solicitacao.entity").Solicitacao>;
    aprovar(id: number, dto: AprovarSolicitacaoDto, request: RequisicaoAutenticada): Promise<import("./solicitacao.entity").Solicitacao>;
    cancelar(id: number, dto: CancelarSolicitacaoDto, request: RequisicaoAutenticada): Promise<import("./solicitacao.entity").Solicitacao>;
}
export {};
