const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. boshonto kale tomay bolte pari ni. shada shada kala kala';

const searchString = 'shAda';

// const lyricsLowerCase = lyrics.toLowerCase();
// const searchLowerCase = searchString.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchLowerCase);

const doesExist = lyrics.toLowerCase().includes(searchString.toLowerCase());

console.log(doesExist);



// Index Of in String
console.log(lyrics.indexOf('shada'));

const givenWord = 'shada';
if(lyrics.indexOf(givenWord) !== -1 ){
    console.log('Exist inside the String');
}
else{
    console.log('Does not exist inside the String');
}

// StartsWith in String

console.log(lyrics.startsWith('Tumi'));


// EndsWith in String


const fileName = 'mybiodata.pdf'
const otherFile = 'mypic.png'

fileName.endsWith('.pdf');