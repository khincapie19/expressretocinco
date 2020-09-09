var express = require('express');
var app = express();


app.get('/', (req, res) => {
  let content = "";

  for(let i = 1; i < 51; i++) {
    if (i % 2 == 0 ){
      content += `<p>${i} Soy Par!</p>`;
    } else {
      content += `<p>${i} Soy Impar!</p>`;
    }
  }

  res.send(content);
});

app.listen(3000, () => console.log('Listening on port 3000!'));
