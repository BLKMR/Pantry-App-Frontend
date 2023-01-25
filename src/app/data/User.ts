export class User{
    constructor(
        public id: number | undefined | null,
        public name: string,
        public password: string,
        public familyName: string,
        public familyId: number,
    ){}
}