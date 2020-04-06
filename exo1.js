let word = prompt("Entrez un mot");
const inhabitantsCityName = {Paris: "Parisiens", Blois: "Blésois", Marseille: "Marseillais", Lille: "Lillois"}
const numberInhabitants = [["Lille", 232741],["Paris", 2148000],["Blois", 45710], ["Marseille", 861635]]

console.log(firstLetterNoRepeat(word))

function firstLetterNoRepeat(word) {
    for(let i = 0; i < word.length;i++){
        let lettre = word[i]
        if(word.indexOf(lettre) === i && word.indexOf(lettre, i + 1) === -1){
            return word[i]
        }else{
            return null
        }
    }
}

let orderCities = (cityName,numberInhabitants) => {
    let finalTab = []
    numberInhabitants.sort().reverse()
    for (let i = 0; i < numberInhabitants.length; i++) {
        finalTab.push(cityName[numberInhabitants[i][0]])
    }
    return finalTab
}
console.log(orderCities(inhabitantsCityName,numberInhabitants))
game()

function game() {
    let number = getRandomIntInclusive(0,100)
    let maxCoup = 10
    let player_choice = ""
    while(player_choice !== "non"){
        let playerNumber = prompt("Proposez un chiffre !!")
        if(playerNumber > number){
            maxCoup--
            alert(`C'est moins il te reste ${maxCoup}`)
        }else if(playerNumber < number){
            maxCoup--
            alert(`c'est plus il te reste ${maxCoup}`)
        }else{
            alert(`Bravo tu à trouvé en ${10 - maxCoup}`)
            player_choice = prompt("Veux-tu rejouer ? oui/non")
            if(player_choice == "oui"){
                number = getRandomIntInclusive(0,100)
                maxCoup = 10
            }
        }if(maxCoup == 0){
            alert(`Bravo tu à perdu`)
            player_choice = prompt("Veux-tu rejouer ? oui/non")
            if(player_choice == "oui"){
                number = getRandomIntInclusive(0,100)
                maxCoup = 10
            }
            
        }
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}