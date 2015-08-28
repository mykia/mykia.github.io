$(document).ready(function() {
    
    function printProducts(products){
     
        var page = $.map(products, function(phone){
            
            
            
            var $image = $("<div>").addClass("photo").append(
                $('<img>').attr("src","img/product/thumbs/" + phone.image).addClass("img img-responsive"));
            
            var $description = $("<div>").addClass("description").append(
                                    $("<div>").addClass("productName").html('<h4>' + phone.desc + '</h4>'),
                                    $("<div>").addClass("price").html("Price: $" + phone.price),
                                    $("<div>").addClass("stock").html("Stock: " + phone.stock),
                                    $("<div>").addClass("colors").html("Available in beautiful: " + phone.availableColors)
                );
            
            var $row = $("<div>").addClass("row").append($image, $description);
            
            
            
           
        
        return $row;
    });

      $('main').html(page);   
     }
     
     
     
     
     
     $.getJSON('data/product.json', function(products){
        //console.log(products);
      printProducts(products);
      
      
     });
    
   
   //make button work
   
   

 function filterProductByName(products){
     var $filteredProducts = $.map(products, function(phone){
         if (_.includes($filteredProducts, phone.desc)) {
         return phone.desc;
         }
     });
     return $filteredProducts;
     
 }
 
 
    
});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
