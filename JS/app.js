function readTextFile(file, callback) {
    let jsonFile = new XMLHttpRequest();
    jsonFile.overrideMimeType("application/json");
    jsonFile.open("GET", file, true);
    jsonFile.onreadystatechange = function() {
        if (jsonFile.readyState === 4 && jsonFile.status == "200") {
            callback(jsonFile.responseText);
        }
    }
    jsonFile.send(null);
}

//Parse JSON file into an object and access all words, then get a random first word
readTextFile("../Text/Words.json", function(text){
    let firstWord = JSON.parse(text);
    let randomFirstWord = firstWord.data[Math.floor(Math.random()*firstWord.data.length)];
    document.getElementById("firstWord").innerHTML = randomFirstWord;
});

//Get Second Word
readTextFile("../Text/Words2.json", function(text){
    const secondWord = JSON.parse(text);
    let randomSecondWord = secondWord.data[Math.floor(Math.random()*secondWord.data.length)];
    document.getElementById("secondWord").innerHTML = randomSecondWord;
    
});


//Set a random background
const setBackground = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
  }

  setBackground();