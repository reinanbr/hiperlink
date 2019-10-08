app = angular.module('app', [])
app.controller('login', ($scope) => {
    $scope.title = 'LinkFisíca'
})
vidi = angular.module('vidi', [])
vidi.controller('video', ($scope) => {
    $scope.title = 'videos'
})

//jquery
$(function() {
    //chat
    var user = {}
    var socket = io()

    text = ''

    aluno = [$('#aluno').text(), $('#escola').text(), $('#email').text()]

    $('#questions').click(function() {
            window.open('questions')
        })
        /***
        $('#video').click(function(){
        		window.open('video')
        	})
        ***/
    $('#chatt').click(function() {
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
            text: 'Um objeto de massa 500 g possui energia cinética de 2 kJ. Determine a velocidade desse objeto em m/s.Dado: Adote √10 = 3,16',
            opt: {
                a: '63,2',
                b: '50,4',
                c: '62,8',
                d: '36,6',
                e: '31,6'
            },
            img: '/img/q1.png',
            video: {
                title: 'energia cinética',
                link: 'https://www.youtube.com/embed/Ht-a2_yNuec',
                type: 'curiosidades'
            },
            formula: {
                title: 'energia cinética',
                link: '/img/f0.png',
                type: 'energia'
            },
            simulador: {
                title: 'simulador 1',
                link: 'https://www.google.com/',
                type: 'energia'
            },
        },
        {
            text: 'O bate-estacas é um dispositivo muito utilizado na fase inicial de uma construção. Ele é responsável pela colocação das estacas, na maioria das vezes de concreto, que fazem parte da fundação de um prédio, por exemplo. O funcionamento dele é relativamente simples: um motor suspende, através de um cabo de aço, um enorme peso (martelo), que é abandonado de uma altura, por exemplo, de 10m, e que acaba atingindo a estaca de concreto que se encontra logo abaixo. O processo de suspensão e abandono do peso sobre a estaca continua até a estaca estar na posição desejada. É CORRETO afirmar que o funcionamento do bate-estacas é baseado no princípio de',
            opt: {
                a: 'transformação da energia mecânica do martelo em energia térmica da estaca.',
                b: 'conservação da quantidade de movimento do martelo.',
                c: 'transformação da energia potencial gravitacional em trabalho para empurrar a estaca.',
                d: 'colisões do tipo elástico entre o martelo e a estaca.',
                e: 'transformação da energia elétrica do motor em energia potencial elástica do martelo.',
            },
            img: '/img/q2.png',
            video: {
                title: 'conservação de energia',
                link: "https://www.youtube.com/embed/Pu2NO8Mlfhg",
                type: 'energia',
            },
            formula: {
                title: 'conservação de energia',
                link: '/img/f1.png',
                type: 'energia',
            },
            simulador: {
                title: 'simulador 1',
                link: 'https://www.google.com/',
                type: 'energia'
            },
        },

        {
            text: 'estudando a pressão em fluidos, vê-se que a variação dea pressão nas aguas do mar é proporcional a profundidade h. No entando, a variação da pressão atmosférica quando se sobe montanhas elevadas, não é exatamente proporcional à altura. Isto se deve ao fato:',
            opt: {
                a: "A aceleraçăo da gravidade varia mais no ar do que na agua",
                b: "A aceleraçăo da gravidade varia mais no água do que no ar",
                c: "o ar possui baixa densidade",
                d: "o ar possui baixa viscosidade",
                e: "o ar é compressivel",
            },
            img: '/img/q5.png',
        },
        {
            text: "Um garoto toma refrigerante usando um canudinho. Podemos afirmar corretamente que ao puxar o ar pela boca, o menino:",
            opt: {
                a: "reduz a pressăo dentro do canudinho",
                b: "aumenta a pressăo fora do canudinho",
                c: "aumenta a pressăo dentro do canudinho",
                d: "reduz a pressăo fora do canudinho",
                e: "reduz a acelaraçăo da gravidade dentro do canudinho"
            },
            img: '/img/q6.png',
        },
        {
            text: 'Uma particula, inicialmente na posição A, dentro de um recipiente com àgua, é levada até o ponto B, e em seguida, logo até o ponto C, (Ver figura). A distância, vertical AB é igual a 4cm, e a distância vertical BC é 3cm. Considerando a aceleração da gravidade como g = 10m/s² e a densidade da àgua p = 1000kg/m²,  o módulo da diferença de pressão entre as suas posições iniciais e finais é, em N/m², igual a :',
            opt: {
                a: '100',
                b: 200,
                c: 300,
                d: 400,
                e: 500,
            },
            img: '/img/q7.png',
        },
        {
            text: 'UFRN) O princípio de Pascal diz que qualquer aumento de pressão num fluido se transmite integralmente a todo o fluido e às paredes do recipiente que o contém. Uma experiência simples pode ser realizada, até mesmo em casa, para verificar esse princípio e a influência da pressão atmosférica sobre fluidos. São feitos três furos, todos do mesmo diâmetro, na vertical, na metade superior de uma garrafa plástica de refrigerante vazia, com um deles a meia distância dos outros dois. A seguir, enche-se a garrafa com água, até um determinado nível acima do furo superior; tampa-se a garrafa, vedando-se totalmente o gargalo, e coloca-se a mesma em pé, sobre uma superfície horizontal. Abaixo, estão ilustradas quatro situações para representar como ocorreria o escoamento inicial da água através dos furos, após efetuarem-se todos esses procedimentos. Assinale a opção correspondente ao que ocorrerá na prática.',
            opt: {
                a: 'a',
                b: 'b',
                c: 'c',
                d: 'd',
            },
            img: '/img/q8.png',
        },
        {
            text: 'Um corpo sólido de massa de 500g e volume de 625 centimétros cubicos, encontra-se em repouso no interior de um liquido em equilibrio, conforme a figura. relativamente a esta situação, marque a alternativa incorreta:',
            opt: {
                a: 'a densidade do liguido é igual a 0,800g por centimetro cubico',
                b: 'se por um procedimento externo, o bolume do corpo aumentar, ele afundará, e exercerá força sobre o fundo do recipiente',
                c: 'atua sobre o corpo, de modo verticalmente para cima, uma força de módulo igual ao peso do volume de liguido deslocado',
                d: 'o corpo desloca um volume de liguido equivalente a massa de 500g',
                e: 'o volume de liguido que o corpo desloca, é igual ao seu proprio volume',
            },
            img: '/img/q9.png'
        },
        {
            text: 'um corpo está submerso em equilibrio no interior de um liguido homogêneo de densidade de 0,7g por centimetro cubico. Se for colocado num recipiente que contenha àgua de densidade de 1g por centimetro cubico, ele:',
            opt: {
                a: 'não flutuarà',
                b: 'ficarà parcialmente submerso',
                c: 'afundarà com velocidade constante',
                d: 'afundarà com velocidade variavel',
            },
            img: '/img/q10.png',
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
    <p>_____________________r><br>
    </div>`
    	$('#videoAula').append(div)
    	console.debug(i);
    }
    ***/

    //function question
    questu = (i) => {
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
        return (`<div id='${quest[i].formula.type}'><p>${quest[i].formula.title}</p>
<img width="500" height="440"
 src="${quest[i].formula.link}">
</img>
<p>_____________________</p>
<br><br>
</div>`)
    }

    //function simulador
    simuladur = (i) => {
        return (`<div id='${quest[i].simulador.type}'><p>${quest[i].simulador[i].title}</p>
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
    $("#vamos").submit(function(event) {
        event.preventDefault();
        aluno.nome = $('#nomme').val()
        aluno.sala = $('#salla').val()
        aluno.email = $('#emmail').val()
        $('#painel').fadeIn()
        $('#login').fadeOut()
    });

    n = 0

    function* add(i) {
        while (true) {
            yield i = i + 1
        }
    }

    if (n <= 0) {
        $('#ante').fadeOut()
    }

    //radios
    ida = 0
    idr = 0
    opt = []
        //proximo
    $('#proxim').click(function() {
        //pegar radio
        $('#tq').text('questão ' + n)
        console.log(n)
        inm = 'input[name="q' + n + '"]:checked'
        console.log(inm)
        idr = document.querySelector(inm).id
        console.log(idr)
        opt[n] = $('#' + idr).val()
        console.log(opt)

        $('#painell').html('')
        n = add(n).next().value

        //video aparecer no topo
        $('#video_0').click(function() {
            $('#painell').html(videu(n))
            console.log('button on video')
        })

        //formula aparecer no topo
        $('#formula_0').click(function() {
            $('#painell').html(formulu(n))
            console.log('button on formu')
        })

        //simulador aparecer no topo
        $('#simulador_0').click(function() {
            $('#painell').html(simuladur(n))
            console.log('button on simula')
        })

        //questao aparecer 
        $('#questao').html(questu(n))
        t = 23

        if (n > 0) {
            $('#ante').fadeIn()
        }
        if (n >= quest.length - 1) {
            $('#proxim').fadeOut()
        }

        $('#qe' + opt[n] + n).click()
        console.log($('#' + ida).val())
    })

    //anterior
    $('#ante').click(function() {
        //pegar radio
        $('#tq').text('questão ' + n)
        console.log(n)
        inm = 'input[name="q' + n + '"]:checked'
        console.log(inm)
        ida = document.querySelector(inm).id
            //console.log(idr)
        opt[n] = $('#' + ida).val()
        console.log(opt)


        $('#painell').html('')
        n = n - 1
            //video aparecer no topo
        $('#video_0').click(function() {
            $('#painell').html(videu(n))
            console.log('button on video')
        })
        console.log(idr)

        //formula aparecer no topo
        $('#formula_0').click(function() {
            $('#painell').html(formulu(n))
            console.log('button on formu')
        })

        //simulador aparecer no topo
        $('#simulador_0').click(function() {
            $('#painell').html(simuladur(n))
            console.log('button on simula')
        })

        //questao aparecer 
        $('#questao').html(questu(n))
        t = 23

        if (n <= 0) {
            $("#ante").fadeOut()
        }
        if (n <= quest.length - 1) {
            $('#proxim').fadeIn()
        }
        $('#qe' + opt[n] + n).click()
        console.log($('#' + idr).val())
    })



    //video aparecer no topo
    $('#video_0').click(function() {
        $('#painell').html(videu(n))
        console.log('button on video')
    })

    //formula aparecer no topo
    $('#formula_0').click(function() {
        $('#painell').html(formulu(n))
        console.log('button on formu')
    })

    //simulador aparecer no topo
    $('#simulador_0').click(function() {
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
    $('#envResp').click(function() {
        console.log('1' + opt)
        opt[n] = $('[name="q' + n + '"]:checked').val()
        console.log('2' + opt)
        if (confirm('tem certeza que permite enviar as respostas para o seu professor?')) {
            let nn = 0
            aluno.opt = opt.map((o) => {
                nn += 1
                return (nn + '-' + o)
            })
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
            if (event) {
                $("#chat").fadeIn()
                $("#msg").val('')
                $("#env").attr("onclick", "env()")
                $("#uel").text('seje bem vindo')
                $("#env").text(" enviar")
                $("#msg").attr("placeholder", "digite aqui...")
            } else {
                alert('nome de usuario já esrá em uso no chat')
            }
        })
    }

    socket.on('connect', () => {
        $('#oon').html('o servidor está online')
        $("#on").text("o servidor está online.")
    })

    $("#msg").keypress(function(e) {
        if (e.which == 13) {
            $("button").click()
        }
    })

    env = () => {
        user.msg = $("#msg").val()
        socket.emit("chat", user)
        $("#msg").val('')
        $("#chat")
            .animate({
                scrollTop: $("#chat")[0]
                    .scrollHeight
            }, 100);
    }

    socket.on("users", (user) => {
        $("#chat").append(`<p><small>${user.name} entrou na sala</small></p>`)
    })

    socket.on("user exit", (user) => {
        $("#chat").append(`<p><small>${user.name} saiu da sala </small></p>`)
    })

    socket.on("chat", (user) => {
        $("#chat").append(`<p>${user.msgEnv}</p>`)
        $("#chat")
            .animate({
                scrollTop: $("#chat")[0]
                    .scrollHeight
            }, 100);

    })

    socket.on("disconnect", () => {
        $("#on").text("o servidor está fora do ar .")
        $("#inp").text('vc foi desconectado')
        $('#oon').html('o servidor está fora do ar')
    })

})