const getFileContents = () => {
    const fs = require('fs');
    return fs.readFileSync('test.txt', 'utf8');
}

const naiveSoftwireAddressCounter = (data) => { 
    let counter = 0;
    for (let index = 0; index < data.length; index++) {
        if (data.substring(index, index + 13) === '@softwire.com') {
            counter++;
        }
    }
    return counter;
}

const regexSoftwireAddressCounter = (data) => {
    const softwireEmailAddressRegex = /\b[\w\.]{3}\w*@softwire.com\b/g;
    const matches = [...data.matchAll(softwireEmailAddressRegex)];
    return matches.length;
}

const domainCounter = (data) => {
    const arbitraryEmailAddressRegex = /\w[\w\.]+\w@((\w+\.\w+)+)(?=\s)/g;
    const matches = [...data.matchAll(arbitraryEmailAddressRegex)];
    const domainCounts = {};
    for (const match of matches) {
        const domain = match[1];
        if (domainCounts[domain] !== undefined) {
            domainCounts[domain] += 1;
        } else {
            domainCounts[domain] = 1;
        }
    }
    return domainCounts;
}

const data = getFileContents();
const naiveCount = naiveSoftwireAddressCounter(data);
const regexCount = regexSoftwireAddressCounter(data);
const domains = domainCounter(data);
console.log(`Naive count of softwire.com: ${naiveCount}`);
console.log(`Regex count of softwire.com: ${regexCount}`);
console.log(domains);
