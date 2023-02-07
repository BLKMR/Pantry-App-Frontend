export class User{
    constructor(
        public id: number | undefined | null,
        public name: string,
        public password: string,
        public familyName: string | undefined | null,
        public familyId: number | null | undefined,
    ){}
}