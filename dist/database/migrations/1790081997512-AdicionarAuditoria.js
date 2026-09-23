"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdicionarAuditoria1790081997512 = void 0;
class AdicionarAuditoria1790081997512 {
    name = 'AdicionarAuditoria1790081997512';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "auditorias" ("id" SERIAL NOT NULL, "ator_id" integer NOT NULL, "acao" character varying(50) NOT NULL, "recurso_tipo" character varying(50) NOT NULL, "recurso_id" integer NOT NULL, "detalhes" jsonb, "criada_em" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_b84b3505f313ab1a44e7b684ee2" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "auditorias"`);
    }
}
exports.AdicionarAuditoria1790081997512 = AdicionarAuditoria1790081997512;
//# sourceMappingURL=1790081997512-AdicionarAuditoria.js.map