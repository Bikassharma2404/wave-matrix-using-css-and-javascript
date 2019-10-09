var c= 0;
var spans = document.getElementsByTagName('span');
let maxWidth = innerWidth;
let maxHeight = innerHeight - 200;

const run = function(){      
    for (var i=0;i< spans.length;i++) {
        spans[i].style.top = maxHeight*Math.sin(Math.PI * (i+c)/spans.length) + maxHeight + 'px';
        spans[i].style.left = (10*i + c)%maxWidth + 'px';
    }   
    
    c++;       
    requestAnimationFrame(run)
 };


function randLetter() {
    var letters = ["0","1","2","3","4","5","6","7","8","9","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var letter = letters[Math.floor(Math.random() * letters.length)];
    return letter
}


onload = init;

function init() {
    for(var i=0;i<100;i++) {
        var span = document.createElement("span");
        var text = document.createTextNode(randLetter());
        span.appendChild(text);
        document.body.appendChild(span);
    }
        
    requestAnimationFrame(run);
}
