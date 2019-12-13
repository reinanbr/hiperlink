express = require('express')
path = require('path')
cookie = require('cookie-parser')
sys = require('toolsys')
sys.log(`start system in ${sys.memFree()}% process free`)
bp = require("body-parser")
app = express()
index = path.join(__dirname, '/public')

app.use(async(req, res, next) => {
    let st = Date.now()
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
        //sys.log(`ip: ${ip}`)
        //sys.log('logs of get <<<'+req.rawHeaders[9]+'>>>')

    await next()
    let ms = Date.now() - st
    sys.log(`${ip} ${req.method} ${req.url} ${ms}ms`)
        //console.log(res)

})

app.use(cookie())
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.engine('.ejs', require('ejs').__express);
app.set('public engine', 'ejs')

app.use(express.static(index))

//app.use(index, (req, res, next) => {...})

perfil = {
    title: 'LinkFisíca'
}

app.get('/', (req, res) => {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    sys.logVirtual(`o ip ${ip} abriu a pagina de login`)

    sys.log('logs user: ' + req.rawHeaders)

    res.render(index + '/index.ejs')
})

app.post('/login', (req, res) => {
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    perfil = req.body
    perfil.title = 'LinkFisíca'
        //console.log(req)
    sys.logVirtual('=+=+=+=+=Login feito=+=+=+=+=')
    sys.logVirtual(`ip: ${ip}`)
    sys.logVirtual('email: ' + perfil.email)
    sys.logVirtual('senha: ' + perfil.pass)
    res.render(index + '/perfil.ejs', perfil)
    sys.logVirtual('=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=')
})


//videos
videos = [{
    title: 'o gato de Schroodinger',
    link: 'https://www.youtube.com/embed/pKEq8d_1pn4'
}, ]


/* rotas */

//rota dos video
app.get('/video', (req, res) => {
    perfil = req.body
    perfil.videos = videos
    sys.log(perfil)
    res.render(index + '/video.ejs', perfil)
})

//rotas das questoes
app.get('/questions', (req, res) => {
    /*dt = [req.params.test]
    dt = [dt]
    console.log(dt)*/
    res.render(index + "/questions.ejs")
})

//rota do chat
app.get('/chat', (req, res) => {
    res.render(index + '/chat.ejs')
})

//received
app.get('/received/:res', (req, res) => {
    res = req.params.res
    console.log(res)
})

//rota do fb
app.get('/fb', (req, res) => {
    res.render(index + '/face.ejs', perfil)
})

//rota do perfil
//rota do fb
app.get('/perfil', (req, res) => {
    res.render(index + '/perfil.ejs', perfil)
})

module.exports = app