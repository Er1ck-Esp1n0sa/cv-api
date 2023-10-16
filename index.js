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

app.get('/proxysize', (req, res, next) =>{
	res.sendfile("assets/1a_proxy_size.json");
})

app.get('/devhours', (req, res, next) =>{
	res.sendfile("assets/1a_dev_hours.json");
})

app.listen(port,  () => 
	console.log('listening on http://localhost:8080/'
));