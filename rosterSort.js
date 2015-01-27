
function insertionSort(ulPlayers) {

 var $ulPlayers = $("li");
 for(var i = 0; i < $ulPlayers.length; i++) {
   var $current = $ulPlayers.eq(i);

   while ($current.data("jersey") < $current.prev() .data("jersey")) {
     $current.insertBefore($current.prev());
   }
 }
}
$("button.jersey").on("click", function() {
   insertionSort();
});

function insertionSort2(ulPlayers) {

 var $ulPlayers = $("li");
 for(var i = 0; i < $ulPlayers.length; i++) {
   var $current = $ulPlayers.eq(i);

   while ($current.data("name") < $current.prev() .data("name")) {
     $current.insertBefore($current.prev());
   }
 }
}
$("button.name").on("click", function() {
   insertionSort2();
});




// for (i = 0; i < switchers.length; i++) {
//     $('#switchers ol li:nth-child(' + (i+1) + ')').css('color', 'green');
// }

// loopTimeout(0, switchers.length, 6000, function(i){
//     $('#switchers ol li:nth-child(' + (i+1) + ')').css('color', 'green');    
// });
