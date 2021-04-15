import Item from './Item.js';

export default class Houseware extends Item {
    constructor (name, price, producer, date, durability) {
        super (name, price, producer, dateModified, durability);
        this.durability = durability;
        
    }
    
}