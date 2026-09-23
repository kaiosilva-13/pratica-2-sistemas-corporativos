import { Papel } from "../../usuarios/usuarios.service";
export declare const ROLES_KEY = "roles";
export declare const Roles: (...roles: Papel[]) => import("@nestjs/common", { with: { "resolution-mode": "import" } }).CustomDecorator<string>;
