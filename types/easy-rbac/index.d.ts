// Type definitions for easy-rbac 3.1
// Project: https://github.com/DeadAlready/easy-rbac
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface RoleObject {
    name: string;
    when: (params: object) => Promise<boolean>;
}

interface Roles {
    [key: string]: {
        can: Array<string | RoleObject>;
        inherits?: string[] | undefined;
    };
}

type Options = Roles | (() => Promise<Roles>) | Promise<Roles>;

declare class RBAC {
    constructor(opts: Options);
    can(role: string | string[] | Roles[], operation: string, params?: object): Promise<boolean>;
    static create(opts: Options): RBAC;
}

export = RBAC;
