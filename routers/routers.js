express = require('express')
path = require('path')
cookie = require('cookie-parser')
sys = require('./sys')
sys.log(`start system in ${sys.memFree()}% process free`)
bp = require("body-parser")
app= express()
index = path.join(__dirname, '/public')

app.use( async(req, res, next) => {
	let st = Date.now()
	let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
	//sys.log(`ip: ${ip}`)
	//sys.log('logs of get <<<'+req.rawHeaders[9]+'>>>')
	
	await next()
	let ms  = Date.now() - st
	sys.log(`${ip} ${req.method} ${req.url} ${ms}ms`)
	//console.log(res)
	
})

app.use(cookie())
app.use(bp.json())
app.use(bp.urlencoded({extended:true}))

app.engine('.ejs', require('ejs').__express);
app.set('public engine', 'ejs')

app.use(express.static(index))

//app.use(index, (req, res, next) => {...})

perfil = {
	title:'LinkFisíca'
	}

app.get('/', (req, res) => {
	var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	sys.log(`o ip ${ip} abriu a pagina de login`)
	
	sys.log('logs user: '+req.rawHeaders)
	
	res.render(index+'/index.ejs')
})

app.post('/login', (req, res) => {
		let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

		perfil = req.body
		perfil.title = 'LinkFisíca'
		//console.log(req)
		sys.log('=+=+=+=+=Login feito=+=+=+=+=')
		sys.log(`ip: ${ip}`)
		sys.log('email: '+perfil.email)
		sys.log('senha: '+perfil.pass)
        res.render(index+'/perfil.ejs', perfil)
        sys.log('=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=')
})


//videos
videos = [{title:'o gato de Schroodinger',
			link:'https://www.youtube.com/embed/pKEq8d_1pn4'
},]
	
app.get('/video', (req, res) => {
	perfil = req.body
	perfil.videos = videos
	sys.log(perfil)
	res.render(index+'/video.ejs', perfil)
})


//questions
questions = [{
	text:'01 - qual é o sentido da vida?',
	img:'/img/quest01.jpg',
	options:['love','dead'],
	res:'love'
}]

app.get('/questions', (req, res) =>{
	/*dt = [req.params.test]
	dt = [dt]
	console.log(dt)*/
	res.render(index+"/questions.ejs")
})




//chat
app.get('/chat', (req, res) =>{
	res.render(index+'/chat.ejs')
})

//received
app.get('/received/:res', (req, res) => {
	res = req.params.res
	console.log(res)
})

app.get('/perfil', (req, res) => {
        res.render(index+'/perfil.ejs', perfil)
})

module.exports = app
