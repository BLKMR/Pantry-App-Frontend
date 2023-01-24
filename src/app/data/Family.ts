export class Family{
    constructor(
        public id: number | undefined | null,
        public name: string,
        public pantry: string,
        public userAccounts: [],
        public recipes: [],
    ){}
}