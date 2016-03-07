(function() {

  'use strict';



  /*=======================PAGE FADE IN==========================*/

    $(function() {
    $('.gallery1').removeClass('fade-out');
    $('.gallery2').removeClass('fade-out');
    $('.gallery3').removeClass('fade-out');
    $('.gallery4').removeClass('fade-out');
    $('.gallery5').removeClass('fade-out');
    $('.gallery6').removeClass('fade-out');
    $('.gallery7').removeClass('fade-out');
    $('.gallery8').removeClass('fade-out');
    $('.gallery9').removeClass('fade-out');
    });



/*=======================NAV==========================*/

  var naviExpand = document.getElementById('navi-expand');
  var naviCollapse = document.getElementById('navi-collapse');

  naviExpand.addEventListener('click', function () {
    naviCollapse.classList.toggle("expand");

  });




/*=======================LIGHTBOX==========================*/

  var lightbox = document.getElementsByClassName('lightbox');

  for(var i = 0; i < lightbox.length; i++) {
    lightbox[i].addEventListener('click', function (event) {
      event.preventDefault();
      var overlay = document.getElementById('overlay');
      var overlayPic = document.getElementById('overlay-pic');
      overlay.style.display="block";
      overlayPic.style.display="block";
      overlayPic.innerHTML = '<img src="' + this.getAttribute('href') + '">';
    });
  }

  var el = document.getElementById('overlay');

  if(el) {
    document.getElementById('overlay').addEventListener('click', function () {
      var overlay = document.getElementById('overlay');
      var overlayPic = document.getElementById('overlay-pic');
      overlay.style.display="none";
      overlayPic.style.display="none";
    });
  }




/*=======================CACA==========================*/

var bigBig = document.getElementsByClassName('bigbig');
var bigLeft = document.getElementById('big-left');
var bigRight= document.getElementById('big-right');
var bigPrevious = document.getElementById('big-previous');
var bigNext= document.getElementById('big-next');

if (bigLeft || bigRight) {
  var hehe1 = 0;
  var hehe2 = 1;
  bigLeft.innerHTML = bigBig[hehe1].innerHTML;
  bigRight.innerHTML = bigBig[hehe2].innerHTML;


  bigNext.addEventListener('click', function() {
    if (hehe2 > bigBig.length-2) {
      hehe1 = 0;
      hehe2 = 1;
      bigLeft.innerHTML = bigBig[bigBig.length-1].innerHTML;
      bigRight.innerHTML = bigBig[0].innerHTML;
      hehe1 = -1;
      hehe2 = 0;
      return;
    }
    hehe1++;
    hehe2++;
    bigLeft.innerHTML = bigBig[hehe1].innerHTML;
    bigRight.innerHTML = bigBig[hehe2].innerHTML;
  });

  bigPrevious.addEventListener('click', function() {
    if (hehe1 < 1) {
      bigLeft.innerHTML = bigBig[bigBig.length-1].innerHTML;
      bigRight.innerHTML = bigBig[0].innerHTML;
      hehe1 = bigBig.length-1;
      hehe2 = bigBig.length;
      return;
    }
    hehe1--;
    hehe2--;
    bigLeft.innerHTML = bigBig[hehe1].innerHTML;
    bigRight.innerHTML = bigBig[hehe2].innerHTML;
  });
}




/*=======================FOCUS==========================*/

var bigGallery = document.getElementById('focus-big');
var focusImages = document.getElementsByClassName('big');
for(var i = 0; i < focusImages.length; i++) {
  focusImages[i].addEventListener('click', function (event) {
    event.preventDefault();
    var overlay = document.getElementById('focus-big');
    bigGallery.innerHTML = '<img src="' + this.getAttribute('href') + '" alt="" class="img-responsive testy">';
  });
}



/*=======================END IIFE==========================*/
}());
