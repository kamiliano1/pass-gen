const characters = [
    ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], 
    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
];

let slider = document.getElementById("slider")
let passwordLenght = document.getElementById("pass-length")
let firstPassword = document.getElementById("first-password-el")
let secondPassword = document.getElementById("second-password-el")

function passwordGenerate() {
    let signsChecks = [
        document.getElementById("big-letter").checked,
        document.getElementById("small-letter").checked,
        document.getElementById("digits").checked,
        document.getElementById("special-characters").checked
    ]
    let firstGenerated = ""
    let secondGenerated = ""
    let randomNumbers = [0,0]
    if (signsChecks[0] === false  && signsChecks[1] === false && signsChecks[2] === false && signsChecks[3] === false){
    }else{
        while (firstGenerated.length !=slider.value){
            let randomSignCheck = Math.floor(Math.random()*4)
            if (signsChecks[randomSignCheck]){
                randomNumbers[0] = Math.floor(Math.random() * characters[randomSignCheck].length)
                randomNumbers[1] = Math.floor(Math.random() * characters[randomSignCheck].length)
                firstGenerated += characters[[randomSignCheck]][randomNumbers[0]]
                secondGenerated += characters[[randomSignCheck]][randomNumbers[1]]
                }
            }
        }
    firstPassword.textContent = firstGenerated
    secondPassword.textContent = secondGenerated
    }

function update(){
    passwordLenght.textContent = "Password length: " + slider.value
}
