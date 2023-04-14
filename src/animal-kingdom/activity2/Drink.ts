class Drink {
    id: number = -1;
    name: string = "";
    description: string = "";
    type: string = "";
    quantity: number;

    constructor(
        id: number = -1,
        name: string = "",
        description: string = "",
        type: string = "",
        quantity: number = -1
        ) {
            this.id = id
            this.name = name
            this.description = description
            this.type = type
            this.quantity = quantity  
    }
}

export { Drink };