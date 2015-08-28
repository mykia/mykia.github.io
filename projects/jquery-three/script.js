$(function() {
    var oldGuardians = [
        {
            name: "Star Lord",
            notes: "Team leader"
    },
        {
            name: "Drax the Destroyer"
    },
        {
            name: "Adam Warlock"
    },
        {
            name: "Quasar",
            notes: "Changed name to Martyr in Guardians of the Galaxy vol. 2 #12 (May 2009)."
    },
        {
            name: "Rocket",
            notes: "Served as temporary leader during Star-Lord's absence"
    },
        {
            name: "Gamora"
    }
  ];

    var newGuardians = [
        {
            name: "Mantis",
            notes: "Served as an advisor beginning in Guardians of the Galaxy vol. 2 #1 (July 2008) before becoming an active member."
    },
        {
            name: "Groot",
            notes: "Appeared as a sapling beginning in Guardians of the Galaxy vol. 2 #1 (July 2008); joined active team after fully regrowing."
    },
        {
            name: "Jack Flag"
    },
        {
            name: "Quasar",
            notes: "Changed name to Martyr in Guardians of the Galaxy vol. 2 #12 (May 2009)."
    },
        {
            name: "Cosmo the Spacedog",
            notes: "Assisted the team beginning in Guardians of the Galaxy vol. 2 #1 (July 2008) before officially joining team."
    },
        {
            name: "Major Victory",
            notes: "Also member of the alternate reality Guardians of the Galaxy team."
    },
        {
            name: "Bug"
    },
        {
            name: "Moondragon",
            notes: "Resurrected by Drax and Phyla-Vell."
    }
  ];

    // ALL YOUR CODE BELOW HERE //
    var guardians = $.merge(oldGuardians, newGuardians);

    //Use map to print out just the names

    var guardianNames = $.map(guardians, function(guardianObject) {
        return guardianObject.name;
    });

    // Change map to print out just first names

    var firstNames = $.map(guardians, function(guardianObject) {
        return guardianObject.name.split(" ")[0];
    });

    //filter out Groot

    var noGroot = firstNames.filter(function(value) {
        return value.toLowerCase() !== "groot";
    });

    //go through array and add names and notes to table
    //   function addToTable(guardianNames) {
    //       var tr = $('<tr/>');
    //       var td = $('<td/>');
    //       $.each(guardians, function(i, prop) {
    //           $(td).html(guardianNames[prop]).appendTo(tr);  
    //   });
    //   $('tbody').append(tr);
    //       }

    //   addToTable(guardianNames);


    //   function createTable(array){
    //       array.forEach(function(){
    //           var row = $('<tr/>');
    //           var name = $("<td/>").text(array.name);
    //           var note = $("<td/>").text(array.note);
    //           $(row).append(name)
    //                 .append(note);

    //       }); 

    var createTable = function(heroes) {
        var createRow = function(hero) {
            var $row = $('<tr>');
            var $name = $('<td>').attr("id","name").text(hero.name);
            var $notes = $('<td>').attr("id",'notes').text(hero.notes || "No Data Available");
            $row.append($name);
            $row.append($notes);
            return $row;
        };
        var $table = $('<table>');
        
        
        var $thead = $("<thead>");
        var $headRow = $("<tr>").addClass('head-row');
        var $rows = heroes.map(createRow);
        
        $thead.append($headRow);
        $headRow.prepend("<td>Name</td>").append("<td>Notes</td>");
        $headRow.css('font-weight', 'bold')
        $table.append($rows);
        $table.prepend($thead);
        $table.appendTo('body');
    };

    createTable(guardians);
    
    //CSS
    

    // ALL YOUR CODE ABOVE HERE //
});