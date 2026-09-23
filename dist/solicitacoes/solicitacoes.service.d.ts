import { Solicitacao } from './solicitacao.entity';
import { CriarSolicitacaoDto } from './dto/criar-solicitacao.dto';
import { Repository } from 'typeorm';
import { FiltrarSolicitacoesDto } from './dto/filtrar-solicitacoes.dto';
import { DataSource } from 'typeorm';
export declare class SolicitacoesService {
    private readonly repository;
    private readonly dataSource;
    constructor(repository: Repository<Solicitacao>, dataSource: DataSource);
    listar(filtros: FiltrarSolicitacoesDto): Promise<Solicitacao[]>;
    buscarPorId(id: number): Promise<Solicitacao>;
    criar(dto: CriarSolicitacaoDto): Promise<Solicitacao>;
    aprovar(id: number, versaoEsperada: number, atorId: number): Promise<Solicitacao>;
    cancelar(id: number, versaoEsperada: number, justificativa: string, atorId: number): Promise<Solicitacao>;
}
