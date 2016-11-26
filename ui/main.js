var categoryName = window.location.pathname.split('/')[2];

function loadLoginForm () {
    var loginHtml = `
 <h3>Login/Register</h3>
		<div clss="col-lg-12 col-md-12 col-sm-12 col-xs-12">
		<div class="form-group">
        <input type="text" class="form-control" id="username" placeholder="Username" />
		</div>
		<div class="form-group">
        <input type="password" class="form-control" id="password" placeholder="Password" />
		</div>
        
        <input type="submit" class="btn btn-success" id="login_btn" value="Login" />
        <input type="submit" class="btn btn-primary" id="register_btn" value="Register" />
		</div>        `;
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


//Cat-1
function loadCat1 () {
        // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            var articles = document.getElementById('cat-1');
            if (request.status === 200) {
                var content = '<div class="cat-title">';
                var articleData = JSON.parse(this.responseText);
                for (var i=0; i< articleData.length; i++) {
                    content += `<h3><a href="/category/${articleData[i].category}">${articleData[i].category}</a></h3>
      </div>
	  
	   <div class="col-lg-12 no-padding col-md-12 col-sm-12 col-xs-12"> <img src="images/one.jpg" class="img-responsive post-img">
        <div class="post-date-2"> <a href="/articles/${articleData[i].title}">${articleData[i].date.split('T')[0]}</a> </div>
        <div class="hover-cat">${articleData[i].category}</div>
        <div class="post-head"> <a href="/articles/${articleData[i].title}">
          <h3>${articleData[i].heading}</h3>
          </a>
          <p>${articleData[i].content.substring(3, 150)}</p>
		  <a href="/articles/${articleData[i].title}"><p style="text-align:right !important;"> View more</p></a>
        </div>
      </div>
	  
	  `;
                }
                articles.innerHTML = content;
            } else {
                articles.innerHTML('Oops! Could not load all articles!')
            }
        }
    };
    
    request.open('GET', '/cat1', true);
    request.send(null);
}

//cat-2
function loadCat2 () {
        // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            var articles = document.getElementById('cat-2');
            if (request.status === 200) {
                var content = '<div class="cat-title">';
                var articleData = JSON.parse(this.responseText);
                for (var i=0; i< articleData.length; i++) {
                    content += `<h3><a href="/category/${articleData[i].category}">${articleData[i].category}</a></h3>
      </div>
	  
	   <div class="col-lg-12 no-padding col-md-12 col-sm-12 col-xs-12"> <img src="images/one.jpg" class="img-responsive post-img">
        <div class="post-date"> <a href="/articles/${articleData[i].title}">${articleData[i].date.split('T')[0]}</a> </div>
        <div class="hover-cat">${articleData[i].category}</div>
        <div class="post-head"> <a href="/articles/${articleData[i].title}">
          <h3>${articleData[i].heading}</h3>
          </a>
          <p>${articleData[i].content.substring(3, 150)}</p>
		  <a href="/articles/${articleData[i].title}"><p style="text-align:right !important;"> View more</p></a>		  
        </div>
      </div>
	  
	  `;
                }
                articles.innerHTML = content;
            } else {
                articles.innerHTML('Oops! Could not load all articles!')
            }
        }
    };
    
    request.open('GET', '/cat2', true);
    request.send(null);
}


//Cat-3
function loadCat3 () {
        // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            var articles = document.getElementById('cat-3');
            if (request.status === 200) {
                var content = '';
                var articleData = JSON.parse(this.responseText);
                for (var i=0; i< articleData.length; i++) {
                 content += `<div class="col-lg-12 rel-link no-padding col-md-12 col-sm-12 col-xs-12">
					<div class="col-lg-3 no-padding col-md-3 col-sm-3 col-xs-3"> <img src="images/three.jpg" class="img-responsive"> </div>
        <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">
          <p class="post-head"><a href="/articles/${articleData[i].title}">${articleData[i].heading}</a></p>
        </div>	  
		<div class="clearfix"></div></div>
	  `;
                }
                articles.innerHTML = content;
            } else {
                articles.innerHTML('Oops! Could not load all articles!')
            }
        }
    };
    
    request.open('GET', '/cat3', true);
    request.send(null);
}


//Cat-3
function loadCat4 () {
        // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            var articles = document.getElementById('cat-4');
            if (request.status === 200) {
                var content = '';
                var articleData = JSON.parse(this.responseText);
                for (var i=0; i< articleData.length; i++) {
                    content += `<div class="col-lg-12 rel-link no-padding col-md-12 col-sm-12 col-xs-12">
					<div class="col-lg-3 no-padding col-md-3 col-sm-3 col-xs-3"> <img src="images/four.jpg" class="img-responsive"> </div>
        <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">
          <p class="post-head"><a href="/articles/${articleData[i].title}">${articleData[i].heading}</a></p>
        </div>	  
		<div class="clearfix"></div></div>
	  `;
                }
                articles.innerHTML = content;
            } else {
                articles.innerHTML('Oops! Could not load all articles!')
            }
        }
    };
    
    request.open('GET', '/cat4', true);
    request.send(null);
}

//cat-5
function loadCat5 () {
        // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            var articles = document.getElementById('cat-5');
            if (request.status === 200) {
                var content = '<div class="cat-title">';
                var articleData = JSON.parse(this.responseText);
                for (var i=0; i< articleData.length; i++) {
                    content += `<h3><a href="/category/${articleData[i].category}">${articleData[i].category}</a></h3>
      </div>
	  
	   <div class="col-lg-6 no-padding col-md-6 col-sm-12 col-xs-12"> <img src="images/one.jpg" class="img-responsive post-img">
        <div class="post-date"> <a href="/articles/${articleData[i].title}">${articleData[i].date.split('T')[0]}</a> </div>
        <div class="hover-cat">${articleData[i].category}</div>
        <div class="post-head"> <a href="/articles/${articleData[i].title}">
          <h3>${articleData[i].heading}</h3>
          </a>
          <p>${articleData[i].content.substring(3, 150)}</p>
		  <a href="/articles/${articleData[i].title}"><p style="text-align:right !important;"> View more</p></a>		  
        </div>
      </div>
	  
	  `;
                }
                articles.innerHTML = content;
            } else {
                articles.innerHTML('Oops! Could not load all articles!')
            }
        }
    };
    
    request.open('GET', '/cat5', true);
    request.send(null);
}

//Cat-6
function loadCat6 () {
        // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            var articles = document.getElementById('cat-6');
            if (request.status === 200) {
                var content = '';
                var articleData = JSON.parse(this.responseText);
                for (var i=0; i< articleData.length; i++) {
                    content += `<div class="col-lg-3 no-padding pad-bot-10 col-md-3 col-sm-3 col-xs-3"> <img src="images/five.jpg" class="img-responsive img-90"> </div>
        <!--Content-->
        <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9"> <a href="/articles/${articleData[i].title}" class="post-link">${articleData[i].heading}<br>
          ${articleData[i].date.split('T')[0]}</a> </div>
        <div class="clearfix"></div>

	  `;
                }
                articles.innerHTML = content;
            } else {
                articles.innerHTML('Oops! Could not load all articles!')
            }
        }
    };
    
    request.open('GET', '/cat6', true);
    request.send(null);
}

//Cat-7
function loadCat7 () {
        // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            var articles = document.getElementById('cat-7');
            if (request.status === 200) {
                var content = '<div class="cat-title">';
                var articleData = JSON.parse(this.responseText);
                for (var i=0; i< articleData.length; i++) {
                    content += `<h3><a href="/category/${articleData[i].category}">${articleData[i].category}</a></h3>
      </div>
	  
	   <div class="col-lg-12 no-padding col-md-12 col-sm-12 col-xs-12"> <img src="images/one.jpg" class="img-responsive post-img">
        <div class="post-date"> <a href="/articles/${articleData[i].title}">${articleData[i].date.split('T')[0]}</a> </div>
        <div class="hover-cat">${articleData[i].category}</div>
        <div class="post-head"> <a href="/articles/${articleData[i].title}">
          <h3>${articleData[i].heading}</h3>
          </a>
          <p>${articleData[i].content.substring(3, 150)}</p>
		  <a href="/articles/${articleData[i].title}"><p style="text-align:right !important;"> View more</p></a>		  
        </div>
      </div>
	  
	  `;
                }
                articles.innerHTML = content;
            } else {
                articles.innerHTML('Oops! Could not load all articles!')
            }
        }
    };
    
    request.open('GET', '/cat7', true);
    request.send(null);
}

//Cat-8
function loadCat8 () {
        // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            var articles = document.getElementById('cat-8');
            if (request.status === 200) {
                var content = '<div class="cat-title">';
                var articleData = JSON.parse(this.responseText);
                for (var i=0; i< articleData.length; i++) {
                    content += `<h3><a href="/category/${articleData[i].category}">${articleData[i].category}</a></h3>
      </div>
	  
	   <div class="col-lg-12 no-padding col-md-12 col-sm-12 col-xs-12"> <img src="images/one.jpg" class="img-responsive post-img">
        <div class="post-date"> <a href="/articles/${articleData[i].title}">${articleData[i].date.split('T')[0]}</a> </div>
        <div class="hover-cat">${articleData[i].category}</div>
        <div class="post-head"> <a href="/articles/${articleData[i].title}">
          <h3>${articleData[i].heading}</h3>
          </a>
          <p>${articleData[i].content.substring(3, 150)}</p>
		  <a href="/articles/${articleData[i].title}"><p style="text-align:right !important;"> View more</p></a>		  
        </div>
      </div>
	  
	  `;
                }
                articles.innerHTML = content;
            } else {
                articles.innerHTML('Oops! Could not load all articles!')
            }
        }
    };
    
    request.open('GET', '/cat8', true);
    request.send(null);
}

//Cat-9
function loadCat9 () {
        // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            var articles = document.getElementById('cat-9');
            if (request.status === 200) {
                var content = '';
                var articleData = JSON.parse(this.responseText);
                for (var i=0; i< articleData.length; i++) {
                    content += `
	  
	   <div class="col-lg-12 no-padding col-md-12 col-sm-12 col-xs-12"> <img src="images/one.jpg" class="img-responsive post-img">
        <div class="post-date"> <a href="/articles/${articleData[i].title}">${articleData[i].date.split('T')[0]}</a> </div>
        <div class="hover-cat">${articleData[i].category}</div>
        <div class="post-head"> <a href="/articles/${articleData[i].title}">
          <h3>${articleData[i].heading}</h3>
          </a>
          <p>${articleData[i].content.substring(3, 150)}</p>
		  <a href="/articles/${articleData[i].title}"><p style="text-align:right !important;"> View more</p></a>		  
        </div>
      </div>
	  
	  `;
                }
                articles.innerHTML = content;
            } else {
                articles.innerHTML('Oops! Could not load all articles!')
            }
        }
    };
    
    request.open('GET', '/cat9', true);
    request.send(null);
}

//Cat-10
function loadCat10 () {
        // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            var articles = document.getElementById('cat-10');
            if (request.status === 200) {
                var content = '';
                var articleData = JSON.parse(this.responseText);
                for (var i=0; i< articleData.length; i++) {
                    content += `
	  
	   <div class="col-lg-12 no-padding col-md-12 col-sm-12 col-xs-12"> <img src="images/one.jpg" class="img-responsive post-img">
        <div class="post-date"> <a href="/articles/${articleData[i].title}">${articleData[i].date.split('T')[0]}</a> </div>
        <div class="hover-cat">${articleData[i].category}</div>
        <div class="post-head"> <a href="/articles/${articleData[i].title}">
          <h3>${articleData[i].heading}</h3>
          </a>
          <p>${articleData[i].content.substring(3, 150)}</p>
		  <a href="/articles/${articleData[i].title}"><p style="text-align:right !important;"> View more</p></a>		  
        </div>
      </div>
	  
	  `;
                }
                articles.innerHTML = content;
            } else {
                articles.innerHTML('Oops! Could not load all articles!')
            }
        }
    };
    
    request.open('GET', '/cat10', true);
    request.send(null);
}

//recentArticles
function recentArticles () {
        // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            var articles = document.getElementById('rec-post');
            if (request.status === 200) {
                var content = '<ul class="pop-post-list">';
                var articleData = JSON.parse(this.responseText);
                for (var i=0; i< articleData.length; i++) {
                    content += `
            <li>
            <a href="/articles/${articleData[i].title}">${articleData[i].heading}</a>
            </li>

	  `;
                }
				content += '</ul>';
                articles.innerHTML = content;
            } else {
                articles.innerHTML('Oops! Could not load all articles!')
            }
        }
    };
    
    request.open('GET', '/recent-articles', true);
    request.send(null);
}

//loadTags
function loadTags () {
        // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            var articles = document.getElementById('tag');
            if (request.status === 200) {
                var content = '<ul class="tags-list">';
                var articleData = JSON.parse(this.responseText);
                for (var i=0; i< articleData.length; i++) {
                    content += `
       		<li><a href="/category/${articleData[i].category}">${articleData[i].category}</a></li>
	  `;
                }
				content += '</ul>';
                articles.innerHTML = content;
            } else {
                articles.innerHTML('Oops! Could not load all articles!')
            }
        }
    };
    
    request.open('GET', '/tags', true);
    request.send(null);
}

//loadTags2
function loadTags2 () {
        // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            var articles = document.getElementById('tag-2');
            if (request.status === 200) {
                var content = '';
                var articleData = JSON.parse(this.responseText);
                for (var i=0; i< articleData.length; i++) {
                    content += `
					<a href="/category/${articleData[i].category}">${articleData[i].category}</a>
	  `;
                }
                articles.innerHTML = content;
            } else {
                articles.innerHTML('Oops! Could not load all articles!')
            }
        }
    };
    
    request.open('GET', '/tags-2', true);
    request.send(null);
}

//loadTags3
function loadTags3 () {
        // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            var articles = document.getElementById('tag-3');
            if (request.status === 200) {
                var content = '<ul class="list-group" style="margin-top: -10px !important;">';
                var articleData = JSON.parse(this.responseText);
                for (var i=0; i< articleData.length; i++) {
                    content += `
			<li class="list-group-item"><a href="/category/${articleData[i].category}" style="color:#959595;">${articleData[i].category}</a></li>
	  `;
                }
				content += "</ul>"
                articles.innerHTML = content;
            } else {
                articles.innerHTML('Oops! Could not load all articles!')
            }
        }
    };
    
    request.open('GET', '/tags-3', true);
    request.send(null);
}

//Func for category 
function loadCategory () {
        // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            var article = document.getElementById('category');
            if (request.status === 200) {
//                var content = '<ul>';
//				alert("Test");
				var a = 5;
				var content = `<div class="col-lg-12"><div class="cat-title">
				<h3><a href="#">` + categoryName + `</a></h3>
      </div>`;
                var articleData = JSON.parse(this.responseText);
				
                for (var i=0; i< articleData.length; i++) {
                   
				   content += `
				   
				<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
				<h3>${articleData[i].heading}</h3>
				<div align="center" class="pad-bot-10">
				<img src="images/one.jpg" class="img-responsive">
				</div>
				<div class="para">${articleData[i].content.substring(3, 150)}
				  <a href="/articles/${articleData[i].title}"><p style="text-align:right !important;"> View more</p></a>		
				</div>  
				</div> 
				   `;
				   //content += "Hello";
				
                }
				content += "</div>";
                article.innerHTML = content;
            } else {
                article.innerHTML('Oops! Could not load all articles!')
            }
        }
    };
    
    request.open('GET', '/cat/' + categoryName, true);
    request.send(null);
}



// The first thing to do is to check if the user is logged in!
loadLogin();

// Now this is something that we could have directly done on the server-side using templating too!
loadArticles();

//Cat-1
loadCat1();

//cat-2
loadCat2();

//cat-3
loadCat3();

//cat-4
loadCat4();

//cat-5
loadCat5();

//cat-6
loadCat6();

//cat-7
loadCat7();

//cat-8
loadCat8();

//cat-9
loadCat9();

//cat-10
loadCat10();

//recentArticles
recentArticles();

//tags
loadTags();

//tag-2
loadTags2();

//tag-footer
loadTags3();

//Calling loadCategory
loadCategory();
