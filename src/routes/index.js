
const c1Router = require('./c1');

const siteRouter = require('./home');

const worldRouter = require('./world');

const eplRouter = require('./epl');

const euroRouter = require('./euro');

const liveRouter = require('./live');

const laligaRouter = require('./laliga');

const adminRouter= require('./admin');

const loginRouter = require('./login');

function route(app){
    app.use('/login',loginRouter);
    app.use('/admin',adminRouter);
    app.use('/laliga',laligaRouter);
    app.use('/epl', eplRouter);
    app.use('/live', liveRouter);
    app.use('/euro', euroRouter);
    app.use('/c1', c1Router);
    app.use('/worldsoccer',worldRouter);
    app.use('/',siteRouter);
    
}

module.exports = route;

