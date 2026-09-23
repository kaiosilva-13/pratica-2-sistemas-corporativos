"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inicial1790081056323 = void 0;
class Inicial1790081056323 {
    name = 'Inicial1790081056323';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "solicitacoes" ("id" SERIAL NOT NULL, "titulo" character varying(150) NOT NULL, "centro_custo" character varying(30) NOT NULL, "prioridade" character varying(10) NOT NULL DEFAULT 'normal', "status" character varying(20) NOT NULL DEFAULT 'pendente', "versao" integer NOT NULL, "criada_em" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "atualizada_em" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_795aaa33114295368cac771de45" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "solicitacoes"`);
    }
}
exports.Inicial1790081056323 = Inicial1790081056323;
//# sourceMappingURL=1790081056323-Inicial.js.map