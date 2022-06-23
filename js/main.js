const infoNovedades = [
    {
        image: "./image/interes3.jpg",
        button: "NOTICIAS",
        info: "Guadalupe ya cuenta con un punto de atención por corresponsal.",
        color: "coral"
    },
    {
        image: "./image/interes2.jpg",
        button: "AGENDA",
        info: 'Premiación a ganadores concurso Eco-Superjunior "La hora del planeta"',
        color: "rgb(2, 88, 32)"
    },
    {
        image: "./image/interes.jpg",
        button: "BLOG",
        info: "Nuevos Corresponsales en Palmar, Olival y valle de San José.",
        color: "rgb(249, 126, 3)"
    },
    {
        image: "./image/interes2.jpg",
        button: "AGENDA",
        info: 'Premiación a ganadores concurso Eco-Superjunior "La hora del planeta"',
        color: "rgb(2, 88, 32)"
    },
    {
        image: "./image/interes.jpg",
        button: "BLOG",
        info: "Nuevos Corresponsales en Palmar, Olival y valle de San José.",
        color: "rgb(249, 126, 3)"
    },
    {
        image: "./image/interes3.jpg",
        button: "NOTICIAS",
        info: "Guadalupe ya cuenta con un punto de atención por corresponsal.",
        color: "coral"
    },
    {
        image: "./image/interes.jpg",
        button: "BLOG",
        info: "Nuevos Corresponsales en Palmar, Olival y valle de San José.",
        color: "rgb(249, 126, 3)"
    },
    {
        image: "./image/interes3.jpg",
        button: "NOTICIAS",
        info: "Guadalupe ya cuenta con un punto de atención por corresponsal.",
        color: "coral"
    },
    {
        image: "./image/interes2.jpg",
        button: "AGENDA",
        info: 'Premiación a ganadores concurso Eco-Superjunior "La hora del planeta"',
        color: "rgb(2, 88, 32)"
    }
]

const arrayLogo = [
    {
        image: "./image/login1.png",
        info: "Portal Transaccional"
    },
    {
        image: "./image/login2.png",
        info: "Sucursal Virtual"
    },
    {
        image: "./image/login3.png",
        info: "Credito en Linea"
    },
    {
        image: "./image/login4.png",
        info: "Simulador de Ahorro"
    },
    {
        image: "./image/login5.png",
        info: "Simulador de Crédito"
    },
    {
        image: "./image/login6.png",
        info: "Red de Aliados"
    },
    {
        image: "./image/login7.png",
        info: "¿Cómo Asociarme?"
    },
    {
        image: "./image/login8.png",
        info: "Formulario PQRSF"
    }


]

$(function () {
    //CardChat--------------------------------------
    $('.cardHover').hide();
    $('.messengerFixed').click(function(e) {
        e.stopPropagation();
        $('.cardHover').fadeIn();
    })
    $('html').click(function() {
    $('.cardHover').hide('slow');
    })
    //------------------------------------------

    //sliceServicios----------------------------------------------------------------
    $('.iconosServicios .logoAhorro').css('color', 'rgb(218, 223, 223)')
    $('.iconosServicios .logoAhorro:first').css('color', 'azure');

    $('.iconosServicios .logoAhorro').on('click', function() {
        $('.iconosServicios .logoAhorro').css('color', 'rgb(218, 223, 223)')
        $('.iconosServicios .logoAhorro:nth-child('+($(this).index() + 1) +')').css('color', 'azure');
        let data = $('.iconosServicios .logoAhorro:nth-child('+($(this).index() + 1) +')').text();
        $('.sliceServicios .green').text(data);
    })
    //------------------------------------------------------------------------------

    //class='containerLogo-flex'-------------------------------------------
    for (let i = 0; i < arrayLogo.length; i++) {
        $('.containerLogo-flex').append('<div class="logo"></div>') 
    }
    $('.logo').each(function(index, data) {
        $(data).append(`<img src=${arrayLogo[index].image} alt="logo" />
        <p>${arrayLogo[index].info}</p>`)
    })

    //-------------------------------------------------------------------

    //Novedades --------------------------------------------------------------------
    for (let i = 0; i < (infoNovedades.length / 3); i++) {
        $('.containerNovedades .positionNovedades').append("<div class='novedades'></div>");

    }
    let lengthNovedades = $('.novedades').length;

    for (let i = 0; i < lengthNovedades; i++) {
        $('.novedades').append(`<div class="interes"></div>`)

    }
    $('.interes').each(function (indexInArray, valueOfElement) {
        $(valueOfElement).append(` <img src=${infoNovedades[indexInArray].image} alt="logoNovedad" />
        <div class="date">
          <span>12 ENERO, 2021</span>
          <button style="background-color:${infoNovedades[indexInArray].color}"
          >${infoNovedades[indexInArray].button}</button>
        </div>
        <p>${infoNovedades[indexInArray].info}</p>`)

    });

    $('.novedades').hide()
    $('.novedades:first').show()

    for (let i = 0; i < lengthNovedades; i++) {
        $('.spanClickButton').append('<span class="click"></span>')

    }
    $('.click').css('background', 'black');
    $('.click:first').css('background', 'white');

    $('.click').on('click', function () {
        $('.novedades').hide();
        $('.novedades:nth-child(' + ($(this).index() + 1) + ')').fadeIn();
        $('.click').css('background', 'black');
        $('.click:nth-child(' + ($(this).index() + 1) + ')').css('background', 'white');

    })
    //----------------------------------------------------------------------------

    //ahorros------------------------------------------------------------------
    var length = $('.containerSlice .imageSlice').length;
    $('.containerSlice .imageSlice').hide();
    $('.containerSlice .imageSlice:first').show();


    for (let i = 0; i < length; i++) {
        $('.container-inputSlice').append('<span class="inputSlice"></span>')
    }

    $('.container-inputSlice .inputSlice').css('background-color', 'black')
    $('.container-inputSlice .inputSlice:first').css('background-color', 'white')

    $('.container-inputSlice .inputSlice').on('click', function () {
        $('.containerSlice .imageSlice').hide();
        $('.containerSlice .imageSlice:nth-child(' + ($(this).index() + 1) + ')').fadeIn();
        $('.container-inputSlice .inputSlice').css('background-color', 'black')
        $('.container-inputSlice .inputSlice:nth-child(' + ($(this).index() + 1) + ')').css('background-color', 'white')
    })
    //---------------------------------------------------------------------------

})