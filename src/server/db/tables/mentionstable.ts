import { SelectQuery } from "../queryUtils";
import type { RowDataPacket } from "mysql2";

export interface IMentionsRow extends RowDataPacket {
    chirp_id:number;
    user_id:number;
}

export function getALLMentions() {
    return SelectQuery<IMentionsRow>('SELECT * FROM mentions;')
}
