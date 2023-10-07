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


