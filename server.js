var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('crypto');
var bodyParser = require('body-parser');
var session = require('express-session');

var config = {
    user: 'priyanka-raju',
    database: 'priyanka-raju',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: 'db-priyanka-raju-74755'
};

var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(session({
    secret: 'someRandomSecretValue',
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 30}
}));


var pool = new Pool(config);

app.get('/test', function (req, res) {
   // make a select request
   // return a response with the results
   pool.query('SELECT * FROM article', function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result));
      }
   });
});

function createProfile (){
	var createProfile = `
	
	<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

    <link rel="stylesheet" href="css/profile-style.css">


    <!--Font_awesome CDN-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">


  </head>
  <body>

    <!--Header Starts Here-->
    <div class="container-fluid header">
    	<div class="container">
           <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        	<h1><a href="/" style="color:#FFF;">MyBlog</a></h1>
           </div>
        </div>
    </div>
    <!--HEader Ends Here-->


    <!--container STrats Here-->
    <div class="container">
      <div class="row">
      <div class="col-lg-4 well well-lg">
        <img src="images/priyanka.jpg" class="img-responsive">
        <p><h4>&nbsp;&nbsp;Priyanka Raju</h4></p>
        <p><h4>&nbsp;&nbsp;Student</h4></p>
        <p><h4>&nbsp;&nbsp;Coimbatore, Tamilnadu</h4></p>
        <p><h4>&nbsp;&nbsp;priyankar13mss038@skasc.ac.in</h4></p>
        <hr>

        <h3><i class="fa fa-certificate" aria-hidden="true"></i> Skills</h3>

        <h5>HTML 5</h5>
        <div class="progress">
          <div class="progress-bar" role="progressbar" aria-valuenow="70"
          aria-valuemin="0" aria-valuemax="100" style="width:80%">
            80%
          </div>
        </div>

        <h5>CSS 3</h5>
        <div class="progress">
          <div class="progress-bar" role="progressbar" aria-valuenow="70"
          aria-valuemin="0" aria-valuemax="100" style="width:75%">
            75%
          </div>
        </div>

        <h5>SQL</h5>
        <div class="progress">
          <div class="progress-bar" role="progressbar" aria-valuenow="70"
          aria-valuemin="0" aria-valuemax="100" style="width:70%">
            70%
          </div>
        </div>

        <h5>Adobe Photoshop</h5>
        <div class="progress">
          <div class="progress-bar" role="progressbar" aria-valuenow="50"
          aria-valuemin="0" aria-valuemax="100" style="width:50%">
            50%
          </div>
        </div>

        <!--Language starts here-->
        <h3><i class="fa fa-globe" aria-hidden="true"></i>&nbsp;&nbsp;Language</h3>

        <h5>English</h5>
        <div class="progress">
          <div class="progress-bar" role="progressbar" aria-valuenow="50"
          aria-valuemin="0" aria-valuemax="100" style="width:100%">
            100%
          </div>
        </div>

        <h5>Tamil</h5>
        <div class="progress">
          <div class="progress-bar" role="progressbar" aria-valuenow="50"
          aria-valuemin="0" aria-valuemax="100" style="width:100%">
            100%
          </div>
        </div>

        <h5>Hindhi</h5>
        <div class="progress">
          <div class="progress-bar" role="progressbar" aria-valuenow="50"
          aria-valuemin="0" aria-valuemax="100" style="width:90%">
            90%
          </div>
        </div>

        <h5>French</h5>
        <div class="progress">
          <div class="progress-bar" role="progressbar" aria-valuenow="50"
          aria-valuemin="0" aria-valuemax="100" style="width:80%">
            80%
          </div>
        </div>

        <!--Language ends here-->

      </div>

      <div class="col-lg-8">
        <div class="col-lg-12 shadow">
        <h3><p>CURRICULAR ACTIVITIES</p></h3>
        <br>

        <div class="work">
        <h4>Poster Presentation</h4>
        <blockquote style="font-size:14.5px;">
        <p>Presented a poster on “Big Data Analytics”in theNational Conference (NCCTC’13) organized by Sri Krishna College Coimbatore.</p>
        </blockquote>
        </div>
        <div class="work">
        <h4>Journal Publication</h4>
        <blockquote style="font-size:14.5px;">
        <p>Published a journal on “Iris Recognition Technology”in ARSEAM ( IJAESK).</p>
        <p>Published a paper on “A Survey on Health Care Informatics With BigData”in the National Conferenceorganized bykgisl college.</p>
        <p>Published a paper on “Smart Note Taker”in the National Conferenceorganized byKarpagam Engineering college.</p>
        <p>Published a paper on “Mind Reading Technlogy”in the National Conferenceorganized bykodaikonal Christian college.</p>
        </blockquote>
        </div>

        <hr>
		
        <h3><p>ACADEMIC PROJECT</p></h3>
        <div class="work">
        <h4>Food Catelogue System</h4>
        <blockquote style="font-size:14.5px;">
        <p>The food catalogue system is a comprehensive method of ordering process for restaurant management systems in which the work of the customer is to click and select the items wanted by them and be in their respective since all the work is computerized it makes process of ordering simple and spontaneous.</p>
        </blockquote>        

        <h4>E-License Investigation</h4>
        <blockquote style="font-size:14.5px;">
        <p>E-License investigation is designed for security purpose and to reduce burglary and chases of vehicles. License investigation application will be eminent in detecting such burglary activities. This application helps   the traffic police in checking and verifying the vehicle number with the corresponding details in the software database and detects the invalid.</p>
        </blockquote>        

        </div>

      </div>
      </div>
    </div>
    </div>
    <!--Container ends here-->

    <!--Footer Info Starts Here-->
    <div class="container-fluid footer-info" style="margin-top: 20px;">
    	<div class="container">
        	<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            	<div align="center">
                	<p>Designed & Developed By Priyanka.</p>
                </div>
            </div>
        </div>
    </div>
    <!--Footer Info Ends Here-->
  </body>
</html>

	
	
	`;
	return createProfile;
}

function createCategory (){
	var catTemplate =`
	<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>My_Blog</title>
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
<!-- Bootstrap Css-->
<link rel="stylesheet" href="css/bootstrap.min.css">

<!-- Bootstrap Js -->
<script src="js/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>

<!--Style.css-->
<link rel="stylesheet" href="css/style.css">

<!--Font_awesome CDN-->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<body>

<!--Header Starts Here-->
<div class="container-fluid header">
	<div class="container">
       <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    	<h1>MyBlog</h1>
       </div>
    </div>
</div>
<!--HEader Ends Here-->

<div class="container-fluid line">
</div>

  <div class="container">
  <!--Col-8 Starts here-->
  <div class="col-lg-12">
  	<div align="center" class="pad_top">
    	<a href="/" class="btn" style="color:#F96E5B;font-size:18px">HOME</a>
	</div>
  </div>	

  <div class="col-lg-8 col-md-8 pad-bot col-sm-12 col-xs-12">
   <!--Category-->
          <div id="category">
          
          </div>
    <!--Ends Here-->
  
  </div>
  <!--Col-8 Ends here-->

  <!--Col-4 Starts Here-->
  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <ul class="nav nav-pills">
        <li class="active"><a data-toggle="pill" href="#home"><i class="fa fa-user" aria-hidden="true"></i></a></li>
        <li><a data-toggle="pill" href="#menu1"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
        <li><a data-toggle="pill" href="#menu2"><i class="fa fa-tags" aria-hidden="true"></i></a></li>
      </ul>
      <div class="tab-content">
        <div id="home" class="tab-pane fade in active pad-top-25">
          <div class="col-lg-12 profile col-md-12 col-sm-12 col-xs-12">
            <div class="profile-bg">
              <div align="center"> <img src="images/profile.jpg"> </div>
            </div>
            <div align="center" class="profile-info">
              <h3>Priyanka</h3>
              <p>Hi, My name Is Priyanka Acharya.I like CSS, but Im a No PRO...Still Learning About It Everday!. I simply love to play with the codes and do interesting things with it.
                View my complete profile</p>
            </div>
          </div>
        </div>
        <div id="menu1" class="tab-pane fade pad-top-twitter"> <a class="twitter-timeline" data-width="100%" data-height="250" href="https://twitter.com/s_jayasurya">Tweets by s_jayasurya</a> <script async src="//<strong>platform.twitter.com/widgets.js</strong>" charset="utf-8"></script>
          <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
        </div>
        <div id="menu2" class="tab-pane fade pad-top-25">
          <div class="col-lg-12 tags col-md-12 col-sm-12 col-xs-12">
              <div id="tag-2">
              </div>
          </div>
        </div>
      </div>
    </div>

    <!--Popular Posts Starts Here-->
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    	<h3 class="sidebar-title">Recent Posts</h3>
        <div id="rec-post">
        </div>

       <h3 class="sidebar-title">Tags</h3>
		<div id="tag">
        </div>
    </div>
    <!--Popular post ends here-->

  </div>

<!--Col-4 ends here-->

</div>
<!--Container ends Here-->
<!--Footer Starts Here-->
<div class="container-fluid footer">
	<div class="container">
    	<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="cat-title">
            	<h3><a href="#" style="color:#959595;">About Me</a></h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit lacus in leo gravida fringilla. Donec ullamcorper sapien a massa sollicitudin, ut dignissim nisl bibendum. Morbi tempus orci id neque iaculis congue.</p>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="cat-title">
            	<h3><a href="#" style="color:#959595;">Tags</a></h3>
            </div>
            <div id="tag-3">
            </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="cat-title">
	            <h3><a href="#" style="color:#959595;">Follow Me</a></h3>
            </div>
            <a class="twitter-timeline" data-theme="dark" href="https://twitter.com/s_jayasurya">Tweets by s_jayasurya</a> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
           <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
            </div>

        </div>
    </div>
</div>
<!--Footer Ends Here-->

<!--Footer Info Starts Here-->
<div class="container-fluid footer-info">
	<div class="container">
    	<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        	<div align="center">
            	<p>&copy; All Rights Reserved. Designed & Developed By Priyanka.</p>
            </div>
        </div>
    </div>
</div>
<!--Footer Info Ends Here-->


<script type="text/javascript" src="/ui/article.js"></script>
<script type="text/javascript" src="/ui/main.js"></script>
</body>
</html>
	
	`;
	return catTemplate;
}

function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
    var htmlTemplate = `
	<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>My_Blog</title>
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
<!-- Bootstrap Css-->
<link rel="stylesheet" href="css/bootstrap.min.css">

<!-- Bootstrap Js -->
<script src="js/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>

<!--Style.css-->
<link rel="stylesheet" href="css/style.css">

<!--Font_awesome CDN-->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<body>

<!--Header Starts Here-->
<div class="container-fluid header">
	<div class="container">
       <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    	<h1>MyBlog</h1>
       </div>
    </div>
</div>
<!--HEader Ends Here-->

<div class="container-fluid line">
</div>

  <div class="container">
  <!--Col-8 Starts here-->
  <div class="col-lg-12">
  	<div align="center" class="pad_top">
    	<a href="/" class="btn" style="color:#F96E5B;font-size:18px">HOME</a>
	</div>
  </div>	

  <div class="col-lg-8 col-md-8 pad-bot col-sm-12 col-xs-12">
	<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      		<h3>${heading}</h3>
			<div align="center" class="pad-bot-10">
            <img src="images/one.jpg" class="img-responsive">
            </div>
			<div class="para">${content}</div>
			
					<!--Comment-->
					<hr/>
		<h4>Comments</h4>
		  <div id="comment_form">
		  </div>
		  <div id="comments">
			<center>Loading comments...</center>
		  </div>

	</div>
  </div>
  <!--Col-8 Ends here-->

  <!--Col-4 Starts Here-->
  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <ul class="nav nav-pills">
        <li class="active"><a data-toggle="pill" href="#home"><i class="fa fa-user" aria-hidden="true"></i></a></li>
        <li><a data-toggle="pill" href="#menu1"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
        <li><a data-toggle="pill" href="#menu2"><i class="fa fa-tags" aria-hidden="true"></i></a></li>
      </ul>
      <div class="tab-content">
        <div id="home" class="tab-pane fade in active pad-top-25">
          <div class="col-lg-12 profile col-md-12 col-sm-12 col-xs-12">
            <div class="profile-bg">
              <div align="center"> <img src="images/profile.jpg"> </div>
            </div>
            <div align="center" class="profile-info">
              <h3>Priyanka</h3>
              <p>Hi, My name Is Priyanka Acharya.I like CSS, but Im a No PRO...Still Learning About It Everday!. I simply love to play with the codes and do interesting things with it.
                View my complete profile</p>
            </div>
          </div>
        </div>
        <div id="menu1" class="tab-pane fade pad-top-twitter"> <a class="twitter-timeline" data-width="100%" data-height="250" href="https://twitter.com/s_jayasurya">Tweets by s_jayasurya</a> <script async src="//<strong>platform.twitter.com/widgets.js</strong>" charset="utf-8"></script>
          <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
        </div>
        <div id="menu2" class="tab-pane fade pad-top-25">
          <div class="col-lg-12 tags col-md-12 col-sm-12 col-xs-12">
              <div id="tag-2">
              </div>
          </div>
        </div>
      </div>
    </div>

    <!--Popular Posts Starts Here-->
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    	<h3 class="sidebar-title">Recent Posts</h3>
        <div id="rec-post">
        </div>

       <h3 class="sidebar-title">Tags</h3>
		<div id="tag">
        </div>
    </div>
    <!--Popular post ends here-->

  </div>

<!--Col-4 ends here-->

</div>
<!--Container ends Here-->
<!--Footer Starts Here-->
<div class="container-fluid footer">
	<div class="container">
    	<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="cat-title">
            	<h3><a href="#" style="color:#959595;">About Me</a></h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit lacus in leo gravida fringilla. Donec ullamcorper sapien a massa sollicitudin, ut dignissim nisl bibendum. Morbi tempus orci id neque iaculis congue.</p>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="cat-title">
            	<h3><a href="#" style="color:#959595;">Tags</a></h3>
            </div>
            <div id="tag-3">
            </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="cat-title">
	            <h3><a href="#" style="color:#959595;">Follow Me</a></h3>
            </div>
            <a class="twitter-timeline" data-theme="dark" href="https://twitter.com/s_jayasurya">Tweets by s_jayasurya</a> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
           <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
            </div>

        </div>
    </div>
</div>
<!--Footer Ends Here-->

<!--Footer Info Starts Here-->
<div class="container-fluid footer-info">
	<div class="container">
    	<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        	<div align="center">
            	<p>&copy; All Rights Reserved. Designed & Developed By Priyanka.</p>
            </div>
        </div>
    </div>
</div>
<!--Footer Info Ends Here-->


<script type="text/javascript" src="/ui/article.js"></script>
<script type="text/javascript" src="/ui/main.js"></script>
</body>
</html>

    
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/css/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/css', req.params.fileName));
});

app.get('/js/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/js', req.params.fileName));
});

app.get('/images/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', req.params.fileName));
});

app.get('/about/profile', function (req, res) {
	res.send(createProfile());
});

app.get('/about/images/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', req.params.fileName));
});

app.get('/about/css/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/css', req.params.fileName));
});

app.get('/about/js/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/js', req.params.fileName));
});

//cat-1
app.get('/cat1', function (req, res) {
  	pool.query("SELECT * FROM article WHERE category = 'Traditional-Wear' ORDER BY date DESC LIMIT 1", function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result.rows));
      }
   });
});

//cat-2
app.get('/cat2', function (req, res) {
  	pool.query("SELECT * FROM article WHERE category = 'Fashion-Accessories' ORDER BY date DESC LIMIT 1", function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result.rows));
      }
   });
});

//cat-3
app.get('/cat3', function (req, res) {
  	pool.query("SELECT * FROM article WHERE category = 'Traditional-Wear' ORDER BY date ASC LIMIT 2", function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result.rows));
      }
   });
});

//cat-4
app.get('/cat4', function (req, res) {
  	pool.query("SELECT * FROM article WHERE category = 'Fashion-Accessories' ORDER BY date ASC LIMIT 2", function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result.rows));
      }
   });
});

//cat-5
app.get('/cat5', function (req, res) {
  	pool.query("SELECT * FROM article WHERE category = 'Western-Dresses' ORDER BY date DESC LIMIT 1", function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result.rows));
      }
   });
});

//cat-6
app.get('/cat6', function (req, res) {
  	pool.query("SELECT * FROM article WHERE category = 'Western-Dresses' ORDER BY RANDOM() LIMIT 3", function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result.rows));
      }
   });
});

//cat-7
app.get('/cat7', function (req, res) {
  	pool.query("SELECT * FROM article WHERE category = 'Sports' ORDER BY RANDOM() LIMIT 1", function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result.rows));
      }
   });
});

//cat-8
app.get('/cat8', function (req, res) {
  	pool.query("SELECT * FROM article WHERE category = 'Sports' ORDER BY date ASC LIMIT 1", function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result.rows));
      }
   });
});

//cat-9
app.get('/cat9', function (req, res) {
  	pool.query("SELECT * FROM article WHERE category = 'Sports' ORDER BY date DESC LIMIT 1", function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result.rows));
      }
   });
});

//cat-10
app.get('/cat10', function (req, res) {
  	pool.query("SELECT * FROM article WHERE category = 'Sports' ORDER BY RANDOM() LIMIT 1", function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result.rows));
      }
   });
});

//Recent Articles
app.get('/recent-articles', function (req, res) {
  	pool.query("SELECT * FROM article ORDER BY date DESC LIMIT 5", function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result.rows));
      }
   });
});

//Tags
app.get('/tags', function (req, res) {
  	pool.query("SELECT DISTINCT category FROM article", function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result.rows));
      }
   });
});

//Tag-2
app.get('/tags-2', function (req, res) {
  	pool.query("SELECT DISTINCT category FROM article", function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result.rows));
      }
   });
});

//Tag-footer
app.get('/tags-3', function (req, res) {
  	pool.query("SELECT DISTINCT category FROM article", function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result.rows));
      }
   });
});

//For category Page
app.get('/category/:categoryName', function (req, res) {
      res.send(createCategory());
//        res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/cat/:categoryName', function (req, res) {
	
  // SELECT * FROM article WHERE title = '\'; DELETE WHERE a = \'asdf'
  pool.query("SELECT * FROM article WHERE category = $1", [req.params.categoryName], function (err, result) {
    if (err) {
        res.status(500).send(err.toString());
    } else {
        if (result.rows.length === 0) {
            res.status(404).send('Article not found');
        } else {
            res.send(JSON.stringify(result.rows));
        }
    }
  });
});



//For Article
app.get('/articles/ui/js/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/js', req.params.fileName));
});

app.get('/articles/css/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/css', req.params.fileName));
});

app.get('/articles/js/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/js', req.params.fileName));
});

app.get('/articles/images/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', req.params.fileName));
});

app.get('/articles/ui/images/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', req.params.fileName));
});

app.get('/articles/:filename/ui/images/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', req.params.fileName));
});


//Category
app.get('/category/css/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/css', req.params.fileName));
});

app.get('/category/js/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/js', req.params.fileName));
});

app.get('/category/images/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', req.params.fileName));
});


function hash (input, salt) {
    // How do we create a hash?
    var hashed = crypto.pbkdf2Sync(input, salt, 10000, 512, 'sha512');
    return ["pbkdf2", "10000", salt, hashed.toString('hex')].join('$');
}


app.get('/hash/:input', function(req, res) {
   var hashedString = hash(req.params.input, 'this-is-some-random-string');
   res.send(hashedString);
});

app.post('/create-user', function (req, res) {
   // username, password
   // {"username": "tanmai", "password": "password"}
   // JSON
   var username = req.body.username;
   var password = req.body.password;
   var salt = crypto.randomBytes(128).toString('hex');
   var dbString = hash(password, salt);
   pool.query('INSERT INTO "user" (username, password) VALUES ($1, $2)', [username, dbString], function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send('User successfully created: ' + username);
      }
   });
});

app.post('/login', function (req, res) {
   var username = req.body.username;
   var password = req.body.password;
   
   pool.query('SELECT * FROM "user" WHERE username = $1', [username], function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          if (result.rows.length === 0) {
              res.status(403).send('username/password is invalid');
          } else {
              // Match the password
              var dbString = result.rows[0].password;
              var salt = dbString.split('$')[2];
              var hashedPassword = hash(password, salt); // Creating a hash based on the password submitted and the original salt
              if (hashedPassword === dbString) {
                
                // Set the session
                req.session.auth = {userId: result.rows[0].id};
                // set cookie with a session id
                // internally, on the server side, it maps the session id to an object
                // { auth: {userId }}
                
                res.send('credentials correct!');
                
              } else {
                res.status(403).send('username/password is invalid');
              }
          }
      }
   });
});

app.get('/check-login', function (req, res) {
   if (req.session && req.session.auth && req.session.auth.userId) {
       // Load the user object
       pool.query('SELECT * FROM "user" WHERE id = $1', [req.session.auth.userId], function (err, result) {
           if (err) {
              res.status(500).send(err.toString());
           } else {
              res.send(result.rows[0].username);    
           }
       });
   } else {
       res.status(400).send('You are not logged in');
   }
});

app.get('/logout', function (req, res) {
   delete req.session.auth;
	res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool = new Pool(config);

app.get('/get-articles', function (req, res) {
   // make a select request
   // return a response with the results
   pool.query('SELECT * FROM article ORDER BY date DESC', function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result.rows));
      }
   });
});

app.get('/get-comments/:articleName', function (req, res) {
   // make a select request
   // return a response with the results
   pool.query('SELECT comment.*, "user".username FROM article, comment, "user" WHERE article.title = $1 AND article.id = comment.article_id AND comment.user_id = "user".id ORDER BY comment.timestamp DESC', [req.params.articleName], function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result.rows));
      }
   });
});

app.post('/submit-comment/:articleName', function (req, res) {
   // Check if the user is logged in
    if (req.session && req.session.auth && req.session.auth.userId) {
        // First check if the article exists and get the article-id
        pool.query('SELECT * from article where title = $1', [req.params.articleName], function (err, result) {
            if (err) {
                res.status(500).send(err.toString());
            } else {
                if (result.rows.length === 0) {
                    res.status(400).send('Article not found');
                } else {
                    var articleId = result.rows[0].id;
                    // Now insert the right comment for this article
                    pool.query(
                        "INSERT INTO comment (comment, article_id, user_id) VALUES ($1, $2, $3)",
                        [req.body.comment, articleId, req.session.auth.userId],
                        function (err, result) {
                            if (err) {
                                res.status(500).send(err.toString());
                            } else {
                                res.status(200).send('Comment inserted!')
                            }
                        });
                }
            }
       });     
    } else {
        res.status(403).send('Only logged in users can comment');
    }
});

app.get('/articles/:articleName', function (req, res) {
  // SELECT * FROM article WHERE title = '\'; DELETE WHERE a = \'asdf'
  pool.query("SELECT * FROM article WHERE title = $1", [req.params.articleName], function (err, result) {
    if (err) {
        res.status(500).send(err.toString());
    } else {
        if (result.rows.length === 0) {
            res.status(404).send('Article not found');
        } else {
            var articleData = result.rows[0];
            res.send(createTemplate(articleData));
        }
    }
  });
});

app.get('/ui/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', req.params.fileName));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
