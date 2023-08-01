// Object of students
const firstYears = [
  {
    id: 1,
    name: "",
    houseName: "Gryffindor",
    houseEmblem: "assets/gryffindor.jpeg",
  },
  {
    id: 2,
    name: "",
    houseName: "Ravenclaw",
    houseEmblem: "assets/Ravenclaw.jpeg",
  },
  {
    id: 3,
    name: "",
    houseName: "Gryffindor",
    houseEmblem: "assets/gryffindor.jpeg",
  },
  {
    id: 4,
    name: "",
    houseName: "Gryffindor",
    houseEmblem: "assets/gryffindor.jpeg",
  },
  {
    id: 5,
    name: "",
    houseName: "Slytherin",
    houseEmblem: "assets/Slytherin.jpeg",
  },
  {
    id: 6,
    name: "",
    houseName: "Ravenclaw",
    houseEmblem: "assets/Ravenclaw.jpeg",
  },
  {
    id: 7,
    name: "",
    houseName: "Gryffindor",
    houseEmblem: "assets/gryffindor.jpeg",
  },
  {
    id: 8,
    name: "",
    houseName: "Ravenclaw",
    houseEmblem: "assets/Ravenclaw.jpeg",
  },
  {
    id: 9,
    name: "",
    houseName: "Hufflepuff",
    houseEmblem: "assets/Hufflepuff.jpeg",
  },
  {
    id: 10,
    name: "",
    houseName: "Gryffindor",
    houseEmblem: "assets/gryffindor.jpeg",
  },
];



const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

const cardsOnDom = (array) => {
  let domString = "";
  for (const member of array) {
    domString += `<div class="card">
    <div class="card-header">${firstYears.houseName}</div>
    <div class="card-body">
      <h5 class="card-title">${firstYears.name}</h5>
    </div>`;
  }
  renderToDom("#app", domString);
};



const filter = (array, emblem) => {
  const emblemArray = [];

  array.forEach((item) => {
    if (item.houseName === emblem) {
      emblemArray.push(item);
    }
  });

  return colorArray;
}
