// scratch/verify_jsonld.js
const fs = require('fs');

function checkJsonLd(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const match = content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (!match) throw new Error(`No JSON-LD script found in ${filePath}`);
  try {
    const json = JSON.parse(match[1]);
    console.log(`[PASS] Valid JSON-LD in ${filePath}: @graph items = ${json['@graph'] ? json['@graph'].length : 1}`);
  } catch (err) {
    throw new Error(`JSON-LD parse error in ${filePath}: ${err.message}`);
  }
}

checkJsonLd('ai_capital.html');
checkJsonLd('ai_capital_ko.html');
checkJsonLd('index.html');
checkJsonLd('index_ko.html');
