import Item from './Item.js';

export default class Cloth extends Item {
    constructor (name, price, producer, dateModified, original, material) {
        super (name, price, producer, 0.05, dateModified);
        this.original = original;
        this.material = material;
    }
}