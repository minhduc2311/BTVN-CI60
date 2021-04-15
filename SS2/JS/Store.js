import Item from './Item.js';

export default class Store {
    constructor () {
        this.items = [];
        this.revenue = 0;
    }

    importItem(item) {
        if(item instanceof Item) {
            this.items.push(item);
            return;
        }

        console.log('you must import an item');
    }

    sell(id) {
        let index = this.items.findIndex(function(item) {
            return item.id == id;
        });

        if (index > -1) {
            let item = this.item[index];
            this.revenue += item.price * (1 - item.discount);
            this.items.splice(index, 1);
        }

    }

    checkRevenue() {
        console.log('total: ' + this.revenue);
    }
}