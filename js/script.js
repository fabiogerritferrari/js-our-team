// Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata  in cui mostrare una card per ciascun componente.

// (trovate l’array del team all’interno della cartella in allegato)

// Bonus

// Rendere l’esercizio responsive, mandando a capo le card
// Aggiungere un form di aggiunta membri che permetta di visualizzare il nuovo membro sulla pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team! 😀)
const cardRow=document.getElementById("cardRow")

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


GenerateNewCard = (obj) => {
  
  const {name, role, email, img} = obj;
  const card= document.createElement("div");
  card.innerHTML = `<div class="card mb-3 bg-black text-white">
  <div class="row g-0">
  <div class="col-md-3">
  <img src="${img}" class="img-fluid  rounded-start" alt="immagine di ${name}">
  </div>
  <div class="col-md-8">
  <div class="card-body">
  <h5 class="card-title">${name}</h5>
  <p class="card-text">Role: ${role}</br>
  <a href="">Email: ${email}</a>
  </p>
  </div>
  </div>
  </div>
  </div>`;
  card.classList=("col-6")
  return card;
};

function renderCard (array) {
  for (let index = 0; index < array.length; index++) {
    
    const newCard=GenerateNewCard(array[index]);
    cardRow.append(newCard);
  }
}

renderCard(teamMembers);

const form=document.querySelector("form");
const inputFirstName=document.getElementById("firstName");
const inputLastName=document.getElementById("lastName");
const inputEmail=document.getElementById("email");
const inputRole=document.getElementById("role");
const inputImg=document.getElementById("inputImg");



form.addEventListener("submit", (event) =>{
  event.preventDefault();
  
  const newMember={
    name:`${inputFirstName.value} ${inputLastName.value}`,
    role:inputRole.value,
    email:inputEmail.value,
    img:inputImg.value,
  };

  const newCardMember= GenerateNewCard(newMember);

  cardRow.append(newCardMember);

})

