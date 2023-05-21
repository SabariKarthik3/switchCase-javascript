const button = document.querySelector("button")
//event listner
button.addEventListener("click",displayStates)
let resultdiv = document.createElement('div')
resultdiv.id = 'result'
document.getElementById('wrapper').appendChild(resultdiv)
document.getElementById('result').innerHTML(text)

function displayStates(){
    const input = document.getElementById("input")
    const city= input.options[input.selectedIndex].value
    console.log(city)
    let population =0,literacyrate = 0, language = 0
    switch(city){
        case 'Banglore':
            population = 8443675
            literacyrate = 88.71
            language = 'kannada'
            break
        case 'Tamil Nadu':
                population = 10443675
                literacyrate = 89.71
                language = 'tamil'
                break
        case 'Kerala':
                population = 77443675
                literacyrate = 77.71
                language = 'Malayalam'
                break
               
        case 'Mumbai':
                population = 99443675
                literacyrate = 97.71
                language = 'Hindhi'
                break
               
    }
    
    const text = ` the indian city of ${city} has a population of ${population} language spoken is ${language} and literacy rate is ${literacyrate}%`
    console.log(text)
    
    let resultdiv = document.createElement('div')
    resultdiv.id = 'result'
    document.getElementById('wrapper').appendChild(resultdiv)
    document.getElementById('result').innerHTML=text


}