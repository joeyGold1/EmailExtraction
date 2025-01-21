const getFileContents = () => {
    const fs = require('fs');
    return fs.readFileSync('test.txt', 'utf8');
}

const naiveCounter = (data) => { 
    let counter = 0;
    for (let index = 0; index < data.length; index++) {
        if (data.substring(index, index + 13) === '@softwire.com') {
            counter++;
        }
    }
    return counter
}

const regexCounter = (data) => {
    const re = /\b[\w\.]{3}\w*@softwire.com\b/g;
    const matches = [...data.matchAll(re)];
    return matches.length;
}

const data = getFileContents();
const naiveCount = naiveCounter(data);
const regexCount = regexCounter(data);
console.log(`Naive count of softwire.com: ${naiveCount}`);
console.log(`Regex count of softwire.com: ${regexCount}`);
