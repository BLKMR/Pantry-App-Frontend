import { DecimalPipe } from "@angular/common";

export class Item{
    constructor(
        public id: number | undefined | null,
        public name: string,
        public image: string,
        public calories: number,
        public weight: number,
        public measurement: string,
        public quantity: number,
        public pantryId: number | undefined | null,
    ){}
}