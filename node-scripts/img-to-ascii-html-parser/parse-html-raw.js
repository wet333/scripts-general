const cheerio = require('cheerio');
const fs = require('fs');

const html = `<pre id="tiresult" style="font-size: 9px; background-color: #000000; font-weight: bold; padding: 4px 5px; --fs: 9px;"><b style="color:#000000">1011110010001100111100001100001110101110011100011001010000110111</b>
<b style="color:#000000">101100010101101101101111101110</b><b style="color:#FFFFFF">1001</b><b style="color:#000000">111001010000010011100110011101</b>
<b style="color:#000000">1001110101111000001101111110</b><b style="color:#FFFFFF">11011011</b><b style="color:#000000">0101001101011010011100101111</b>
<b style="color:#000000">00010011010110000000111010</b><b style="color:#FFFFFF">010000011</b><b style="color:#000000">11</b><b style="color:#FFFFFF">0</b><b style="color:#000000">00101011110001011110101011</b>
<b style="color:#000000">111110010100100101011110</b><b style="color:#FFFFFF">10011101100</b><b style="color:#000000">10111111101100110101100111011</b>
<b style="color:#000000">01100111110100001111011</b><b style="color:#FFFFFF">110100000</b><b style="color:#000000">1</b><b style="color:#FFFFFF">11</b><b style="color:#000000">01000110010100101100111100001</b>
<b style="color:#000000">10011010010111110101000</b><b style="color:#FFFFFF">1</b><b style="color:#000000">10111</b><b style="color:#FFFFFF">011</b><b style="color:#000000">11111001011100001000111100110100</b>
<b style="color:#000000">1111000010000110100100</b><b style="color:#FFFFFF">01</b><b style="color:#000000">01</b><b style="color:#FFFFFF">001100</b><b style="color:#000000">11100101011101110110110001010011</b>
<b style="color:#000000">1100001110111101100010</b><b style="color:#FFFFFF">10</b><b style="color:#000000">010001</b><b style="color:#FFFFFF">11</b><b style="color:#000000">011011011</b><b style="color:#FFFFFF">0</b><b style="color:#000000">0011101101000001011111</b>
<b style="color:#000000">1100011101100110001111</b><b style="color:#FFFFFF">1</b><b style="color:#000000">111100001000000101</b><b style="color:#FFFFFF">1</b><b style="color:#000000">0010011001010111100010</b>
<b style="color:#000000">011100000001001111100</b><b style="color:#FFFFFF">10</b><b style="color:#000000">1010</b><b style="color:#FFFFFF">00000</b><b style="color:#000000">1100101001</b><b style="color:#FFFFFF">1</b><b style="color:#000000">010110010001111001100</b>
<b style="color:#000000">10110101000110000000</b><b style="color:#FFFFFF">10</b><b style="color:#000000">11011</b><b style="color:#FFFFFF">11000</b><b style="color:#000000">0111001001</b><b style="color:#FFFFFF">0</b><b style="color:#000000">101100001110101100000</b>
<b style="color:#000000">11011100010000101010</b><b style="color:#FFFFFF">1</b><b style="color:#000000">1111000</b><b style="color:#FFFFFF">0000</b><b style="color:#000000">11100011100100111010101111100111</b>
<b style="color:#000000">10011001011100011</b><b style="color:#FFFFFF">10</b><b style="color:#000000">0110011100</b><b style="color:#FFFFFF">100</b><b style="color:#000000">11101101011000100011110001011111</b>
<b style="color:#000000">111001010001110</b><b style="color:#FFFFFF">11110111</b><b style="color:#000000">001</b><b style="color:#FFFFFF">1</b><b style="color:#000000">111</b><b style="color:#FFFFFF">11</b><b style="color:#000000">00111101000000011000101001110100</b>
<b style="color:#000000">010000000111</b><b style="color:#FFFFFF">001011101001010</b><b style="color:#000000">0111</b><b style="color:#FFFFFF">1</b><b style="color:#000000">00110001000000101001101001011100</b>
<b style="color:#000000">1111110001</b><b style="color:#FFFFFF">0100010111000001001</b><b style="color:#000000">00010110110110011010101</b><b style="color:#FFFFFF">00</b><b style="color:#000000">1101010000</b>
<b style="color:#000000">00011111</b><b style="color:#FFFFFF">00011101000101000001</b><b style="color:#000000">111101100001000010010</b><b style="color:#FFFFFF">1100010</b><b style="color:#000000">00111111</b>
<b style="color:#000000">1100010</b><b style="color:#FFFFFF">10011001001010010001100</b><b style="color:#000000">01011110011111</b><b style="color:#FFFFFF">00</b><b style="color:#000000">1</b><b style="color:#FFFFFF">111</b><b style="color:#000000">100</b><b style="color:#FFFFFF">0</b><b style="color:#000000">010</b><b style="color:#FFFFFF">1</b><b style="color:#000000">000010</b>
<b style="color:#000000">110000</b><b style="color:#FFFFFF">001</b><b style="color:#000000">0</b><b style="color:#FFFFFF">1010</b><b style="color:#000000">0</b><b style="color:#FFFFFF">100001</b><b style="color:#000000">0</b><b style="color:#FFFFFF">11111111</b><b style="color:#000000">011001010</b><b style="color:#FFFFFF">01</b><b style="color:#000000">000</b><b style="color:#FFFFFF">00</b><b style="color:#000000">0</b><b style="color:#FFFFFF">00</b><b style="color:#000000">101001000</b><b style="color:#FFFFFF">0</b><b style="color:#000000">00000</b>
<b style="color:#000000">110110</b><b style="color:#FFFFFF">0111</b><b style="color:#000000">1</b><b style="color:#FFFFFF">11000001</b><b style="color:#000000">110</b><b style="color:#FFFFFF">011011000111010010000</b><b style="color:#000000">1010</b><b style="color:#FFFFFF">0</b><b style="color:#000000">0100110110</b><b style="color:#FFFFFF">0</b><b style="color:#000000">10110</b>
<b style="color:#000000">01001</b><b style="color:#FFFFFF">101</b><b style="color:#000000">0</b><b style="color:#FFFFFF">0</b><b style="color:#000000">00</b><b style="color:#FFFFFF">0100</b><b style="color:#000000">00</b><b style="color:#FFFFFF">110101010011110011001010001</b><b style="color:#000000">01011101111100</b><b style="color:#FFFFFF">0</b><b style="color:#000000">0101</b>
<b style="color:#000000">01110</b><b style="color:#FFFFFF">110</b><b style="color:#000000">00</b><b style="color:#FFFFFF">111</b><b style="color:#000000">000</b><b style="color:#FFFFFF">10110</b><b style="color:#000000">1</b><b style="color:#FFFFFF">01010101</b><b style="color:#000000">1</b><b style="color:#FFFFFF">00</b><b style="color:#000000">00</b><b style="color:#FFFFFF">11011111</b><b style="color:#000000">1</b><b style="color:#FFFFFF">10</b><b style="color:#000000">1</b><b style="color:#FFFFFF">1</b><b style="color:#000000">00100101001</b><b style="color:#FFFFFF">10</b><b style="color:#000000">000</b>
<b style="color:#000000">0010</b><b style="color:#FFFFFF">1010</b><b style="color:#000000">011001</b><b style="color:#FFFFFF">01000</b><b style="color:#000000">11</b><b style="color:#FFFFFF">0001110101</b><b style="color:#000000">1</b><b style="color:#FFFFFF">0</b><b style="color:#000000">1</b><b style="color:#FFFFFF">0011111100</b><b style="color:#000000">0101000101101011</b><b style="color:#FFFFFF">1</b><b style="color:#000000">110</b>
<b style="color:#000000">0101</b><b style="color:#FFFFFF">0</b><b style="color:#000000">0110000</b><b style="color:#FFFFFF">0</b><b style="color:#000000">0110111</b><b style="color:#FFFFFF">10000001010</b><b style="color:#000000">01</b><b style="color:#FFFFFF">001110000111</b><b style="color:#000000">101001110111001</b><b style="color:#FFFFFF">0</b><b style="color:#000000">100</b>
<b style="color:#000000">010</b><b style="color:#FFFFFF">00</b><b style="color:#000000">10011001110</b><b style="color:#FFFFFF">0</b><b style="color:#000000">00</b><b style="color:#FFFFFF">100100011101</b><b style="color:#000000">11</b><b style="color:#FFFFFF">110001000000</b><b style="color:#000000">10</b><b style="color:#FFFFFF">1</b><b style="color:#000000">0111100111010</b><b style="color:#FFFFFF">1</b><b style="color:#000000">00</b>
<b style="color:#000000">0001101001</b><b style="color:#FFFFFF">0</b><b style="color:#000000">1</b><b style="color:#FFFFFF">10000</b><b style="color:#000000">00</b><b style="color:#FFFFFF">1110</b><b style="color:#000000">1101</b><b style="color:#FFFFFF">1</b><b style="color:#000000">1100</b><b style="color:#FFFFFF">0</b><b style="color:#000000">11001001</b><b style="color:#FFFFFF">00100</b><b style="color:#000000">0</b><b style="color:#FFFFFF">10010</b><b style="color:#000000">010111000011</b>
<b style="color:#000000">010100</b><b style="color:#FFFFFF">0010001010</b><b style="color:#000000">110</b><b style="color:#FFFFFF">1000</b><b style="color:#000000">101</b><b style="color:#FFFFFF">00110</b><b style="color:#000000">1000</b><b style="color:#FFFFFF">0</b><b style="color:#000000">01100</b><b style="color:#FFFFFF">0010</b><b style="color:#000000">001</b><b style="color:#FFFFFF">00000</b><b style="color:#000000">0</b><b style="color:#FFFFFF">1110</b><b style="color:#000000">000000</b>
<b style="color:#000000">01111</b><b style="color:#FFFFFF">00010111000</b><b style="color:#000000">1110</b><b style="color:#FFFFFF">10110000010</b><b style="color:#000000">00</b><b style="color:#FFFFFF">011110101011</b><b style="color:#000000">000</b><b style="color:#FFFFFF">01011001</b><b style="color:#000000">11100101</b>
<b style="color:#000000">101</b><b style="color:#FFFFFF">1010011</b><b style="color:#000000">00101</b><b style="color:#FFFFFF">0</b><b style="color:#000000">100</b><b style="color:#FFFFFF">001100110011</b><b style="color:#000000">010</b><b style="color:#FFFFFF">11101011101</b><b style="color:#000000">101</b><b style="color:#FFFFFF">1</b><b style="color:#000000">000001</b><b style="color:#FFFFFF">001100</b><b style="color:#000000">001</b>
<b style="color:#000000">00</b><b style="color:#FFFFFF">011000110</b><b style="color:#000000">000101001</b><b style="color:#FFFFFF">01100000000</b><b style="color:#000000">010</b><b style="color:#FFFFFF">01010011</b><b style="color:#000000">0101100101100</b><b style="color:#FFFFFF">0110101</b><b style="color:#000000">10</b>
<b style="color:#000000">11</b><b style="color:#FFFFFF">110111</b><b style="color:#000000">1</b><b style="color:#FFFFFF">1110</b><b style="color:#000000">10001110</b><b style="color:#FFFFFF">111010011</b><b style="color:#000000">11</b><b style="color:#FFFFFF">1</b><b style="color:#000000">0</b><b style="color:#FFFFFF">00010011</b><b style="color:#000000">01011111101</b><b style="color:#FFFFFF">0</b><b style="color:#000000">0110</b><b style="color:#FFFFFF">10010</b><b style="color:#000000">0</b>
</pre>`;

const $ = cheerio.load(html);

let result = '';

$('pre#tiresult b').each((i, el) => {
    const color = $(el).css('color');
    const content = $(el).text();

    if (color === '#000000') {
        result += ' '.repeat(content.length);
    } else {
        result += content;
    }
});

result = insertNewline(result);

fs.writeFile('ascii-art.txt', result, (err) => {
    if (err) {
        throw err;
    }
    console.log('The file has been saved!');
    console.log(result);
});

function insertNewline(str) {
    const regex = new RegExp(`(.{64})`, 'g');
    return str.replace(regex, '$1\n');
}