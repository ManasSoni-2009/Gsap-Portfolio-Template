const fs = require('fs');

const files = fs.readdirSync('public/images');
for (let file of files) {
  if (file.endsWith('.svg')) {
    let content = fs.readFileSync('public/images/' + file, 'utf-8');
    
    if (content.includes('padding-applied')) {
      continue;
    }

    // Shrinks the visible size of the item down to ~45% by making the viewport ~2.2x bigger
    content = content.replace(/viewBox="0 0 ([\d\.]+) ([\d\.]+)"/, (match, w, h) => {
        let width = parseFloat(w);
        let height = parseFloat(h);
        const sf = 2.2;
        const dw = width * sf;
        const dh = height * sf;
        const dx = (width - dw) / 2;
        const dy = (height - dh) / 2;

        return `viewBox="${dx} ${dy} ${dw} ${dh}" data-status="padding-applied"`;
    });

    fs.writeFileSync('public/images/' + file, content);
    console.log(`Medium Padded SVG: ${file}`);
  }
}
