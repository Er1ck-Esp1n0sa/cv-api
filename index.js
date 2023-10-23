const cors = require('cors')
const express = require('express')


const app = express();
app.use(cors());
app.options('*', cors());

const port = 8080;

app.get('/', (req, res, next) => {
	res.send('node express api <br> by Erick Espinosa');
});


app.get('/header', (req, res, next) => {
  res.sendfile("assets/header.json");
});

app.get('/work-experience', (req, res, next) => {
	res.sendfile("assets/work-experience.json");
});

app.get('/skills', (req, res, next) =>{
	res.sendfile("assets/skills.json");
})

app.get('/certifications', (req, res, next) =>{
	res.sendfile("assets/certifications.json");
})

app.get('/size', (req, res, next) =>{
	res.sendfile("assets/1a_proxy_size.json");
})

app.get('/hours', (req, res, next) =>{
	res.sendfile("assets/1a_dev_hours.json");
})

app.get('/3a1', (req, res, next) => {
	res.sendfile("assets/3a_test1.json");
});

app.get('/3a2', (req, res, next) => {
	res.sendfile("assets/3a_test2.json");
});

app.get('/3a3', (req, res, next) => {
	res.sendfile("assets/3a_test3.json");
});

app.get('/3a4', (req, res, next) => {
	res.sendfile("assets/3a_test4.json");
});

app.listen(port,  () => 
	console.log('listening on http://localhost:8080/'
));