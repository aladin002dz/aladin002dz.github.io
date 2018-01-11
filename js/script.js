function testAnim() {
    $('#scroll-down-cue').removeClass().addClass('bounce animated')
    .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass();
    });
  };

    //Activate current section ----------------------------------------------------------------------------------------------------------  
    /*
    $(document).scroll(function(){
        var st = $(this).scrollTop();

        $('section').each(function() {
            if(st > $(this).offset().top && st <= $(this).offset().top-70 + $(this).height() ){                    
                var id = $(this).attr('id');
                $('a[href="#'+id+'"]').addClass('active');
            }else{
                var id = $(this).attr('id');
                $('a[href="#'+id+'"]').removeClass('active');   
            }   
        });

    });
*/
$(document).ready(function() {
    
    //Activate current section ----------------------------------------------------------------------------------------------------------  
    $(window).scroll(function() {

        var position = $(this).scrollTop();

        var sections = $('section'),
            nav = $('navbar'),
            nav_height = nav.outerHeight();

        sections.each(function() {
            var top = $(this).offset().top - nav_height-90,
                bottom = top + $(this).outerHeight()-90;

            if (position + $(window).height() == $(document).height()) { // if user scrolls to bottom
                $('.active').removeClass('active');
                $('.projectsLink').addClass('active');
            } else if (position >= top && position <= bottom) { // else, if user is in any other section
                $('.active').removeClass('active');
                var id = $(this).attr('id');
                $('a[href="#'+id+'"].link').addClass('active');
            }
        });
    });

    // Copyright Year -----------------------------------------------------------------------------------------------------
      document.getElementById('copyright').innerHTML = '&copy; ' + new Date().getFullYear() +' Mahfoudh (Aladin) Arous';

      // Icons hover effect -------------------------------------------------------------------------------------------------
      var img = document.getElementById("fiverr-icon");
      img.onmouseout = function () {
          this.src = "img/fiverr-transparent-gray.png";
        };
      img.onmouseover = function () {
          this.src = "img/fiverr-transparent.png";
        };

      img = document.getElementById("freelancer-icon");
      img.onmouseout = function () {
          this.src = "img/freelancer-gray.png";
        };
      img.onmouseover = function () {
          this.src = "img/freelancer.png";
        };

    // Infinite bounce --------------------------------------------------------------------------------------------------------------
    setInterval(function(){ testAnim();}, 500);

    // Smooth scrolling -------------------------------------------------------------------------------------------------------------
    $('a[href*=#]').on('click', function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top-40}, 500);
      });

    // Maps -------------------------------------------------------------------------------------------------------------------------
    var map = new GMaps({
        div: '.map',
        lat: 36.165902,
        lng: 1.45,
        zoom:12
      });
      map.addMarker({
        lat: 36.165902,
        lng: 1.325649,
        title: 'Chlef',
        infoWindow: {
            content: '<p>Our Chlef HQ</p>'
          }
      });

});
