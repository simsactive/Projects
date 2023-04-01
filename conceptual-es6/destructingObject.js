const person1 = {
    name: "Hero Alom",
    age: 34,
    phone: "039945924",
    address: "bari nai",
    p: [1, 2, 3, 4]
}

// const {address:bari, name,...remaining} = person;

// // console.log(bari);
// console.log(bari, name,remaining);



const person2 = {...person1};
// const person2 = person1;
person2.isMale = true;

console.log(person2);


