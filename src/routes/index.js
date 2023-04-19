
const championleagueRouter = require('./championleague');

const coursesRouter = require('./course');

const siteRouter = require('./home');

const worldRouter = require('./world');

const eplRouter = require('./epl');

const euroRouter = require('./euro');

const liveRouter = require('./live');

const laligaRouter = require('./laliga');

const adminRouter= require('./admin');

function route(app){
    app.use('/admin',adminRouter);
    app.use('/laliga',laligaRouter);
    app.use('/epl', eplRouter);
    app.use('/live', liveRouter);
    app.use('/euro', euroRouter);
    app.use('/c1', championleagueRouter);
    app.use('/courses',coursesRouter);
    app.use('/worldsoccer',worldRouter);
    app.use('/',siteRouter);
    
}

module.exports = route;

