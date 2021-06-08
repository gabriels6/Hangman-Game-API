const wordsAndTips = require('../Data/WordsAndTips');

module.exports = {
    async getWordFromNumber(request,response){

        const {word} = request.params;
        
        const rightWordAndTips = wordsAndTips[word];

        return response.json(rightWordAndTips);
    },
    async getRandomWord(request,response){

        let word = Math.round(Math.random() * 101);

        let rightWordAndTips = wordsAndTips[word];

        while(rightWordAndTips == null ||rightWordAndTips.word == null || rightWordAndTips.word === ""){
            word = Math.round(Math.random() * 101);
            rightWordAndTips = wordsAndTips[word];
        }

        return response.json(rightWordAndTips);

    }
}