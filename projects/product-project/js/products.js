$(document).ready(function() {


    $.getJSON('data/product.json', function(products) {
        //console.log(products);
        printProducts(products);
        //searchPhones(products, );
        //lightBox();
        var ul = $('<ul>')
            .attr('id', 'product-list');

        var listItems = $.map(products, function(product) {
            return $('<li>')
                .attr('id', 'product.id')
                .data('product', product)
                .addClass('product-item')
                .html(product.desc);
        });

        ul.append(listItems).appendTo('main');
        
        
        
        
        
        
        
    });










    function each(collection, action) {
        if (Array.isArray(collection)) {
            for (var i = 0; i < collection.length; i++) {
                action(collection[i], i, collection);
            }
        }
        else {
            for (var key in collection) {
                action(collection[key], key, collection);
            }
        }
    }

    function isComplex(value) {
        return value !== null && typeof value === 'object';
    }

    function printProducts(products) {
        var page = $.map(products, function(phone) {
            var $image = $("<div>").addClass("photo").append(
                $("<a>").attr('href', "img/product/" + phone.image).html(
                    $('<img>').attr("src", "img/product/thumbs/" + phone.image).addClass("img img-responsive")));

            var $description = $("<div>").addClass("description").append(
                $("<div>").addClass("productName").html('<h4>' + phone.desc + '</h4>'),
                $("<div>").addClass("price").html("Price: $" + phone.price).css('color', 'red'),
                $("<div>").addClass("stock").html("Stock: " + phone.stock),
                $("<div>").addClass("colors").html("Available in beautiful: " + phone.availableColors),
                $("<div>").addClass("specs").html(phone.specs[0])
            );
            var $row = $("<div>").addClass("row").append($image, $description);
            return $row;
        });
        $('main').html(page);


        function lightBox() {
            var $overlay = $('<div>').attr('id', 'overlay');
            var $boxImage = $("<img>");
            var $caption = $("<p></p>");

            //An image
            $overlay.append($boxImage, $caption);
            // A caption

            //Add an overlay (using jQuery)
            $("main").append($overlay);


            // capture the click event on an <a> tag for an image
            //Give the ul an id of imageGallery(I did this in the HTML) to have something to select

            $(".photo a").click(function(event) {
                event.preventDefault();
                var imageLocation = $(this).attr("href");
                // Update overlay with the image linked in the <a> tag
                $boxImage.attr("src", imageLocation);

                // and show the overlay
                $overlay.show();

                // Add the caption in the alt attribute
                //get child's alt attr and set caption.
                //var captionText = $(this).children("img").attr("alt");
                //var captionTest = $()
                $caption.text(".specs");


            });

            //When overlay is clicked, hide the overlay
            $overlay.click(function() {
                $overlay.hide();
            });

        }

        lightBox();



    }








    //make button work

    function searchPhones(collection, query) {
        var matches = [];
        each(collection, function(value) {
            if (isComplex(value)) {
                if (searchPhones(value, query).length) {
                    matches.push(value);
                }
            }
            else {
                if (typeof value === 'string' && typeof query === 'string') {
                    if (value.toLowerCase().indexOf(query.toLowerCase()) > -1) {
                        matches.push(value);
                    }
                }
                else {
                    if (value === query) {
                        matches.push(value);
                    }
                }
            }
        });
        return matches;
    }


    //  function filterProductByName(products){
    //      var $search = $(".form-control");

    //      var $filteredProducts = $.filter(products, function(phone) {
    //          return phone === $search;
    //      });


    //  $.map(products, function(phone){
    //      if ($.includes(phone.desc, search)) {
    //      return phone;
    //      }
    //  });
    // $('main').html($filteredProducts);
    //return $filteredProducts;



    $('#search').on('click', function() {
        $('main')
        $('main').prepend();




    });





    //  function search(products, searchItem) {
    //     var results;

    //     searchItem = searchItem.toLowerCase();
    //     results = $.map(function(phone) {
    //         var match = phone.name.toLowerCase().indexOf(searchItem) !== -1;
    //         return match ? phone : null;
    //     });
    //     return results;
    // }
    //  console.log(search(products, 'Samsung'));

    //LIGHTBOX
    //Problem: when clicking on an image, the user goes to a dead end

    //Solution: create an overlay with the large image: lightbox



    //Plan
    function lightBox() {
        var $overlay = $('<div id="overlay"></div>');
        var $image = $("<img>");
        var $caption = $("<p></p>");

        //An image
        $overlay.append($image, $caption);
        // A caption

        //Add an overlay (using jQuery)
        $("main").append($overlay);


        // capture the click event on an <a> tag for an image
        //Give the ul an id of imageGallery(I did this in the HTML) to have something to select

        $(".photo a").click(function(event) {
            event.preventDefault();
            var imageLocation = $(this).attr("href");
            // Update overlay with the image linked in the <a> tag
            $image.attr("src", imageLocation);

            // and show the overlay
            $overlay.show();

            // Add the caption in the alt attribute
            //get child's alt attr and set caption.
            var captionText = $(this).children("img").attr("alt");
            $caption.text(captionText);


        });

        //When overlay is clicked, hide the overlay
        $overlay.click(function() {
            $overlay.hide();
        });

    }


















});
