
document.addEventListener("DOMContentLoaded", () => {});
const teamStats = {
  team: "Nepal National Football Team",
  sport: "Football",
  year: 2025,
  headCoach: "Abdullah Almutairi",
};

document.getElementById("team").textContent = teamStats.team;
document.getElementById("sport").textContent = teamStats.sport;
document.getElementById("year").textContent = teamStats.year;
document.getElementById("head-coach").textContent = teamStats.headCoach;

const playerCards = document.querySelectorAll(".player-card");
const playerFilter = document.getElementById("players");

playerFilter.addEventListener("change", () => {});

const filterValue = playerFilter.value;
playerCards.forEach((card) => {});
