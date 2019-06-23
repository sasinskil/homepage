const name = 'Łukasz';
const age = 24;

const aboutHeader = document.querySelector('.about__header--js');

console.log(aboutHeader);
console.log(aboutHeader.innerHTML);

aboutHeader.innerHTML = `Kim jest ${name} ?`;

const welcome = (name, age) => {
    if(age <18) {
        console.log('Ups, nie jestem pełnoletni, nie mogę udzielić Ci pewnych informacji ale miło, że tu zaglądasz');   
    } else {
        console.log(`Witaj ! Nazywam się ${name}, mam ${age} lata - miło, że tutaj zaglądasz!`);
    }
}

console.log(welcome('Łukasz',24));