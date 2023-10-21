class Person {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    valueOf() {
        return this.age
    }
}

const p1 = new Person("coder1", 18);
const p2 = new Person("coder2", 31);
const p3 = new Person("coder3", 31);

console.log("🚀 ~ file: 01.对象直接的比较方式.ts:18 ~ p1<p2:", p1 < p2) // true
console.log("🚀 ~ file: 01.对象直接的比较方式.ts:18 ~ p1>p2:", p1 > p2) // false    
console.log("🚀 ~ file: 01.对象直接的比较方式.ts:22 ~ p2==p3:", p2 == p3) // false
console.log("🚀 ~ file: 01.对象直接的比较方式.ts:22 ~ p2===p3:", p2 === p3) // false

export { }