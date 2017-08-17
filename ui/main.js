console.log('Loaded!');

//change the text of the main-text div
//var element = document.getElementById('main-text');
//element.innerHTML = 'New value';

/*
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
*/
/*
//comments section
var groupComments='';
var enterComments = document.getElementById('submit_button');
console.log(enterComments);
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
    request.send(null);
};*/

//submit username password
var submitLogin = document.getElementById('login-btn');
submitLogin.onclick = function (){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttpRequest.DONE) {
            if(request.status === 200){
                console.log("user logged in");
                alert('logged in succesfully!');
            } else if(request.status === 403){
                alert('username/password is invalid');
            } else if(request.status === 500){
                alert('Something went wrong in the server');
            }
        }
    };
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST','http://manu2k.imad.hasura-app.io/login',true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({username: username, password: password}));
};

//register user pwd
var register = document.getElementById('register-btn');
register.onclick = function(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttpRequest.DONE) {
            if(request.status === 200){
                console.log("user successfully created");
                alert('created succesfully!');
            } else if(request.status === 403){
                alert('username/password is invalid');
            } else if(request.status === 500){
                alert('Something went wrong in the server');
            }
        username.value="";
        password.value="";
        }
    };
    var username = document.getElementById('username').value;
    var userpassword = document.getElementById('password').value;
    console.log(username);
    console.log(userpassword);
    request.open('POST','http://manu2k.imad.hasura-app.io/create-user',true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({username: username, password: userpassword}));
};