import type { PrioridadeSolicitacao, StatusSolicitacao } from '../solicitacao.entity';
export declare class FiltrarSolicitacoesDto {
    status?: StatusSolicitacao;
    centroCusto?: string;
    prioridade?: PrioridadeSolicitacao;
}
