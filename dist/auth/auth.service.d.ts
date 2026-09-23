import { JwtService } from "@nestjs/jwt";
import { UsuarioAutenticado, UsuariosService } from "../usuarios/usuarios.service";
export declare class AuthService {
    private readonly usuariosService;
    private readonly jwtService;
    constructor(usuariosService: UsuariosService, jwtService: JwtService);
    validarUsuario(email: string, senha: string): Promise<{
        id: number;
        nome: string;
        email: string;
        papel: import("../usuarios/usuarios.service").Papel;
        ativo: boolean;
    } | null>;
    login(usuario: UsuarioAutenticado): {
        accessToken: string;
    };
}
