

$(function(){
  var avengers = ["Iron Man", "Thor", "Hulk", "Ant Man", "Wasp"].sort();

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
    avengersList(avengers);
    
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
      
      
      
    }
});




