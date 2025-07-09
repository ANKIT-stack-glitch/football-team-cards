const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");
const myFavoriteFootballTeam = {
  team: "Argentina",
  sport: "Football",
  year: 1986,
  isWorldCupWinner: true,
  headCoach: {
    coachName: "Carlos Bilardo",
    matches: 7,
  },
  players: [
    {
      name: "Sagar Thapa",
      position: "forward",
      number: 1,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Rohit Chand",
      position: "midfielder",
      number: 2,
      isCaptain: false,
      nickname: null,
    },
     {
      name: "Bimal Gharti Magar",
      position: "midfielder",
      number: 3,
      isCaptain: false,
      nickname: " Bimu",
    },
    {
      name: "Sunil Bal",
      position: "midfielder",
      number: 4,
      isCaptain: false,
      nickname: "Sunny",
    },
    {
      name: "Ananta Tamang",
      position: "defender",
      number: 5,
      isCaptain: false,
      nickname: "Tata",
    },
    {
      name: "Kiran Chemjong",
      position: "goalkeeper",
      number: 6,
      isCaptain: true,
      nickname: "The Wall",
    },
    {
      name: "Sujal Shrestha",
      position: "forward",
      number: 7,
      isCaptain: false,
      nickname: "Suju",
    },
    {
      name: "Devendra Tamang",
      position: "defender",
      number: 8,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Suraj Thapa",
      position: "defender",
      number: 9,
      isCaptain: false,
      nickname: "Kaji",
    },
    {
      name: "Anjan Bista",
      position: "midfielder",
      number: 10,
      isCaptain: true,
      nickname: "AJ",
    },
    {
      name: "Ayush Ghalan",
      position: "forward",
      number: 11,
      isCaptain: false,
      nickname: "Ghalan",
    },
    {
      name: "Abhishek Rijal",
      position: "midfielder",
      number: 12,
      isCaptain: false,
      nickname: "Messi",
    },
    {
      name: "Manish Dangi",
      position: "midfielder",
      number: 13,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Tej Tamang",
      position: "midfielder",
      number: 14,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Alan Neupane",
      position: "goalkeeper",
      number: 15,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Suman Aryal",
      position: "defender",
      number: 16,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Prashant Awasthi",
      position: "forward",
      number: 17,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Bikash Khawas",
      position: "goalkeeper",
      number: 18,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Santosh Tamang",
      position: "defender",
      number: 19,
      isCaptain: false,
      nickname: "Santy",
    },
    {
      name: "Krishna Karki",
      position: "midfielder",
      number: 20,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Umesh Thapa",
      position: "midfielder",
      number: 21,
      isCaptain: false,
      nickname: "Umi",
    },
    {
      name: "Ritesh Thapa",
      position: "goalkeeper",
      number: 22,
      isCaptain: false,
      nickname: null,
    },
  ],
};

Object.freeze(myFavoriteFootballTeam);
const { sport, team, year, players } = myFavoriteFootballTeam;
const { coachName } = myFavoriteFootballTeam.headCoach;

typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

const setPlayerCards = (arr = players) => {
  playerCards.innerHTML += arr
    .map(
      ({ name, position, number, isCaptain, nickname }) => {
        return `
        <div class="player-card">
          <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
          <p>Position: ${position}</p>
          <p>Number: ${number}</p>
          <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
        </div>
      ` }
    )
    .join("");
};

playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = "";

  switch (e.target.value) {
    case "nickname":
      setPlayerCards(players.filter((player) => player.nickname !== null));
      break;
    case "forward":
      setPlayerCards(players.filter((player) => player.position === "forward"));
      break;
    case "midfielder":
      setPlayerCards(
        players.filter((player) => player.position === "midfielder")
      );
      break;
    case "defender":
      setPlayerCards(
        players.filter((player) => player.position === "defender")
      );
      break;
    case "goalkeeper":
      setPlayerCards(
        players.filter((player) => player.position === "goalkeeper")
      );
      break;

default:
setPlayerCards();

  }
});
