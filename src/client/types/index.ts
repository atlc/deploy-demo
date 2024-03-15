export interface Chirp {
    id: number;
    user_id: number; 
    body: string; 
    location: string;
    createdAt: string; 
}

export interface User {
    id: number;
    handle: string;
    email: string;
}
  
export interface ChirpJOIN extends Chirp {
    handle:string;
}