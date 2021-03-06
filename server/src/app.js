console.log('Hello');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const config = require('./config/config');
const { sequelize } = require('./models');


const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

require('./passport')

require('./routes')(app)

app.get('/', (req, res)=>{
  res.send(`<h2>Api is Live Now.....!</h2> 
    <h3>Possible Routes</h3>
    <p>GET songs - /songs<p/>
    `)
})

sequelize.sync({force: false}).then(() => {
  app.listen(config.port);
  console.log(`Server Started on port ${config.port}`);
});
