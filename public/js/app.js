var name = getQueryVariable("name")||"anony";
var room = getQueryVariable("room");
console.log(name+" "+ room);
jQuery(".room-title").text(room);
var socket = io();
socket.on("connect",function(){
    console.log("Connected to socket.io server");
    socket.emit("joinRoom",{
        name: name,
        room: room
    });
});
socket.on("message",function(message){
    var momentTimestamp = moment.utc(message.timestamp);
     var $messages= jQuery('.messages');
    var $message = jQuery('<li class="list-group-item"></li>');
     console.log("New Message");
     console.log(message.text);
     $message.append("<p><strong>"+message.name+" "+momentTimestamp.local().format('h:mm a')+"</strong></p>")
     $message.append("<p>"+message.text+"</p>");
     $messages.append($message);
});
// handles new message submission
var $form = jQuery("#message-form");
$form.on("submit",()=>{
    event.preventDefault();
    var $message = $form.find("input[name = message]");
    socket.emit("message",{
          name: name,
          text:$message.val()
    });
    $message.val("")
});