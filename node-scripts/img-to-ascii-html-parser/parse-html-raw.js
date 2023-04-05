const cheerio = require('cheerio');
const fs = require('fs');

const html = `
<pre id="tiresult" style="font-size: 9px; background-color: #000000; font-weight: bold; padding: 4px 5px; --fs: 9px;"><b style="color:#FFFFFF">1111001110000110110110001001010010001010000010000110100010000000</b>
<b style="color:#FFFFFF">0000000011000010100111111001111001101111111001100111000011110010</b>
<b style="color:#FFFFFF">0000111101001010110101101110110100101111011100011101100101010101</b>
<b style="color:#FFFFFF">0110010110001110101011111000000110110011111010001111111011111100</b>
<b style="color:#FFFFFF">0110010000110010111001001111001101001001010011100111010011101111</b>
<b style="color:#FFFFFF">0101100001010101100100001100111011000110101010111000101011000101</b>
<b style="color:#FFFFFF">0100001011011110011111000100</b><b style="color:#000000">0010001010100</b><b style="color:#FFFFFF">10100110000010111000001</b>
<b style="color:#FFFFFF">11100000001100100100010101</b><b style="color:#000000">100100111011000000</b><b style="color:#FFFFFF">01111000011000100000</b>
<b style="color:#FFFFFF">0101101101101100001001111</b><b style="color:#000000">1011100100101011000101</b><b style="color:#FFFFFF">11100000111110110</b>
<b style="color:#FFFFFF">0101001111001110010001000</b><b style="color:#000000">1101101001011110110101011</b><b style="color:#FFFFFF">01001001111100</b>
<b style="color:#FFFFFF">110100010111001001110000</b><b style="color:#000000">011011110011111110100100001</b><b style="color:#FFFFFF">0101000010101</b>
<b style="color:#FFFFFF">010111010010110000010001</b><b style="color:#000000">11111101</b><b style="color:#FFFFFF">00111100</b><b style="color:#000000">001001111101</b><b style="color:#FFFFFF">101111011001</b>
<b style="color:#FFFFFF">1001110111110011100111</b><b style="color:#000000">110001</b><b style="color:#FFFFFF">1100110110001111</b><b style="color:#000000">001100010</b><b style="color:#FFFFFF">10111000110</b>
<b style="color:#FFFFFF">10000111001010101101</b><b style="color:#000000">010000</b><b style="color:#FFFFFF">01111111101010010100</b><b style="color:#000000">1101011</b><b style="color:#FFFFFF">11001010011</b>
<b style="color:#FFFFFF">1111101110100010100</b><b style="color:#000000">000010</b><b style="color:#FFFFFF">110011110001000100111</b><b style="color:#000000">00101111</b><b style="color:#FFFFFF">1001001111</b>
<b style="color:#FFFFFF">100110000101110110</b><b style="color:#000000">1110110</b><b style="color:#FFFFFF">001110010001101010000</b><b style="color:#000000">1001100</b><b style="color:#FFFFFF">11010010111</b>
<b style="color:#FFFFFF">101110010100101011</b><b style="color:#000000">000101011110100</b><b style="color:#FFFFFF">00011</b><b style="color:#000000">111110101011100</b><b style="color:#FFFFFF">11010110000</b>
<b style="color:#FFFFFF">01010010111011000</b><b style="color:#000000">100111111</b><b style="color:#FFFFFF">01</b><b style="color:#000000">01011</b><b style="color:#FFFFFF">1011</b><b style="color:#000000">10011010111101110</b><b style="color:#FFFFFF">1010010000</b>
<b style="color:#FFFFFF">1000010000111110</b><b style="color:#000000">01111110</b><b style="color:#FFFFFF">0</b><b style="color:#000000">0111101</b><b style="color:#FFFFFF">11100</b><b style="color:#000000">11100101111010011</b><b style="color:#FFFFFF">0010010100</b>
<b style="color:#FFFFFF">0000000111110010</b><b style="color:#000000">01</b><b style="color:#FFFFFF">1</b><b style="color:#000000">0100</b><b style="color:#FFFFFF">011010111011111110</b><b style="color:#000000">11010</b><b style="color:#FFFFFF">10</b><b style="color:#000000">10100</b><b style="color:#FFFFFF">11001111111</b>
<b style="color:#FFFFFF">0100110000000011</b><b style="color:#000000">100010</b><b style="color:#FFFFFF">00100011111101100011100101</b><b style="color:#000000">00100</b><b style="color:#FFFFFF">10000001111</b>
<b style="color:#FFFFFF">0000101100010111</b><b style="color:#000000">100111</b><b style="color:#FFFFFF">101100010</b><b style="color:#000000">10001110</b><b style="color:#FFFFFF">000001101</b><b style="color:#000000">1101</b><b style="color:#FFFFFF">000001010010</b>
<b style="color:#FFFFFF">01101100101011100</b><b style="color:#000000">11010</b><b style="color:#FFFFFF">011001001</b><b style="color:#000000">00011000</b><b style="color:#FFFFFF">101001011</b><b style="color:#000000">010</b><b style="color:#FFFFFF">1101110101000</b>
<b style="color:#FFFFFF">011100101110110010</b><b style="color:#000000">11110</b><b style="color:#FFFFFF">00101</b><b style="color:#000000">111011000011</b><b style="color:#FFFFFF">0010111</b><b style="color:#000000">010</b><b style="color:#FFFFFF">11110101111010</b>
<b style="color:#FFFFFF">0100001000000110</b><b style="color:#000000">11011010</b><b style="color:#FFFFFF">100</b><b style="color:#000000">1111011110100111</b><b style="color:#FFFFFF">111</b><b style="color:#000000">001</b><b style="color:#FFFFFF">001101001001011</b>
<b style="color:#FFFFFF">1000100010000011</b><b style="color:#000000">0100</b><b style="color:#FFFFFF">1</b><b style="color:#000000">0001</b><b style="color:#FFFFFF">01001001</b><b style="color:#000000">0111101111</b><b style="color:#FFFFFF">1</b><b style="color:#000000">0111</b><b style="color:#FFFFFF">0000010011110010</b>
<b style="color:#FFFFFF">1111011111111100</b><b style="color:#000000">11</b><b style="color:#FFFFFF">1110</b><b style="color:#000000">1100</b><b style="color:#FFFFFF">110111</b><b style="color:#000000">10010</b><b style="color:#FFFFFF">00100</b><b style="color:#000000">01000</b><b style="color:#FFFFFF">11000011100001110</b>
<b style="color:#000000">0001010001111011010011000101</b><b style="color:#FFFFFF">0111</b><b style="color:#000000">0101</b><b style="color:#FFFFFF">01100</b><b style="color:#000000">101001</b><b style="color:#FFFFFF">11001110111101100</b>
<b style="color:#000000">1001000011100011101110000010101101101110101010111</b><b style="color:#FFFFFF">010101111010000</b>
<b style="color:#FFFFFF">1011001111110</b><b style="color:#000000">000100010001011111100111100010101010</b><b style="color:#FFFFFF">100111111100100</b>
<b style="color:#FFFFFF">00110011101</b><b style="color:#000000">100110011001111100000011010111011010011</b><b style="color:#FFFFFF">11010100000010</b>
<b style="color:#FFFFFF">111110111</b><b style="color:#000000">00111001010101010011001011111110111011101</b><b style="color:#FFFFFF">11100000001101</b>
<b style="color:#000000">10</b><b style="color:#FFFFFF">101</b><b style="color:#000000">100011000001111111100100001001110011100110011</b><b style="color:#FFFFFF">00111111101000</b>
<b style="color:#000000">010100111011010100100011000011001100000001010010001010</b><b style="color:#FFFFFF">1100010111</b>
<b style="color:#000000">0100111000001011001011010100111010001000111101101010010010</b><b style="color:#FFFFFF">01001</b><b style="color:#000000">1</b>
<b style="color:#000000">0000000101101111011101000010101110111010101101010100100111010100</b>
<b style="color:#000000">1001111000100101110110000010110001010111011001100000010001001000</b>
<b style="color:#000000">1100101101010011000100100000001110110000010000010001000001111111</b>
<b style="color:#000000">1100100011011100111100001010010011110001010001100101010100000101</b>
<b style="color:#000000">0010101011100011000111110111111111011101011100111011101010011010</b>
<b style="color:#000000">0111001110000011101001010001011100011011001011110111111010000001</b>
<b style="color:#000000">1111110011001010100101011011001011010001110000000010011001100010</b>
<b style="color:#000000">1111101110100110011110111011111011011111001110000011111010111010</b>
</pre>
`;

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