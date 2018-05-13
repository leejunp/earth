// var app = document.getElementById('app');
//
// var typewriter = new Typewriter(app, {
// });
//
// typewriter.typeString('follow the white rabbit...')
//     .pauseFor(2500)
//     .deleteAll()
//     .typeString('red or blue pill...')
//     .pauseFor(2500)
//     .deleteChars(7)
//     .typeString('red')
//     .start();

setTimeout(function(){
  $('#myButton').fadeIn(600);
  $('#name').fadeIn(600);
},1500);

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
});

var typewritertwo = new Typewritertwo(apptwo, {
});

typewriter.typeString('Hello, what is your name?')
          .start();


function answer(){

  typewriter.deleteAll()
      .typeString($('#name').val()+ ' you are trapped in here. What will you do?')
      .start();

      $('#myButton').fadeOut(600);
      $('#name').fadeOut(600);

      setTimeout(function(){
        $('.options').fadeIn(600);
      },4000);

      setTimeout(function(){
        $('.optionstwo').fadeIn(600);
      },4400);
}

// Try

function answertwo(){
  $('.options').fadeOut(600);
  $('.optionstwo').fadeOut(600);
  $('.sleepone').fadeOut(600);

  typewriter.deleteAll()
            .typeString('There is no escape.')
            .pauseFor(800)
            .deleteAll()
            .typeString('You are trapped in earth so you will explode.')
            .start();

  setTimeout(function(){
    $('.optionsthree').fadeIn(600);
  },7900);

  setTimeout(function(){
    $('.optionsfour').fadeIn(600);
  },8300);
}

function answerfour(){
  $('.optionsthree').fadeOut(600);
  $('.optionsfour').fadeOut(600);

  typewriter.deleteAll()
            .typeString('What you are doing is futile.')
            .pauseFor(800)
            .deleteAll()
            .typeString('Just accept it.')
            .start();

  setTimeout(function(){
    $('.optionsfive').fadeIn(600);
  },7500);

  setTimeout(function(){
    $('.optionssix').fadeIn(600);
  },7900);
}

function answersix(){
  $('.optionsfive').fadeOut(600);
  $('.optionssix').fadeOut(600);

  typewriter.deleteAll()
            .typeString('This is getting tiring.')
            .pauseFor(800)
            .deleteAll()
            .typeString('I promise it is much easier to simply accept it.')
            .start();

  setTimeout(function(){
    $('.optionsseven').fadeIn(600);
  },6800);

  setTimeout(function(){
    $('.optionseight').fadeIn(600);
  },7200);
}

function answereight(){
  $('.optionsseven').fadeOut(600);
  $('.optionseight').fadeOut(600);

  typewriter.deleteAll()
            .typeString('Stop it.')
            .start();

  setTimeout(function(){
    $('.optionsnine').fadeIn(600);
  },3000);

  setTimeout(function(){
    $('.optionsten').fadeIn(600);
  },3400);
}

function answerten(){
  $('.optionsnine').fadeOut(600);
  $('.optionsten').fadeOut(600);

  $('#apptwo').show();
  $('#app').hide();

  typewriter.deleteAll()
            .start();

  typewritertwo.typeString('You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode. You are trapped in earth so you will explode.')
            .start();





  // setTimeout(function(){
  //   $('.final').fadeIn(300);
  // },3000);
  //
  // setTimeout(function(){
  //   $('.final').fadeOut(300);
  // },8000);
  //
  setTimeout(function(){
    $('.accepttwo').fadeIn(600);
  },9000);
}

// Accept

function answerthree(){
  $('.options').fadeOut(600);
  $('.optionstwo').fadeOut(600);
  $('.optionsthree').fadeOut(600);
  $('.optionsfour').fadeOut(600);
  $('.optionsfive').fadeOut(600);
  $('.optionssix').fadeOut(600);
  $('.optionsseven').fadeOut(600);
  $('.optionseight').fadeOut(600);
  $('.optionsnine').fadeOut(600);
  $('.optionsten').fadeOut(600);


  typewriter.deleteAll()
            .typeString('Good. Now, get comfy '+$('#name').val()+' you will be in here a while.')
            .start();

  setTimeout(function(){
    $('.sleepone').fadeIn(600);
  },6400);

  setTimeout(function(){
    $('.options').fadeIn(600);
  },6000);

}

function sleepone(){
  $('.sleepone').fadeOut(600);
  $('.options').fadeOut(600);

  typewriter.deleteAll()
            .start();


  $('.sleep').fadeIn(600);

  setTimeout(function(){
    $('.wakeone').fadeIn(600);
  },3000);
}

function wakeone(){
  $('.sleep').fadeOut(600);
  $('.wakeone').fadeOut(600);

  typewriter.typeString('Good morning '+$('#name').val()+'.')
            .start();

  setTimeout(function(){
    $('.sleepone').fadeIn(600);
  },2400);

  setTimeout(function(){
    $('.options').fadeIn(600);
  },2000);
}

function accepttwo(){
  $('#app').show();
  $('#apptwo').hide();
  $('.accepttwo').fadeOut(600);

  typewriter.deleteAll()
            .typeString('Go to sleep '+$('#name').val()+'.')
            .start();

  setTimeout(function(){
    $('.sleeptwo').fadeIn(600);
  },1000);
}

function sleeptwo(){
  $('.sleeptwo').fadeOut(600);

  typewriter.deleteAll()
            .start();


  $('.sleep').fadeIn(600);

  setTimeout(function(){
    $('.waketwo').fadeIn(600);
  },3000);
}

function waketwo(){
  $('.sleep').fadeOut(600);
  $('.waketwo').fadeOut(600);

  typewriter.typeString('Good morning '+$('#name').val()+'.')
            .start();

  setTimeout(function(){
    $('.sleeptwo').fadeIn(600);
  },2000);
}
