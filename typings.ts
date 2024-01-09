import { type } from "os";

export type Filetype = {
    id: string;
    filename: string;
    fullName: string;
    timestamp: Date;
    downloadURL: string;
    type: string;
    size: number;
};