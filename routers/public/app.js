
app = angular.module('app', [])
app.controller('login', ($scope) =>{
	$scope.title = 'LinkFisíca'
})
vidi = angular.module('vidi', [])
vidi.controller('video', ($scope) =>{
	$scope.title = 'videos'
})

//jquery
$(function(){
//chat
var user = {}
	var socket = io()

text=''

aluno = [$('#aluno').text(), $('#escola').text(), $('#email').text()]

$('#questions').click(function(){
		window.open('questions')
	})
/***
$('#video').click(function(){
		window.open('video')
	})
***/
$('#chatt').click(function(){
	window.open('chat')
})



//questions
/***
questions = [{
	text:'01 - qual é o sentido da vida?',
	img:'/img/quest01.jpg',
	options:['<p>love</p> ', '<p iddead'],
	res:'love'
}]
***/


/*
$('#test').submit(function(e){
	e.preventDefault()
	
	res1 = document.querySelector('input[name="q1"]:checked').value
	console.log(res1)
	
})
*/
//qestion 1
$("[name=q1]").click(function() {
    $("#res1").attr('class', "green");
});


//qestion2
$('[name=q2]').click(function() {
	$('#res2').attr('class', 'green')
})
/***
for(n in questions){
	let div = `<div class='quest' ><p>${questions[n].text}</p>
	<img height='210' width='320' src='${questions[n].img}'>
	<br>${questions[n].options}</div>`
	$('#question').append(div)
}
***/

//questoes
quest = [{
	text:'Um objeto de massa 500 g possui energia cinética de 2 kJ. Determine a velocidade desse objeto em m/s.Dado: Adote √10 = 3,16',
	opt:{
		a:'63,2',
		b:'50,4',
		c:'62,8',
		d:'36,6',
		e:'31,6'
	},
	img:'/img/q1.png',
	video: {title:'energia cinética',
			link:'https://www.youtube.com/embed/Ht-a2_yNuec',
			type:'curiosidades'
	},
	formula:{ 
		title:'energia cinética',
		link:'/img/f0.png',
		type:'energia'},
	simulador:{
		title:'simulador 1',
		link:'https://www.google.com/',
		type:'energia'
	},
},
{
	text:'O bate-estacas é um dispositivo muito utilizado na fase inicial de uma construção. Ele é responsável pela colocação das estacas, na maioria das vezes de concreto, que fazem parte da fundação de um prédio, por exemplo. O funcionamento dele é relativamente simples: um motor suspende, através de um cabo de aço, um enorme peso (martelo), que é abandonado de uma altura, por exemplo, de 10m, e que acaba atingindo a estaca de concreto que se encontra logo abaixo. O processo de suspensão e abandono do peso sobre a estaca continua até a estaca estar na posição desejada. É CORRETO afirmar que o funcionamento do bate-estacas é baseado no princípio de',
	opt:{
		a:'transformação da energia mecânica do martelo em energia térmica da estaca.',
		b:'conservação da quantidade de movimento do martelo.',
		c:'transformação da energia potencial gravitacional em trabalho para empurrar a estaca.',
		d: 'colisões do tipo elástico entre o martelo e a estaca.',
		e:'transformação da energia elétrica do motor em energia potencial elástica do martelo.',
	},
	img:'/img/q2.png',
	video:{
		title:'conservação de energia',
		link:"https://www.youtube.com/embed/Pu2NO8Mlfhg",
		type:'energia',
	},
	formula:{
		title:'conservação de energia',
		link:'/img/f1.png',
		type:'energia',
	},
	simulador:{
		title:'simulador 1',
		link:'https://www.google.com/',
		type:'energia'
	},
}
]


/***
for(i in videos){
	let div= `<div id='${videos[i].type}'><p>${videos[i].title}</p>
<iframe width="310" height="230"
 src=ideos[i].link}" frameborder="0" allow="accelerometer; 
autoplay; encrypted-media; gyroscope; 
picture-in-picture" allowfullscreen>
</iframe>
<p>_____________________</p>
<br><br>
</div>`
	$('#videoAula').append(div)
	console.debug(i);
}
***/

//function question
questu= (i) => {
	return (`<p>${quest[i].text}</p>
<br/>
<img class='q' src='${quest[i].img}'>
<br/>
<p><input value='A' id='qeA${i}'  name='q${i}' type='radio' >A. ${quest[i].opt.a}</p>
<p><input value='B' id='qeB${i}' name='q${i}' type='radio' >B. ${quest[i].opt.b}</p>
<p><input value='C' id='qeC${i}'  name='q${i}' type='radio' >C. ${quest[i].opt.c}</p>
<p><input value='D' id='qeD${i}'  name='q${i}' type='radio' >D. ${quest[i].opt.d}</p>
<br>`)
}

//function video
videu = (i) => {
	return (`<div id='${quest[i].video.type}'><p>${quest[i].video.title}</p>
<iframe width="300" height="190"
 src="${quest[i].video.link}" frameborder="0" allow="accelerometer; 
autoplay; encrypted-media; gyroscope; 
picture-in-picture" allowfullscreen>
</iframe>
<p>_____________________</p>
<br><br>
</div>`)
}

//function formula
formulu = (i) => {
	return(`<div id='${quest[i].formula.type}'><p>${quest[i].formula.title}</p>
<img width="500" height="440"
 src="${quest[i].formula.link}">
</img>
<p>_____________________</p>
<br><br>
</div>`)
}

//function simulador
simuladur = (i) => {
	return(`<div id='${quest[i].simulador.type}'><p>${quest[i].simulador[i].title}</p>
<iframe width="320" height="140"
 src="${quest[i].simulador.link}" frameborder="0" allow="accelerometer; 
autoplay; encrypted-media; gyroscope; 
picture-in-picture" allowfullscreen>
</iframe>
<p>_____________________</p>
<br><br>
</div>`)
}

//login questions
aluno = {}
$('#painel').fadeOut()
$("#vamos").submit(function(event){
   event.preventDefault();
	aluno.nome = $('#nomme').val()
	aluno.sala = $('#salla').val()
	aluno.email = $('#emmail').val() 
	$('#painel').fadeIn()
	$('#login').fadeOut()
});

n = 0
function* add(i){
	while(true){
		yield i=i+1
	}
}

if(n<=0){
	$('#ante').fadeOut()
}

//radios
ida = 0
idr = 0
opt = []
//proximo
$('#proxim').click(function(){
	//pegar radio
	
		console.log(n)
		inm = 'input[name="q'+n+'"]:checked'
		console.log(inm)
		idr = document.querySelector(inm).id
		console.log(idr)
		opt[n] = (n+1)+'-'+$('#'+idr).val()
		console.log(opt)
	
	
	$('#painell').html('')
	n = add(n).next().value
	
	//video aparecer no topo
	$('#video_0').click(function(){
		$('#painell').html(videu(n))
		console.log('button on video')
	})

	//formula aparecer no topo
	$('#formula_0').click(function(){
		$('#painell').html(formulu(n))
		console.log('button on formu')
	})

	//simulador aparecer no topo
	$('#simulador_0').click(function(){
		$('#painell').html(simuladur(n))
		console.log('button on simula')
	})

	//questao aparecer 
	$('#questao').html(questu(n))
	t =23
	
	if(n>0){
            $('#ante').fadeIn()
        }
        if(n>=quest.length-1){
            $('#proxim').fadeOut()
        }
	
	$('#'+ida).click()
    console.log($('#'+ida).val())
})

//anterior
$('#ante').click(function(){
	//pegar radio
	
		console.log(n)
		inm = 'input[name="q'+n+'"]:checked'
		console.log(inm)
		ida = document.querySelector(inm).id
		console.log(idr)
		opt[n] = (n+1)+'-'+$('#'+ida).val()
		console.log(opt)
	
	
	
	$('#painell').html('')
	n = n - 1
	//video aparecer no topo
	$('#video_0').click(function(){
		$('#painell').html(videu(n))
		console.log('button on video')
	})
	console.log(idr)
	
	//formula aparecer no topo
	$('#formula_0').click(function(){
		$('#painell').html(formulu(n))
		console.log('button on formu')
	})

	//simulador aparecer no topo
	$('#simulador_0').click(function(){
		$('#painell').html(simuladur(n))
		console.log('button on simula')
	})

	//questao aparecer 
	$('#questao').html(questu(n))
	t =23
	
	if(n<=0){
            $("#ante").fadeOut()
        }
        if(n<=quest.length-1){
            $('#proxim').fadeIn()
        }
    $('#'+idr).click()
    console.log($('#'+idr).val())
})



//video aparecer no topo
$('#video_0').click(function(){
	$('#painell').html(videu(n))
	console.log('button on video')
})

//formula aparecer no topo
$('#formula_0').click(function(){
	$('#painell').html(formulu(n))
	console.log('button on formu')
})

//simulador aparecer no topo
$('#simulador_0').click(function(){
	$('#painell').html(simuladur(n))
	console.log('button on simula')
})

//questao aparecer 
$('#questao').html(questu(n))
/*
$('[name="q0"]').click(function(){
	$('#ale').fadeOut()
})
*/
//enviar
$('#envResp').click(function(){
	console.log('1'+opt)
	opt[n] = (n+1)+'-'+$('[name="q'+n+'"]:checked').val()
	console.log('2'+opt)
	if(confirm('tem certeza que permite enviar as respostas para o seu professor?')){
		aluno.opt = opt
		socket.emit('quest', aluno)
		setTimeout(alert('professor: recebir suas respostas. aguarde minha correção.'), 4000)
	}
})

//ocultar envio





	//chat configs
	socket.on("usersCount", (users) => {
		count = users.length
		$("#count").text(`usuarios online(${count})`)
	})
	
	$("#chat").hide()
	login = () => {
		user.name = $("#msg").val()
		socket.emit("user", user, (event) => {
			if(event) {
				$("#chat").fadeIn()
				$("#msg").val('')
				$("#env").attr("onclick", "env()")
				$("#uel").text('seje bem vindo')
				$("#env").text(" enviar")
				$("#msg").attr("placeholder", "digite aqui...")
			}
			else{
				alert('nome de usuario já esrá em uso no chat')
			}
		})
	}
			
	socket.on('connect', () => {
		$("#on").text("o servidor está online.")
	})
	
	$("#msg").keypress(function(e) {
		if(e.which == 13){
			$("button").click()
		}
	})
	
	env = () => {
		user.msg = $("#msg").val()
	    socket.emit("chat", user)
	    $("#msg").val('')
	    $("#chat")
        .animate({scrollTop: $("#chat")[0]
        .scrollHeight}, 100);
	}
	
	socket.on("users", (user) => {
		$("#chat").append(`<p><small>${user.name} entrou na sala</small></p>`)
	})
	
	socket.on("user exit", (user) =>  {
		$("#chat").append(`<p><small>${user.name} saiu da sala </small></p>`)
	})
	
	socket.on("chat", (user) => {
		$("#chat").append(`<p>${user.msgEnv}</p>`)
		   $("#chat")
        .animate({scrollTop: $("#chat")[0]
        .scrollHeight}, 100);
	
	})
	
	socket.on("disconnect", () => {
		$("#on").text("o servidor está fora do ar .")
         $("#inp").text('vc foi desconectado')
	})
		
})


		

