var y = Math.floor(Math.random() * 10 + 1);

var loop = 3;

function checkNumber(x) {
    if (loop != 0) {
        if(x==y){
            document.getElementById("number"+x).classList.remove('number');
            document.getElementById("number"+x).classList.toggle('numberGreen');
            loop=0;
            document.getElementById("arrow").src="img/tick.png";
            document.getElementById("arrow").style="border:4px solid greenyellow; border-radius:30px; height: 48px; width: 48px;"
        }
        else if(x>y){
            document.getElementById("number"+x).classList.remove('number');
            document.getElementById("number"+x).classList.toggle('numberRed');
            --loop;
            document.getElementById("loop").innerHTML=loop;
            document.getElementById("arrow").src="img/down.png";
            document.getElementById("arrow").style="border:4px solid darkOrange; border-radius:30px; height: 48px; width: 48px;"
        }
        else{
            document.getElementById("number"+x).classList.remove('number');
            document.getElementById("number"+x).classList.toggle('numberRed');
            --loop;
            document.getElementById("loop").innerHTML=loop;
            document.getElementById("arrow").src="img/up.png";
            document.getElementById("arrow").style="border:4px solid darkOrange; border-radius:30px; height: 48px; width: 48px;"
        }
    }
    else{
        alert("Oyun Bitti");
        document.getElementById("restartBtn").classList.remove("restarFalse");
        document.getElementById("restartBtn").classList.toggle("restarTrue");
    }
}

function restart(){
    location.reload();
}