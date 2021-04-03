const express = require('express')
const bodyParser=require('body-parser')
const app = express()
const port = 3001
const getImages = require('./getimages');
const saveImage= require('./saveImage');
const cors = require('cors');

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());


app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})

app.get('/images', (req, res) => {
  return getImages(req,res);
})
app.post('/upload',(req,res) =>{
  console.log(req.body);
  return saveImage(req,res);
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});