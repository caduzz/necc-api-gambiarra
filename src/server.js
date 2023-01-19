require('dotenv').config();
require('./database')

const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors())
app.use(express.json());

require('./routes/public.routes')(app);

require('./routes/private.routes')(app);

app.listen(process.env.PORT, () => {
    console.log(process.env.PORT)
    console.log("Server Online - ✅")
})