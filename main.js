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
    "20/11",
    "Domingo",
    "Grupo A",
    createGame("qatar", "13:00", "equador")
  ) +
  createCard(
    "21/11",
    "Segunda-feira",
    "Grupo A",
    createGame("senegal", "13:00", "netherlands") +
      "Grupo B" +
      createGame("england", "10:00", "iran") +
      createGame("usa", "16:00", "gales")
  ) +
  createCard(
    "22/11",
    "Terça-feira",
    "Grupo C",
    createGame("argentina", "07:00", "soudiarabia") +
      createGame("mexico", "13:00", "poland") +
      "Grupo D" +
      createGame("denmark", "10:00", "tunisia") +
      createGame("france", "16:00", "australia")
  ) +
  createCard(
    "23/11",
    "Quarta-feira",
    "Grupo E",
    createGame("germany", "10:00", "japan") +
      createGame("spain", "13:00", "costarica") +
      "Grupo F" +
      createGame("marocco", "07:00", "croatia") +
      createGame("belgium", "16:00", "canada")
  ) +
  createCard(
    "24/11",
    "Quinta-feira",
    "Grupo G",
    createGame("switzerland", "07:00", "camaron") +
      createGame("portugal", "13:00", "gana") +
      "Grupo H" +
      createGame("uruguai", "10:00", "southcorea") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "25/11",
    "Sexta-feira",
    "Grupo A",
    createGame("qatar", "10:00", "senegal") +
      createGame("netherlands", "13:00", "equador") +
      "Grupo B" +
      createGame("gales", "07:00", "iran") +
      createGame("usa", "16:00", "england")
  ) +
  createCard(
    "26/11",
    "Sábado",
    "Grupo C",
    createGame("poland", "10:00", "soudiarabia") +
      createGame("argentina", "16:00", "mexico") +
      "Grupo D" +
      createGame("tunisia", "07:00", "australia") +
      createGame("france", "16:00", "denmark")
  ) +
  createCard(
    "27/11",
    "Domingo",
    "Grupo E",
    createGame("japan", "07:00", "costarica") +
      createGame("spain", "16:00", "germany") +
      "Grupo F" +
      createGame("belgium", "10:00", "marocco") +
      createGame("croatia", "13:00", "canada")
  ) +
  createCard(
    "28/11",
    "Segunda-feira",
    "Grupo G",
    createGame("camaron", "07:00", "serbia") +
      createGame("brazil", "13:00", "switzerland") +
      "Grupo H" +
      createGame("southcorea", "10:00", "gana") +
      createGame("portugal", "16:00", "uruguai")
  ) +
  createCard(
    "29/11",
    "Terça-feira",
    "Grupo A",
    createGame("equador", "12:00", "senegal") +
      createGame("netherlands", "12:00", "qatar") +
      "Grupo B" +
      createGame("iran", "16:00", "usa") +
      createGame("gales", "16:00", "england")
  ) +
  createCard(
    "30/11",
    "Quarta-feira",
    "Grupo D",
    createGame("tunisia", "12:00", "france") +
      createGame("australia", "12:00", "denmark") +
      "Grupo C" +
      createGame("poland", "16:00", "argentina") +
      createGame("mexico", "16:00", "soudiarabia")
  ) +
  createCard(
    "01/12",
    "Quinta-feira",
    "Grupo F",
    createGame("croatia", "12:00", "belgium") +
      createGame("canada", "12:00", "marocco") +
      "Grupo E" +
      createGame("japan", "16:00", "spain") +
      createGame("costarica", "16:00", "germany")
  ) +
  createCard(
    "02/12",
    "Sexta-feira",
    "Grupo H",
    createGame("southcorea", "12:00", "portugal") +
      createGame("gana", "12:00", "uruguai") +
      "Grupo G" +
      createGame("serbia", "16:00", "switzerland") +
      createGame("brazil", "16:00", "camaron")
  )
