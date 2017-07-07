let loadMore = 0;
$(document).ready(function(){

  $("#searchForm").on("submit",function(event){
    event.preventDefault();
    $(".loadMore").show();
    $("#offset").val(0);
    loadMore = 0;
    doAjax();
  });

  $("#loadMoreLink").on("click",function(){
    $("#offset").val(
      $("#offset").val() + $("#limit").val()
    );
    loadMore = 1;
    doAjax();
  })
  // code in here
//  doAjax();

  })
function onSuccess(json) {
  if (!loadMore) {
    $("div.gif-gallery").html("");
  }
  json.data.forEach(function(v,i){
    $("div.gif-gallery").prepend("<img src='"+v.images.fixed_height.url+"' height='"+v.images.fixed_height.height+"' />'");
  } )};

function onError(xhr, status, errorThrown) {
	alert("Sorry, there was a problem!");
	console.log("Error: " + errorThrown);
	console.log("Status: " + status);
	console.dir(xhr);
}

function doAjax(){
    console.log($("#q").val());
    $.ajax({

    // What kind of request
    method: "GET",

    // The URL for the request
    url: "http://api.giphy.com/v1/gifs/search",

    // The data to send aka query parameters
    data: $("#searchForm").serialize(),

    // Code to run if the request succeeds;
    // the response is passed to the function
    success: onSuccess,

    // Code to run if the request fails; the raw request and
    // status codes are passed to the function
    error: onError

  })
};
