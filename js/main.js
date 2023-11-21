'use strict';
/*


Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: 
- nome, 
- ruolo
- foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto



BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro!
Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg
*/

const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    photo: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    role: 'Chief Editor',
    photo: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    photo: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    photo: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    photo: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    photo: 'barbara-ramos-graphic-designer.jpg',
  },
];

//milestone 1

const arrayLength = team.length;

for (let i = 0; i < arrayLength; i++) {
  const person = team[i];

  console.log(`Team Member ${i + 1}`);

  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }

  if (!(i === arrayLength - 1)) {
    console.log(`---`);
  }
}

//milestone 2
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

/*
<li class="member">
  <div>image</div>
  <h3>Nome</h3>
  <p>role</p>
</li>
*/

const teamElement = document.querySelector('.team');

// //template literal

// for (let i = 0; i < team.length; i++) {
//   const person = team[i];

//   // const li = `<li class="member">
//   //     <div>Immagine del membro: ${person.photo}</div>
//   //     <h3>Nome del membro: ${person.name}</h3>
//   //     <p>Ruolo del membro: ${person.role}</p>
//   //   </li>`;

//   let stringElement = '<li class="member">';
//   stringElement += `<div>Immagine del membro: ${person.photo}</div>`;

//   if (person.name !== undefined) {
//     stringElement += `<h3>Nome del membro: ${person.name}</h3>`;
//   }

//   stringElement += `<p>Ruolo del membro: ${person.role}</p>`;
//   stringElement += `</li>`;

//   teamElement.innerHTML += stringElement;
// }

// //createElement

// for (let i = 0; i < team.length; i++) {
//   const person = team[i];

//   //li
//   const liElement = document.createElement('li');
//   liElement.classList.add('member');

//   const divImageElement = document.createElement('div');
//   divImageElement.append(person.photo);

//   const h3NameElement = document.createElement('h3');

//   if (person.name !== undefined) {
//     h3NameElement.textContent = person.name;
//   } else {
//     h3NameElement.textContent = 'Nome non trovato';
//   }

//   const pRoleElement = document.createElement('p');
//   pRoleElement.innerText = person.role;

//   liElement.append(divImageElement);
//   liElement.append(h3NameElement);
//   liElement.append(pRoleElement);

//   teamElement.append(liElement);
// }

/*
clone element
*/

const templateTeam = document.getElementById('team-template');

for (let i = 0; i < team.length; i++) {
  const person = team[i];

  const liElement = templateTeam.content.cloneNode(true);

  liElement.querySelector('.member .photo img').src = `img/${person.photo}`;
  liElement.querySelector('.member .photo img').alt = person.name;

  if (person.name !== undefined) {
    liElement.querySelector('.member .name').innerText = person.name;
  }

  liElement.querySelector('.member .role').innerText = person.role;

  teamElement.append(liElement);
}
