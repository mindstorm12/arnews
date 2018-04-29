// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onload = function(){init();};
window.onscroll = function() {scrollFunction();};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-75px";
  }
}

function init(){
    document.getElementById("navbar").style.top = "-75px";
}

$(document).ready(function(){
    
    console.log('Program started');
    
    //setting breaking headlines
//    $('#breakHead').hide();
    
    //getting data from newsAPi
    var source = 'ars-technica';
    var newsHeadlinesUrl = "https://newsapi.org/v1/articles?source=" + source + "&apiKey=a976fe72892243ecab0642b4f245259e";
    
    var articleNumber = 2;
    
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function(){
        var newsData = JSON.parse(this.responseText);
//        document.write('<pre>' + newsData + '</pre>');
        var i = 0;

        setInterval(function() {
            $('#feed').fadeIn(2000, function(){
                $('#feed').fadeOut(3000, function(){
                    $('#feed').html(newsData['articles'][i++]['title']);
                });
            });

            if (i > 5){
                i = 0;
            }
            }, 5000);
        $('#main-article-headline').text(newsData['articles'][articleNumber]['title']);
        $('#mainArticleImage').html('<img class="main-image img-fluid" src="'+ newsData['articles'][articleNumber]['urlToImage'] +'" alt="">  ');
        $('#mainArticleDescription').text(newsData['articles'][articleNumber]['description']);

        console.log(this.responseText);
    };
    
    xhttp.open("GET", newsHeadlinesUrl, true);
    xhttp.send();

    console.log('Data loaded');
    
    console.log('Everything was executed');

});
