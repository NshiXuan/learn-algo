import { BSTree } from "./01_二叉搜索树BSTree";

class Product {
    // name: string;
    // price: number;
    // constructor(name: string, price: number) {
    //     this.name = name
    //     this.price = price
    // }

    // TS的语法糖 与上面效果一致
    constructor(public name: string, public price: number) { }

    valueOf() { return this.price; }
}

const p1 = new Product("iPhone", 100);
const p2 = new Product("hawei", 120);
const p3 = new Product("xiaomi", 80);
const p4 = new Product("oppo", 90);
const p5 = new Product("vivo", 70);

const bst = new BSTree<Product>()
bst.inserts(p1, p2, p3, p4, p5)
bst.print()