const fs = require('fs');

const DB_FILE_PATH = './core/db';

console.log("[CRUD]");

function createContent(content) {
  fs.writeFileSync(DB_FILE_PATH, content);
  return content;
}

console.log(createContent('CRUD completo!'));