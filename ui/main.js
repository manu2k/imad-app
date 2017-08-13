console.log('Loaded!');

//change the text of the main-text div
//var element = document.getElementById('main-text');
//element.innerHTML = 'New value';

//Move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 10;
    img.style.marginLeft= marginLeft + 'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight,50);
};

var button = document.getElementById('counter');
var counter = 0;
button.onclick = function (){
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttpRequest.DONE) {
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    request.open('GET','http://manu2k.imad.hasura-app.io/counter',true);
    request.send(null);
};

//submit button
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    //make a request to the server and send name
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttpRequest.DONE) {
            if(request.status === 200){
                //capture and render a list of names
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for(var i=0;i<names.length;i++){
                    list += '<li>' + names[i] + '</li>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
            }
        }
    };
    name='';
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET','http://manu2k.imad.hasura-app.io/submit-name?name=' + name,true);
    request.send(null);
    
};

//comments section
var groupComments='';
var enterComments = document.getElementById('submit_button');
if (enterComments.onclick()){
    alert("hello there!!")
}
enterComments.onclick = function(){
    console.log("clicked");
    var comment = document.getElementById('comment');
    var addedComment = document.getElementById('feedback');
    var feedbackData = addedComment.value;
    groupComments += feedbackData; 
    comment.innerHTML = groupComments;
    
    /*
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
       if (request.readyState === XMLHttpRequest.DONE) {
            if(request.status === 200){
                var counter = request.responseText;
                //var span = document.getElementById('count');
                var comment = document.getElementById('comment');
                comment.innerHTML = counter.toString();
            }
        }
    };
    request.open('GET','http://manu2k.imad.hasura-app.io/comments',true);
    request.send(null);*/
};