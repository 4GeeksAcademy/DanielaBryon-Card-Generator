/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// app.js
window.onload = function() {
  const suits = ["♦", "♥", "♠", "♣"];
  const numbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let intervalId;
  let isGenerating = false;

  function generateCard() {
    const suitIndex = Math.floor(Math.random() * suits.length);
    const numberIndex = Math.floor(Math.random() * numbers.length);

    const suit = suits[suitIndex];
    const number = numbers[numberIndex];

    const cardDiv = document.getElementById("card");

    cardDiv.className = "card";

    switch (suit) {
      case "♦":
        cardDiv.classList.add("diamond");
        break;
      case "♥":
        cardDiv.classList.add("heart");
        break;
      case "♠":
        cardDiv.classList.add("spade");
        break;
      case "♣":
        cardDiv.classList.add("club");
        break;
    }

    cardDiv.innerHTML = `  
  <div class="top-suit">${suit}</div>  
  <div class="number">${number}</div>  
  <div class="bottom-suit">${suit}</div>  
`;
  }

  document
    .getElementById("generate-button")
    .addEventListener("click", generateCard);

  window.generateAleatoryCard = function() {
    const button = document.getElementById("aleatory-mode");
    if (isGenerating) {
      clearInterval(intervalId);
      button.textContent = "Start Generator";
      isGenerating = false;
    } else {
      generateCard();
      intervalId = setInterval(generateCard, 10000);
      button.textContent = "Stop Generator";
      isGenerating = true;
    }
  };

  window.updateSize = function() {
    const width = document.getElementById("width").value;
    const height = document.getElementById("height").value;
    const cardDiv = document.getElementById("card");

    if (width) {
      cardDiv.style.width = `${width}px`;
    }
    if (height) {
      cardDiv.style.height = `${height}px`;
    }
  };
};
