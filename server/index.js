const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const massive = require('massive')
require('dotenv').config()

const articleCtrl = require('./articleCtrl')
const authoCtrl = require('./authoCtrl')
const categoryCtrl = require('./categoryCtrl')

const app = express()
const path = require('path')
// const proxy = require('http-proxy-middleware')

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
}).catch(err =>
    console.log(err))

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        saveUninitialized: false,
        resave: false
    })
)

app.use(bodyParser.json())


// app.use(proxy('/auth/callback', { target: 'http://localhost:3001/' }))
// app.use(proxy('/api', { target: 'http://localhost:3001/' }))

//Authorizing the author
app.get("/auth/callback", authoCtrl.auth)

app.get("/api/currentUser", (req, res) => {
    res.send(req.session.user);
});
app.get("/api/logout", (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
});

app.get('/api/get-ps4/', categoryCtrl.getPs4)
app.get('/api/get-ps3/', categoryCtrl.getPs3)
app.get('/api/get-vita/', categoryCtrl.getPsVita)
app.get('/api/get-psp/', categoryCtrl.getPsP)
app.get('/api/get-xOne/', categoryCtrl.getxOne)
app.get('/api/get-360/', categoryCtrl.get360)
app.get('/api/get-switch/', categoryCtrl.getSwitch)
app.get('/api/get-ios/', categoryCtrl.getiOS)
app.get('./api/get-interviews/', categoryCtrl.getInterviews)

app.get('/api/get-articles/', articleCtrl.getArticles)
app.get('/api/get-articles-by-id/:id', articleCtrl.getById)
app.post("/api/create-article", articleCtrl.createArticle)
app.put('/api/edit-article/', articleCtrl.editArticle)

app.post('/api/search-item', articleCtrl.searchItem)

app.post('/api/post-comment/', articleCtrl.postComment)



const PORT = 3001

app.listen(PORT, () => {
    console.log(`Nothing like a good ${PORT} wine`)
})
