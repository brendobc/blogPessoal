import { Tema } from './Tema';

export class Postagem {
    public id: number;
    public titulo: string;
    public texto: string;
    public dia: Date;
    public tema: Tema;
}