
'use strict';

const path = require('path');
const fs = require('fs');
const glob = require('glob');

const packagePath = process.cwd();
const distPath = path.join(packagePath, './dist');
const srcPath = path.join(packagePath, './src');

function copySass({ from, to }) {
    const files = glob.sync('**/*.scss', { cwd: from });
    const cmds = files.map(file => {
        var targetFolder = path.dirname(path.resolve(to, file));

        if (!fs.existsSync(targetFolder)) {
            fs.mkdirSync(targetFolder, { recursive: true });
        }

        fs.copyFileSync(path.resolve(from, file), path.resolve(to, file));
    });

    return cmds;
}

function run() {
    copySass({ from: srcPath, to: distPath });
}

run();
