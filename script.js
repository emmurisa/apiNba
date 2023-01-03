const URL = "https://www.balldontlie.io/api/v1/teams";

const URLTwo = "https://www.balldontlie.io/api/v1/players";


fetch(URL)
    .then((promise) => promise.json())
    .then(function (result) {
        handleResult(result);
    });


fetch(URLTwo)
    .then((promise) => promise.json())
    .then(function (result) {
        handleResultTwo(result);
    });


function handleResult(data) {

    
    let teamsContainer = document.getElementById("tres");

    data.data.forEach(element => {        
        let newButton = document.createElement("button");
        newButton.className = "teamButton";
        newButton.innerText = element.name;
        teamsContainer.appendChild(newButton);      
    })    
}

function handleResultTwo(data) {
    let playersContainer = document.getElementById("cuatro");

    document.querySelectorAll(".teamButton").forEach(e => {
        e.addEventListener("click", elem => {
            console.log(elem.path[0].innerText)

            
    
            data.data.forEach(element => {  
                if (element.team.name === elem.path[0].innerText) {
                    let newPlayer = document.createElement("p");
                    newPlayer.className = "player";
                    newPlayer.innerText = `${element.first_name} ${element.last_name}`;
                    playersContainer.appendChild(newPlayer);

                    // setTimeout(function () { playersContainer.removeChild(newPlayer); }, 1000);
                }
                
                
                      
                
        
                // console.log(element.team.name);
                // console.log(`${element.first_name} ${element.last_name}`);
                //console.log(parentNode.className);   
            
            
            })    
        })
    })          
}


