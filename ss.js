function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    return { years, months, days };
}

const birthDate = '1990-01-01';
const age = calculateAge(birthDate);
console.log(age); // { years: 31, months: 7, days: 16 }
const arr = [1, 2, 3, 4, 5, 6];
const [a, b, ...rest] = arr;
console.log(a, b, rest); // 1 2 [ 3, 4, 5, 6 ]
const obj = { name: 'John', age: 31, city: 'New York' };
const names = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
    { id: 5, name: 'Eve' }
];
const people = [
    { id: 1, name: 'Alice', age: 25, birthday: '1996-05-12' },
    { id: 2, name: 'Bob', age: 32, birthday: '1989-02-28' },
    { id: 3, name: 'Charlie', age: 18, birthday: '2003-11-05' },
    { id: 4, name: 'David', age: 47, birthday: '1974-08-22' },
    { id: 5, name: 'Eve', age: 29, birthday: '1992-01-01' }
];  

