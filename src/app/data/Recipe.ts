export class Recipe {
    constructor(
        public id: number | undefined | null,
        public name: string,
        public image: string,
        public ingredients: [],
        public steps: [],
        public pantryId: number | undefined | null,
    ){}
}