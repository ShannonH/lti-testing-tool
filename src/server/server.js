import path from 'path';
import express from 'express';
const routes = require('./routes');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes(app);

app.listen(process.env.PORT || 3001, () => console.log('Express server listening on localhost:3001'));
