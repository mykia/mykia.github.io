

$(function(){
  var heroes = ["Iron Man", "Thor", "Hulk", "Ant Man", "Wasp"].sort();

  // Code goes here!
    function avengersList(array) {
      var $ul = $('<ul></ul>').attr("id", "avengers");
       $('body').append($ul);
       for(var i = 0; i < array.length; i++) {
           $('#avengers')
              .append(
                  $("<li>").text(array[i]).addClass(array[i].replace(/\s+/g, '-').toLowerCase())
                  
              )
       }
    }
    avengersList(heroes);
    
    function replaceAvenger() {
      $('.ant-man, .wasp').remove();
      $('#avengers')
              .append(
                $("<li>")
                .text('Captain America')
                .addClass('captain-america'));
      
      
    }
    
    replaceAvenger();
    
    function sortAvengers() {
      var sortArray = [];
      for (var i = 0; i < 6; i++) {
        sortArray.push(heroes);
      }
      sortArray.push('.captain-america');
      return sortArray.sort();
      
    }
    sortAvengers();
    
    //make button
    var $sortButton = $('<input type="button" value="new button"/>');
    $('#avengers').prepend($sortButton);
    
    
  //   $( "input" )
  //     .button()
  //     .click(function( event ) {
  //       event.preventDefault();
  //       $("#avengers li:first").appendTo("#avengers");
  // });
  
  $($sortButton).click(function() {
  var item = $("#avengers :first-child").remove();
  $(item).appendTo("#avengers");
  
  //return false;
});
  
  
  
  
  
  
  
  
});




