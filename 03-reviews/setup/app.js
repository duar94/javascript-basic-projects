// Datos de las reseñas
const reviews = [
  {
      id: 1,
      name: "Susan Smith",
      job: "Web Developer",
      img: "https://via.placeholder.com/150",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
  },
  {
      id: 2,
      name: "Anna Johnson",
      job: "Web Designer",
      img: "https://via.placeholder.com/150",
      text: "Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris."
  },
  {
      id: 3,
      name: "Peter Jones",
      job: "Intern",
      img: "https://via.placeholder.com/150",
      text: "Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla."
  },
  {
      id: 4,
      name: "Bill Anderson",
      job: "The Boss",
      img: "https://via.placeholder.com/150",
      text: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
  }
];

// Selección de elementos
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// Elemento actual
let currentItem = 0;

// Cargar el elemento inicial
window.addEventListener('DOMContentLoaded', function () {
  showPerson(currentItem);
});

// Mostrar persona basada en el elemento
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// Mostrar siguiente persona
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
      currentItem = 0;
  }
  showPerson(currentItem);
});

// Mostrar persona anterior
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
      currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

// Mostrar persona aleatoria
randomBtn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});