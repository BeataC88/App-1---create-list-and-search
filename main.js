const form = document.querySelector('form');
const inputToEnter = document.querySelector('.add input');
const inputToSearch = document.querySelector('input.search');
const btnRemove = document.querySelector('.remove');
const teamNumber = document.querySelector('span');
const ul = document.querySelector('ul');
const liList = document.getElementsByClassName('team');
const teamArr = [];

const removeAllTeams = () => {
    teamArr.length = 0;
    ul.textContent = "";
    teamNumber.textContent = liList.length;
}

const removeOneTeam = (e) => {
    const index = e.target.parentNode.dataset.key;
    teamArr.splice(index, 1);
    // console.log(teamArr);
    // console.log(index);
    refreshList();
    teamNumber.textContent = liList.length;
}

const addTeam = (e) => {
    e.preventDefault();
    const teamName = inputToEnter.value.toUpperCase();
    if (teamName === "") return;
    const team = document.createElement('li');
    team.className = "team";
    team.innerHTML = teamName + `<button class="deleteTeam">X</button>`;
    teamArr.push(team);
    // console.log(teamArr);
    refreshList();
    ul.appendChild(team);
    inputToEnter.value = "";
    teamNumber.textContent = liList.length;
    team.querySelector('.deleteTeam').addEventListener('click', removeOneTeam);
}

const refreshList = () => {
    ul.textContent = "";
    teamArr.forEach((element, key) => {
        element.dataset.key = key;
        ul.appendChild(element);
    })
}

const searchTeam = (e) => {
    const searchText = e.target.value.toUpperCase();
    // console.log(searchText);
    let teams = teamArr.filter(li => li.textContent.includes(searchText));
    // console.log(teams);
    ul.textContent = "";
    teams.forEach(li => ul.appendChild(li));
    teamNumber.textContent = teams.length;
}


btnRemove.addEventListener('click', removeAllTeams);
form.addEventListener('submit', addTeam);
inputToSearch.addEventListener('input', searchTeam);