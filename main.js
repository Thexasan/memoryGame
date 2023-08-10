const box = document.querySelector(".box");
const span = document.querySelector(".span");

const getData = () => [
  {
    imgScr: "./img/images.png",
    name: "wtf",
  },
  {
    imgScr: "./img/images.jpeg",
    name: "amongUs",
  },
  {
    imgScr: "./img/money.png",
    name: "money",
  },
  {
    imgScr: "./img/buf.jpeg",
    name: "buf",
  },
  {
    imgScr: "./img/download.png",
    name: "pizza",
  },
  {
    imgScr: "./img/downloadd.png",
    name: "blueUs",
  },
  {
    imgScr: "./img/downloada.png",
    name: "star",
  },
  {
    imgScr: "./img/download1.png",
    name: "watermelon",
  },
  {
    imgScr: "./img/images.png",
    name: "wtf",
  },
  {
    imgScr: "./img/images.jpeg",
    name: "amongUs",
  },
  {
    imgScr: "./img/money.png",
    name: "money",
  },
  {
    imgScr: "./img/buf.jpeg",
    name: "buf",
  },
  {
    imgScr: "./img/download.png",
    name: "pizza",
  },
  {
    imgScr: "./img/downloadd.png",
    name: "blueUs",
  },
  {
    imgScr: "./img/downloada.png",
    name: "star",
  },
  {
    imgScr: "./img/download1.png",
    name: "watermelon",
  },
];

const random = () => {
  return getData().sort(() => Math.random() - 0.5); 
};

const cardGenerator = () => {
  const cardData = random();

  cardData.forEach((elem) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("name", elem.name);
    const img = document.createElement("img");
    img.src = elem.imgScr;
    img.classList.add("img");
    const back = document.createElement("div");
    back.classList.add("back");

    card.onclick = (e) => {
      card.classList.toggle("toggle");
      checkCards(e);
    };

    card.append(img, back);

    box.appendChild(card);
  });
};
cardGenerator();

function checkCards(e) {
  const target = e.target;
  target.classList.add("flip");
  const flip = document.querySelectorAll(".flip");
  if (flip.length == 2) {
    if (flip[0].getAttribute("name") == flip[1].getAttribute("name")) {
      console.log("match");
      console.log(flip);
      flip.forEach((elem) => {
        setTimeout(() => {
          elem.classList.remove("flip");
          elem.style.pointerEvents = "none";
          elem.style.transform = "rotateY(180deg)"; //aliw kadm diga delete namewa
        }, 1000);
      });
    }
    console.log("not");
    flip.forEach((elem) => {
      elem.classList.remove("flip");
      setTimeout(() => {
        elem.classList.remove("toggle");
      }, 1000);
    });
  }
}

function time() {
  let d = new Date();
  let s = d.getSeconds();
  let m = d.getMinutes();
  let h = d.getHours();
  span.textContent = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}

setInterval(time, 1000);