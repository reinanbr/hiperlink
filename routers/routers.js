express = require('express')
path = require('path')
cookie = require('cookie-parser')

bp = require("body-parser")
app= express()
index = path.join(__dirname, '/public')

app.use( (req, res, next) => {
	console.log(req.rawHeaders)
	console.log(req)
	//console.log(res)
	next()
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
	res.render(index+'/index.ejs')
})

app.post('/login', (req, res) => {
		perfil = req.body
		perfil.title = 'LinkFisíca'
		console.log(perfil)
        res.render(index+'/perfil.ejs', perfil)
})


//videos
videos = [{title:'o gato de Schroodinger',
			link:'https://www.youtube.com/embed/pKEq8d_1pn4'
},]
	
app.get('/video', (req, res) => {
	perfil = req.body
	perfil.videos = videos
	console.log(perfil)
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

	res.render(index+"/questions.ejs", questions)
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
