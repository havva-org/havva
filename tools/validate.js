
// Minimal AJV validation + internal link check
const fs = require('fs');
const path = require('path');
const {globSync} = require('glob');
const Ajv = require('ajv');
const ajv = new Ajv();

function fail(msg){ console.error(msg); process.exit(1); }

// JSON schema validation
const schema = JSON.parse(fs.readFileSync('data/schema/global_metrics.schema.json','utf8'));
const data = JSON.parse(fs.readFileSync('data/global_metrics.json','utf8'));
const validate = ajv.compile(schema);
if(!validate(data)){ console.error(validate.errors); fail('global_metrics.json failed schema'); }

// Internal link existence check
const htmlFiles = globSync('**/*.html', {ignore:['node_modules/**']});
const hrefRe = /href="(\/[^"#?]+)"/g;
let missing = [];
for(const f of htmlFiles){
  const html = fs.readFileSync(f,'utf8');
  let m;
  while((m = hrefRe.exec(html))){
    const href = m[1].replace(/^\//,'');
    const target = path.join(process.cwd(), href);
    if(!fs.existsSync(target)){
      // allow external-like or directory routes that are handled by GH Pages extension defaults
      if(!href.endsWith('/') && !href.endsWith('.html')){
        // try adding index.html
        if(!fs.existsSync(path.join(process.cwd(), href, 'index.html'))){
          missing.push({from:f, to:href});
        }
      }
    }
  }
}
if(missing.length){
  console.error('Missing internal links:', missing.slice(0,20));
  fail('internal link check failed');
}
console.log('Validation OK');
