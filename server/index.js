const express = require('express');
const con = require('./controllers/messages_controller')
const app = express();

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

app.post('/api/messages', con.create);
app.get('/api/messages', con.read);
app.put('/api/messages/:id', con.update);
app.delete('/api/messages/:id', con.delete);

const port = 3001;
app.listen(port, () => { console.log(`Server listening on port ${port}`)
})