const config = require('./mint.json');

function execShellCommand(cmd) {
    const exec = require('child_process').exec;
    return new Promise((resolve, reject) => {
        exec(cmd, (error, stdout, stderr) => {
            if (stderr) {
                console.log('stderr', stderr);
            }
            if (error) {
                console.log('Error', error);
            }
            resolve(stdout ? stdout : stderr);
        });
    });
}

config.openapi.forEach(async(spec) => {
    const command = `npx @mintlify/scraping@latest openapi-file .${spec} -o ./api`
    await execShellCommand(command);
});


