$(document).ready(function(){
  $('.dropdown-submenu a.test').on("mouseover", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});