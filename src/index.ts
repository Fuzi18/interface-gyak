

interface Result{
    winner: string;
    date: Date;
    result: string;

    kiir() : void;
    toString(): string;
}

class Football implements Result{
    winner: string;
    #date: Date;
    result: string;

    constructor(winner:string, date: Date, result: string){
        this.winner=winner;
        this.#date= date;
        this.result = result;
    }

    get date(){
        return this.#date
    }
    set date(date: Date){
        this.#date= date;
    }
    kiir(): void {
        throw new Error("Method not implemented.");
    }
    toString(): string {
        throw new Error("Method not implemented.");
    }
}

class Marathon implements Result{
    winner: string;
    #date: Date;
    result: string;

    constructor(winner:string, date: Date, result: string){
        this.winner=winner;
        this.#date= date;
        this.result = result;
    }
    get date(){
        return this.#date
    }
    set date(date: Date){
        this.#date= date;
    }
    kiir(): void {
        throw new Error("Method not implemented.");
    }
    toString(): string {
        throw new Error("Method not implemented.");
    }
}

class Calvinball implements Result{
    winner: string;
    #date: Date;
    result: string;

    constructor(winner:string, date: Date, result: string){
        this.winner=winner;
        this.#date= date;
        this.result = result;
    }
    get date(){
        return this.#date
    }
    set date(date: Date){
        this.#date= date;
    }
    kiir(): void {
        throw new Error("Method not implemented.");
    }
    toString(): string {
        throw new Error("Method not implemented.");
    }
}