readMessages(function(message) {
  $(".message-display").append($("<div>" + message + "</div>"));
})

// this is run when we clear the messages in the store
listenForClear(function() {  
  $(".message-display").html("")
})