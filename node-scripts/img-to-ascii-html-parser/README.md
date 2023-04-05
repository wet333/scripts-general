# Transform the HTML art to ASCII

This script takes an HTML art as input and converts it to its ASCII equivalent.

## How to use the script

1. Go to the page [Image to HTML Art](https://www.text-image.com/convert/) and select the HTML option.

2. Then select background="black", Show it in="monochrome" and Extra Contrast="yes".

3. Click the button that says "Convert!".

4. After the image is generated, click in the button "Show HTML", copy the textarea contents and open the parse-html-raw.js file.

5. Replace the html constant contents, pasting your clipboard between the \` \`.

6. Now just run this: `node parse-html-raw.js`

And you will have your ASCII art inside the ascii-art.txt file!