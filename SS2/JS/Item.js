let id = 0;

export default class Item {
    constructor (id, name, price, producer, discount, dateModified) {
        this.id = id++;
        this.name = name;
        this.price = price;
        this.producer = producer;
        this.discount = discount;
        this.dateModified = dateModified;
    }
}