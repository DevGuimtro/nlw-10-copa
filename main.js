function createGame(player1, hour, player2) {
  return `
      <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
      </li>
      `
}

function createCard(date, day, games, group) {
  return `
    <div class="card">
          <h2>${date} <span>${day}</span></h2>
          <ul>  
          ${games}
          ${group}
          </ul>
        </div>
        `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    "Grupo G",
    createGame("switzerland", "07:00", "camaron") +
      createGame("brazil", "16:00", "serbia") +
      "Grupo H" +
      createGame("uruguai", "10:00", "southcorea") +
      createGame("portugal", "13:00", "gana")
  ) +
  createCard(
    "28/11",
    "segunda",
    "Grupo G",
    createGame("camaron", "07:00", "serbia") +
      createGame("brazil", "10:00", "switzerland") +
      "Grupo H" +
      createGame("southcorea", "10:00", "gana") +
      createGame("portugal", "16:00", "uruguai")
  ) +
  createCard(
    "02/12",
    "sexta",
    "Grupo H",
    createGame("southcorea", "12:00", "portugal") +
      createGame("gana", "12:00", "uruguai") +
      "Grupo G" +
      createGame("serbia", "16:00", "switzerland") +
      createGame("brazil", "16:00", "camaron")
  ) // +
  // createCard(
  //   "Oitavas",
  //   "de Final",
  //   createGame("undefined", "00:00", "undefined") +
  //     createGame("undefined", "00:00", "undefined") +
  //     createGame("undefined", "00:00", "undefined") +
  //     createGame("undefined", "00:00", "undefined")
  // )
