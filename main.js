const name = 'Łukasz';
const age = 24;

console.log(`Witaj ! Nazywam się ${name}, mam ${age} lata - miło, że tutaj zaglądasz!`);

const aboutHeader = document.querySelector('.about__header');

console.log(aboutHeader);
console.log(aboutHeader.innerHTML);

aboutHeader.innerHTML = `Kim jest ${name} ?`;