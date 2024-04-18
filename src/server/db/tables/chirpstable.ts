import { SelectQuery, ModifyQuery } from "../queryUtils";
import type { RowDataPacket } from "mysql2";

export interface IChirpsRow extends RowDataPacket {
    id: number;
    user_id: number;
    body: string;
    location: string;
    created_at: Date;
}

export function getALLChirps() {
    return SelectQuery<IChirpsRow>("SELECT Users.handle, Chirps.* FROM Chirps JOIN Users ON Chirps.user_id = Users.id;");
}

export function getOneChirp(id: number) {
    return SelectQuery<IChirpsRow>("SELECT Users.handle, Chirps.* FROM Chirps JOIN Users ON Chirps.user_id = Users.id WHERE Chirps.id = ?;", [id]);
}

export function insertChirp(user_id: number, body: string, location: string) {
    return ModifyQuery("INSERT INTO Chirps (user_id, body, location) VALUE (?, ?, ?);", [user_id, body, location]);
}

export function updateChirp(user_id: number, body: string, location: string, id: number) {
    return ModifyQuery("UPDATE Chirps SET user_id = ?, body = ?, location = ? WHERE id = ?;", [user_id, body, location, id]);
}

export function deleteChirp(id: number) {
    return ModifyQuery("DELETE FROM Chirps WHERE id = ?;", [id]);
}

export function getMentions(user_id: number) {
    return SelectQuery<IChirpsRow>(
        "SELECT c.*, u.handle FROM Chirps c JOIN Users u ON c.user_id = u.id JOIN Mentions m ON m.chirp_id = c.id  WHERE m.user_id = ?",
        [user_id]
    );
}
