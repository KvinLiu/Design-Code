$(function(){
  mentoringBubleClick();
});

function mentoringBubleClick(){
  $('.face').on('click', function(){
    var $this = $(this),
        faceTop = $this.position().top,
        vertMath = -1 * (faceTop - 230),
        faceLeft = $this.position().left,
        horizMath = 0 - faceLeft;

    if($(window).width() > 640) {
      $this.parent().css('top', + vertMath + 'px');
      $this.addClass('has-bubble-open').siblings().removeClass('has-bubble-open');
    } else {
      $this.parent().css('left', + horizMath + 'px');
      $this.addClass('has-bubble-open').siblings().removeClass('has-bubble-open');
    }

    // When I click face
    // get the distance of the face from its parent
    // move the whole container up 115px + the content
    // add the is-open class to the face, pop the balloon
  });
}

$(window).scroll(function(){
  youtubeVidScroll();
  startMentoring();
})

function youtubeVidScroll(){
  var wScroll = $(window).scrollTop();
  $(".video-strip").css('background-position', 'center -' + wScroll + 'px');
}

function startMentoring() {
  var wScroll = $(window).scrollTop();
  if($('section.mentoring').offset().top -500 < wScroll) {
    if($(window).width() > 640){
      $('.faces').addClass('launched');
      if(!$('.face').hasClass('has-bubble-open')){
        setTimeout(function(){
          $('.face:nth-child(3)').addClass('has-bubble-open');
        }, 300);
      }
    } else {
      menteringNarrowStart();
    }
  }
}

function menteringNarrowStart() {
  $('.faces').css({
    'top': '230px',
    'left': '0px'
  });
  $('.face').first().addClass('has-bubble-open')
    .siblings().removeClass('has-bubble-open');
}
function menteringWideStart() {
  $('.faces').css({
    'top': '0px',
    'left': '0px'
  });
  $('.face:nth-child(3)').addClass('has-bubble-open')
    .siblings().removeClass('has-bubble-open');
}

$(window).resize(function(){
  if($(window).width() > 640){
    menteringWideStart();
  } else {
    menteringNarrowStart();
  }
})
