const fs = require('fs');
const fn_build_response = require("./src/index").fn_build_response;

const testData = JSON.parse(fs.readFileSync('./test/test1.json', 'utf8'));

const event = {
    data: {
        data: Buffer.from(JSON.stringify(testData)).toString("base64")
    }
};

const promise = event => new Promise(resolve => fn_build_response(event, resolve));

promise(event).then(() => {
    console.log("Function execution finished.");
}).catch(e => {
    console.error(`Function execution failed: ${e}`);
});