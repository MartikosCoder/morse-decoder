const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const words = expr.split('**********');
    const decoded_words = [];
    words.forEach(word => {
        const letters = [];
        for(let i = 0; i < word.length / 10; i++) {
            const un_wrapped_letter = word.slice(i * 10, (i + 1) * 10);
            letters.push(un_wrapped_letter.slice(un_wrapped_letter.indexOf('1')));
        }
        decoded_words.push(letters
            .map(elem => elem.replace(/10/g, '.'))
            .map(elem => elem.replace(/11/g, '-'))
            .map(elem => MORSE_TABLE[elem])
            .join(''));
    })

    return decoded_words.join(' ');
}

module.exports = {
    decode
}