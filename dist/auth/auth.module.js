"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const usuarios_module_1 = require("../usuarios/usuarios.module");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const local_auth_guard_1 = require("./guards/local-auth.guard");
const local_strategy_1 = require("./strategies/local.strategy");
const jwt_1 = require("@nestjs/jwt");
const jwt_auth_guard_1 = require("./guards/jwt-auth.guard");
const jwt_strategy_1 = require("./strategies/jwt.strategy");
const roles_guard_1 = require("./guards/roles.guard");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            usuarios_module_1.UsuariosModule,
            passport_1.PassportModule.register({ defaultStrategy: 'local' }),
            jwt_1.JwtModule.registerAsync({
                useFactory: () => {
                    const secret = process.env.JWT_SECRET;
                    if (!secret) {
                        throw new Error("JWT_SECRET não foi definido");
                    }
                    return {
                        secret,
                        signOptions: {
                            expiresIn: Number(process.env.JWT_EXPIRES_IN_SECONDS ?? 900),
                        },
                    };
                },
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, local_strategy_1.LocalStrategy, local_auth_guard_1.LocalAuthGuard, jwt_auth_guard_1.JwtAuthGuard, jwt_strategy_1.JwtStrategy, roles_guard_1.RolesGuard],
        exports: [passport_1.PassportModule, jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map