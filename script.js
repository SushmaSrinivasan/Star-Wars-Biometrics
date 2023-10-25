
const btnJson = document.getElementById('btnJson');
const outputContainer=document.getElementById('output-text');

function getApi(){
    const fullNameInput = document.getElementById("fullName").value;
    const url= `https://www.swapi.tech/api/people/?name=${fullNameInput}`;
    fetch(url)
    .then((res) => res.json())
    .then(data=>{
        console.log(data.result);
        
        if(data.result && data.result.length >0){
            const character=data.result[0];
            const {height,mass,hair_color,gender}=character.properties;
            outputContainer.textContent = `Name: ${fullNameInput}\n Height: ${height}\n Mass: ${mass}, HairColor: ${hair_color}`;
        }else{
            outputContainer.textContent = "character not found";
        }
        
        })
        .catch(err => console.log('Error:' + err));
}

btnJson.addEventListener("click", getApi);