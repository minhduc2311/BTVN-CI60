import Item from "./Item.js";

export default class Food extends Item {
    constructor (name, price, producer, dataModified, taste) {
        super (name, price, producer, 0.02, dataModified);
        this.taste = taste;
    }
}