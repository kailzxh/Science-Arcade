
import express from 'express';
import path from 'path';
import fs from 'fs';

import { exec } from 'child_process';

const __dirname = new URL('.', import.meta.url).pathname;


const codearcade= './coding/code-to-exit'
const mathGameAppPath = './math/math-quiz';
const learnParticles = './physics/learn-particles';


const runNpmStart = (appPath, port) => {
  exec(`set PORT=${port} && npm start`, { cwd: appPath }, (error, stdout) => {
    if (error) {
      console.error(`Error running npm start: ${error.message}`);
      return;
    }
    
    console.log(`stdout: ${stdout}`);
  });
};


if (fs.existsSync(path.join(mathGameAppPath, 'package.json'))) {
  runNpmStart(mathGameAppPath, 3001);
} else {
  console.log('No package.json found in math-game-master');
}
if (fs.existsSync(path.join(codearcade, 'package.json'))) {
  runNpmStart(codearcade, 3003);
} else {
  console.log('No package.json found in math-game-master');
}



if (fs.existsSync(path.join(learnParticles, 'package.json'))) {
  runNpmStart(learnParticles, 3002);
} else {
  console.log('No package.json found in learn-particles');
}


const app = express();
const PORT = 3000;

app.use('/math-game-master', (req, res) => {
  res.redirect('http://localhost:3001' + req.url);
});


app.use('/learn-particles', (req, res) => {
  res.redirect('http://localhost:3002' + req.url);
});
app.use('/code-arcade-master', (req, res) => {
  res.redirect('http://localhost:3003' + req.url);
});

app.use(express.static(path.resolve('.')));


app.get('/math-game-master', (req, res) => {
  const filePath = path.resolve('index.html');
  res.sendFile(filePath);
});


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
