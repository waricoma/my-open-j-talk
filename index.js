'use strict';

// https://ja.osdn.net/projects/nvdajp/scm/git/nvdajpmiscdep/blobs/master/include/jtalk/bep-eng.dic

const OPEN_J_TALK = require('openjtalk');
const KUROMOJI = require('kuromoji');
const PATH = require('path');

const BUILDER = KUROMOJI.builder({
  dicPath: PATH.resolve(__dirname, 'node_modules', 'kuromoji', 'dict')
});

BUILDER.build((err, tokenizer) => {
  if(err) { throw err; }
  let tokens = tokenizer.tokenize('Hello 世界');
  console.dir(tokens);
});

const MEI = [
  new OPEN_J_TALK({ alpha: 0.4 }),
  new OPEN_J_TALK({ alpha: 0.5 }),
  new OPEN_J_TALK({ alpha: 0.6 })
];

let wards = ['新しい', 'ニュースです。', '新着'];

setInterval(() => {
  let meiIndex = Math.floor(Math.random() * Math.floor(2));
  let wardIndex = Math.floor(Math.random() * Math.floor(wards.length));
  MEI[meiIndex].talk(
    wards[wardIndex],
    Math.floor(Math.random() * (200 - 140)) + 140
  );
  MEI[meiIndex].talk(
    wards[wardIndex],
    Math.floor(Math.random() * (200 - 140)) + 140
  );
}, 500);
