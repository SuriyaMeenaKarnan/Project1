$(document).ready(function(){
    $(".hamburger-menu").click(function(){
        $(".left-part").addClass("open");
        $(".close").addClass("close1");
        // $(".dashboard,.right-part").addClass("overflow");
    });
    $(".close").click(function(){
        $(".left-part").removeClass("open");
        $(".close").removeClass("close1");
        // $(".dashboard,.right-part").removeClass("overflow");
    });
});

// sidebar closes when click on document
$(document).click(function () {
    $('.left-part').removeClass('open');
    $(".close").removeClass("close1");
    // $(".right-part").removeClass("overflow");
 });
 $('.menu-item,.logo,.hamburger-menu').click(function (e) {
     e.stopPropagation();
     
 });

 // eye-icon changing type password or text start
$(document).ready(function(){  
    $('.i-icon').click(function(){
        $(this).toggleClass("icon-active");
      if($(this).prev().attr('type')== 'password'){
          $(this).prev().attr('type','text');
        //   $(this).find('#pw-close').hide();
      } else{
        $(this).prev().attr('type','password'); 
    }        
   });
  });
  // eye-icon changing type password or text end




  $(document).ready(function(){
    $(".sel-dropdown").change(function(){
      $(this).attr('data-option','hidden')
      if($(this).val()){
          $(this).removeAttr('data-option')
      }
  })
   // slideing menu
   $(".report-section").click(function(){
    $(".report-inner-section").slideToggle()

   })
  });
    
