const fs = require('fs');




let data = fs.readFileSync('./jogo.txt'
,{
    encoding:'utf8',
    flag:'r'
});


let newData = data.split("#");


let treatedData = newData.map((value) => {

    let separatedTips = value.replace("\r\n","").split("D:");

    let word = separatedTips.shift().replace("P:","");

    return {
        word:word,
        Tips:separatedTips
    }
});

console.log(treatedData);
