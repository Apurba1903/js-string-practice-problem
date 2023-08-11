const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. boshonto kale tomay bolte pari ni. shada shada kala kala';

const parts = lyrics.split(' ');
const sentence = lyrics.split('.');
const chars = lyrics.split('');

console.log(chars);


const partial = lyrics.slice(5, 8);
console.log(partial);



const lines = [
    'Tumi bondhu kala pakhi ami jeno ki',
    'boshonto kale tomay bolte pari ni',
    'shada shada kala kala'
  ];

const newSong = lines.join('. ');
console.log(newSong);