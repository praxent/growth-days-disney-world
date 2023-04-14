class Animal {
    name: string;
    img: string;
    sound: string;

    constructor(
        name: string = "",
        img: string = "",
        sound: string = ""
        ) {
            this.name = name
            this.img = img
            this.sound = sound
    }
}

export { Animal };