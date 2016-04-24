
var name = "Change Me Back!";
var name2 = "Change Me!";
var state;

// How to change the state back and forth

  var hello = function (){
    if(state === 0){
        state = 1;
        document.getElementById("test").innerHTML = name2;
        document.getElementById("test").style.backgroundColor = "red"
    }else{
        state = 0;
        document.getElementById("test").innerHTML = name;
        document.getElementById("test").style.backgroundColor = "blue"
    }
}