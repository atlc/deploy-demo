import { SelectQuery, ModifyQuery } from "../queryUtils";
import type { RowDataPacket } from "mysql2";

export interface IUsersRow extends RowDataPacket {
    id: number;
    handle: string;
    email: string;
    created_at: Date;
}

export function getALLUsers() {
    return SelectQuery<IUsersRow>("SELECT * FROM Users;");
}

export function getOneUser(id: number) {
    return SelectQuery<IUsersRow>("SELECT * FROM Users WHERE id = ?;", [id]);
}
