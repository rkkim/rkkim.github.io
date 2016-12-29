var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

function changecolor(){
   var colorRandNum = Math.floor(Math.random() * (12));
      var newcolor = colors[colorRandNum];
  
    $("html body").animate({
        backgroundColor: newcolor,
        color: newcolor
      }, 500);
      $("button").animate({
        backgroundColor: newcolor
      }, 1000);
}


$(document).ready(function() {
    $("#getMessage").on("click", function(){
        $.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=', // The URL to the API. You can get this in the API page of the API you intend to consume
    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
    data: {},
    dataType: 'json',
    success: function(data) { 
      
      var quotehtml = "<h3 class='nQuote text-center'> \t <i class='fa fa-quote-left' aria-hidden='true'></i>";
      quotehtml += ' ';
      quotehtml += data.quote;
      quotehtml += "</h3>";
      
      var authorhtml = "<h4 class='nAuthor pull-right'> - ";
      authorhtml += data.author;
      authorhtml += "</h4>";
      
      $("#quote").fadeOut(function() {
  $(this).html(quotehtml).fadeIn();
});
      
       $("#author").fadeOut(function() {
  $(this).html(authorhtml).fadeIn();
});
      
     // $("#quote").html(quotehtml);
     // $("#author").html(authorhtml);
      
     //new color 
     changecolor();
       },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "rhfFsq6G3Emsh6PGqzTpuhoADYuZp1igUlQjsnEDlQYeHXPt8D"); // Enter here your Mashape key
         }
      }); //ajax
    }); //getMessage
});//ready