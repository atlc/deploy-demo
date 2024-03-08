import { SelectQuery, ModifyQuery } from "../queryUtils";
import type { RowDataPacket } from "mysql2";

export interface IUsersRow extends RowDataPacket {
    id:number;
    handle:string;
    email:string;
    created_at:Date;
}

export function getALLUsers() {
    return SelectQuery<IUsersRow>('SELECT * FROM users;')
}

export function getOneUser(id:number) {
    return SelectQuery<IUsersRow>('SELECT * FROM users WHERE id = ?;', [id])
}

export function insertHandle(handle:string) {
    return ModifyQuery('INSERT INTO users (handle) VALUE (?);', [handle])
}

export function insertEmail(email:string) {
    return ModifyQuery('INSERT INTO users (email) VALUE (?);', [email])
}