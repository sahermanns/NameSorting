
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

