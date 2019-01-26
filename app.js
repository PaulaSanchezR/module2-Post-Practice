
const express = require('express');
const app     = express();
const hbs     = require('hbs'); 
const bodyParser = require('body-parser');

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(myFakeMiddleware)
// ...

// save information before you load the page Autentication (secction PHP)
// get information of the traffic
function myFakeMiddleware(req, _, next){
  console.log("myFakeMiddleware was called!");
  req.secretValue = "swordfish";
  next();
}
app.get('/', function (req, res) {
    console.log(req);
    res.render('user-info-form');
  })

  app.get('/login', (req, res) => {
    res.render('login')
  });

  app.get('/test', (req, res) => {
      const {secretValue:mysecret} = req;
      res.send(mysecret);
  });

  /*app.post('/login', (req, res) => {
    res.send('You\'ve logged in!');
  });*/

  app.post('/login', (req, res) => {
      // decosntruct VB6
    const {email,password} = req.body;  
    /*let email    = req.body.email;
    let password = req.body.password;*/
    if (email === 'paulasanchez@gmail.com' && password ==="1234"){
        res.send("Welcome");
      } else {
        res.send("Go away");
      }

    res.send(`Email: ${email}, Password: ${password}`);
  });

app.get('/display-user-info', (req, res) => {
   let {name,age,superhero} = req.query;
   /* let name      = req.query.name;
    let age       = req.query.age;
    let superhero = req.query.superhero;*/
  
    res.send(`
      Your name is ${name}
      Your age is ${age}
      Your favorite superhero is ${superhero}
    `)
  });

  app.listen(3000, () => console.log('App listening on port 3000!'))