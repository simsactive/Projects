const Person = {
    name: 'abul',
    age: 23,
    contact: {
        phone: '09432723',
        email: "abul@gmail.com"
    },
    education: {
        schoolName: "andorkilla high school",
        subjects: [
            { name: 'bangla', mark: 45 },
            { name: 'english', mark: 64 },
            { name: 'math', mark: 74 }
        ]
    }
}

// const age = Person.age;
// const age = Person['age'];



// const property = 'age';
// const age = Person['property'];


console.log(Person.education.subjects[1].mark);
// console.log(age);
