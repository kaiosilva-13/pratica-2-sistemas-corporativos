"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
let UsuariosService = class UsuariosService {
    usuarios = [
        {
            id: 1,
            nome: 'Ana Lima',
            email: 'ana@empresa.com',
            senhaHash: '$2b$12$DJnB5VtBCX4.W24cPqlQDuCvFTjcjaau6NMur0QBEj.oWzecCiz0m',
            papel: 'gestor',
            ativo: true,
        },
        {
            id: 2,
            nome: 'Bruno Silva',
            email: 'bruno@empresa.com',
            senhaHash: '$2b$12$DJnB5VtBCX4.W24cPqlQDuCvFTjcjaau6NMur0QBEj.oWzecCiz0m',
            papel: 'solicitante',
            ativo: true,
        },
    ];
    buscarPorEmail(email) {
        return this.usuarios.find(usuario => usuario.email === email);
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)()
], UsuariosService);
//# sourceMappingURL=usuarios.service.js.map