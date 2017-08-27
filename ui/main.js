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
/*
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
                alert('user created succesfully!');
                register.value='Registered!';
            } else {
                alert('couldn\'t register the user');
                register.value='Register';
            }
        }
    };
    var username = document.getElementById('username').value;
    var userpassword = document.getElementById('password').value;
    console.log(username);
    console.log(userpassword);
    request.open('POST','http://manu2k.imad.hasura-app.io/create-user',true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({username: username, password: userpassword}));
    register.value = 'Registering.....';
};*/
function loadLoginForm () {
    var loginHtml = `
        <h3>Login/Register to unlock awesome features</h3>
        <input type="text" id="username" placeholder="username" />
        <input type="password" id="password" />
        <br/><br/>
        <input type="submit" id="login_btn" value="Login" />
        <input type="submit" id="register_btn" value="Register" />
        `;
    document.getElementById('login_area').innerHTML = loginHtml;
    
    // Submit username/password to login
    var submit = document.getElementById('login_btn');
    submit.onclick = function () {
        // Create a request object
        var request = new XMLHttpRequest();
        
        // Capture the response and store it in a variable
        request.onreadystatechange = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
              // Take some action
              if (request.status === 200) {
                  submit.value = 'Sucess!';
              } else if (request.status === 403) {
                  submit.value = 'Invalid credentials. Try again?';
              } else if (request.status === 500) {
                  alert('Something went wrong on the server');
                  submit.value = 'Login';
              } else {
                  alert('Something went wrong on the server');
                  submit.value = 'Login';
              }
              loadLogin();
          }  
          // Not done yet
        };
        
        // Make the request
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        console.log(username);
        console.log(password);
        request.open('POST', '/login', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({username: username, password: password}));  
        submit.value = 'Logging in...';
        
    };
    
    var register = document.getElementById('register_btn');
    register.onclick = function () {
        // Create a request object
        var request = new XMLHttpRequest();
        
        // Capture the response and store it in a variable
        request.onreadystatechange = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
              // Take some action
              if (request.status === 200) {
                  alert('User created successfully');
                  register.value = 'Registered!';
              } else {
                  alert('Could not register the user');
                  register.value = 'Register';
              }
          }
        };
        
        // Make the request
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        console.log(username);
        console.log(password);
        request.open('POST', '/create-user', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({username: username, password: password}));  
        register.value = 'Registering...';
    
    };
}

function loadLoggedInUser (username) {
    var loginArea = document.getElementById('login_area');
    loginArea.innerHTML = `
        <h3> Hi <i>${username}</i></h3>
        <a href="/logout">Logout</a>
    `;
}

function loadLogin () {
    // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                loadLoggedInUser(this.responseText);
            } else {
                loadLoginForm();
            }
        }
    };
    
    request.open('GET', '/check-login', true);
    request.send(null);
}

function loadArticles () {
        // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            var articles = document.getElementById('articles');
            if (request.status === 200) {
                var content = '<ul>';
                var articleData = JSON.parse(this.responseText);
                for (var i=0; i< articleData.length; i++) {
                    content += `<li>
                    <a href="/articles/${articleData[i].title}">${articleData[i].heading}</a>
                    (${articleData[i].date.split('T')[0]})</li>`;
                }
                content += "</ul>"
                articles.innerHTML = content;
            } else {
                articles.innerHTML('Oops! Could not load all articles!')
            }
        }
    };
    
    request.open('GET', '/get-articles', true);
    request.send(null);
}


// The first thing to do is to check if the user is logged in!
loadLogin();

// Now this is something that we could have directly done on the server-side using templating too!
loadArticles();