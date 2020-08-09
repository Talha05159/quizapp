var name = prompt("Enter Your Full Name");
alert("Welcome " + " " + name)

onpageshow

function quiz() {  

    
var score = 0

   var rightanswer  = document.getElementById("q1o1");
   var a = document.getElementById("q1o2");
   var b = document.getElementById("q1o3");
   var c = document.getElementById("q1o4");
   if (rightanswer.checked == true){
         score ++
         alert("Question # 1 is correct!")
   }else{
      alert("Question # 1 is wrong!")
      score
   }

   var d = document.getElementById("q2o1");
   var e = document.getElementById("q2o2");
 var f = document.getElementById("q2o3");
   var rightanswer2 = document.getElementById("q2o4");
   if (rightanswer2.checked == true){
      score ++
      alert("Question # 2 is correct!")
}else{
   alert("Question # 2 is wrong!")
    score
}



var g = document.getElementById("q3o1")
var h = document.getElementById("q3o2")
var rightanswer3 = document.getElementById("q3o3")
var i = document.getElementById("q3o4")
if (rightanswer3.checked == true){
   alert("Question # 3 is correct!")
   score ++
}else{
   alert("Question # 3 is wrong!")
   score
}

var j = document.getElementById("q4o1")
var rightanswer4 = document.getElementById("q4o2")
var k = document.getElementById("q4o3")
var l = document.getElementById("q4o4")
if (rightanswer4.checked == true){
  score ++
  alert("Question # 4 is correct!")
}else{
 score
 alert("Question # 4 is wrong!")

}

var rightanswer5 = document.getElementById("q5o1")
var m = document.getElementById("q5o2")
var n = document.getElementById("q5o3")
var o = document.getElementById("q5o4")
if (rightanswer5.checked == true){
  score ++
  alert("Question # 5 is correct!")
}else{
 score
 alert("Question # 5 is wrong!")
}
document.write("Name : " + " " + name + " <br>")  
document.write("Score :" + " " + score + " " + " out of 5 " + " <br>")  

   }












































