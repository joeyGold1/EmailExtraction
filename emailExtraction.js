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

const data = getFileContents();
const count = naiveCounter(data);
console.log(count);
