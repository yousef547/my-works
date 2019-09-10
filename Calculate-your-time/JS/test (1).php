    
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Calculate your time </title>
        <link rel="stylesheet" href="Css/bootstrap.min.css"/>
        <link rel="stylesheet" href="Css/normalize.css"/>
        <link rel="stylesheet" href="Css/app.css" />
        <link rel="shortcut icon" href="Css/site X.png" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
        <script src="https://www.gstatic.com/firebasejs/5.8.2/firebase.js"></script>
    </head>
    <body>
        <div class="st">
                <div class="cont">
                   <div class="log looon">
                       Calculate your time
                    </div>
                </div>
                </div>
        <div class="time">
            <div class="cont">
                <div class="date looon fontes">
                    <ul>
                        <li id="day"></li>
                        <li id="month"></li>
                        <li id="year"></li>
                        <li id="week"></li>
                    </ul>
                    <ul>
                        <li id="hours">1</li>
                        <li id="Minutes">2</li>
                        <li id="seconds">2</li>
                        <li id="type">3</li>
                    </ul>
                    
                </div>
            </div>
        </div>
        <div class="sc">
            <div class="cont">
                 <div class="form">
                    <form class="froms" id="form" method="post" action="">
                        <fieldset>
                                                    <input type="hidden" value="0" id="check">
                            <label class="looon">Frist name </label> 
                            <input type="text" name="frist" placeholder="frist name" id="too" maxlength="15" class="namess"/> 
                            <label class="looon">Last name </label> 
                            <input type="text" name="last" placeholder="last name" id="scName" maxlength="15" class="namess"/> 
                            <label class="looon">Date of birth</label>
                            <input type="date" id="years" class="dates" name="date"/> <!--id="txtChar" onkeypress="return isNumberKey(event-->
                            <label class="looon">How many hours do you sleep ?</label>
                            <input type="number" name="sleep"  id="slept" maxlength="2" min="1" max="24" class="ask" placeholder="--"/>
                            <label class="looon">How many hours do you work or Studied ?</label>
                            <input type="number" name="work" placeholder="--" id="works" maxlength="2" min="1" max="24" class="ask"/> 
                            <label class="looon">How many hours do you worship ?</label>
                            <input type="number" name="worship" placeholder="--" id="pray" maxlength="2" min="1" max="24" class="ask" /> 
                            <input type="button" onclick="start();" value="Calculate" id="set" name="btn" class="btn  bottonss"/>
                            <input type="reset" class="btn  bottonss" value="Restart"/>
                                                </fieldset>     
                    </form>
                </div>
            </div>
        </div>
        

    
        <div id="resultsec" class="thr looon">
            <div class="cont">
                <div class="part1 looon ">
                    <h1>Result</h1>
                </div>
                <div class="hello backed">
                    <div id="arts" class="">
                    </div>
                </div>
                
                <div class="ega looon">
                    <h1 class="frist">Your age</h1>
                    <span class="years">Day</span>
                    <span class="months">Months</span>
                    <span class="days">Year</span>
                    <ul class="">
                        <li id="mm">--</li>
                        <li id="dd">--</li>
                        <li id="yy">--</li>
                    </ul>
                </div>
                <div class="result">
                    <div class="ul">
                        <span class="mm">Your age by months</span>
                        <span class="dd">Your age by days</span>
                        <span class="hh">Your age by hours</span>
                        <span class="tt">Your age by minuts</span>
                    </div>
                    <div class="res">
                        <ul>
                            <li id="date">---</li>
                            <li id="days">---</li>
                            <li id="hour">---</li>
                            <li id="minut">---</li>
                        </ul>
                    </div>
                </div>
                <div class="result">
                    <div class="li">
                        <span class="mm">Sleep hours during your age</span>
                        <span class="dd">Work hours during your age</span>
                        <span class="hh">Worship hours during your age</span>
                        <span class="tt">Lost time during your age</span>
                    </div>
                    <div class="res">
                        <ul>
                            <li id="slpt">---</li>
                            <li id="worked">---</li>
                            <li id="prays">---</li>
                            <li id="lost">---</li>
                        </ul>
                    </div>
                </div>
                <h1 class="sca">Additional information</h1>
                <div class="ather backed">
                    <div id="brith"></div>
                    <div id="born"></div>
                    <div id="dborn"></div>
                </div>
                 <div class="hello backed">
                    <div class="art" id="thi">
                       
                    </div>
                </div>
            </div >
            </div>
        <div class="comment">
            <div class="cont">
                <form action="" method="POST" class="looon">
                    <label>Comment</label>
                    <textarea name="comment" class="backed looon" placeholder="Write a comment"></textarea>
                    <button type="submit" class="btn bottonss zero">Comment</button>
                </form>
            </div>
        </div>

        <div class="footer looon backed">
            <div class="cont">
                <div class="copy">
                    <div class="icon">Calculate your time &copy; 2019</div>
                    <div class="icon looon">
                        <i class="fab fa-twitter-square fa-2x"></i>
                        <i class="fab fa-facebook fa-2x"></i>
                        <i class="fab fa-google-plus  fa-2x"></i>
                        <i class="fab fa-linkedin-in fa-2x" ></i>
                        <i class="fab fa-whatsapp-square fa-2x" ></i>
                        <i class="fab fa-instagram fa-2x"></i>
                    </div>
                </div>
                <div class="me">
                    <p>Front end: <a href="https://www.facebook.com/CABOPO1">Yousef Mohamed</a></p>
                    <p>Back end: <a href="https://www.facebook.com/ahmedashraf25800">Ahmed Ashraf</a></p>
                    <p>Designer: <a href="https://www.facebook.com/mohamad.mahdy.902">Mohamad El-Mahdy</a></p>
                </div>
            </div>
        </div>
        
        <script src="JS/calc.js"></script>
        
            </body>
</html>