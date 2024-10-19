const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

const textCanvas = document.getElementById('TextOverlay');
const textContext = textCanvas.getContext('2d');

canvas.width = textCanvas.width = window.innerWidth;
canvas.height = textCanvas.height = window.innerHeight;

const arab = '۰۱۲۳٤۴٦ ۶۷۹۸۹۱۰’،]ـًآَ’َن×ً۰۱۲۳٤۴٦ ۶۷۹۸۹۱۰۰۱۲۳٤۴٦ ۶۷۹۸۹۱۰۰۱۲۳٤۴٦ ۶۷۹۸۹۱۰';
const egypt = '𓀁𓀆';
const latin = 'Ahmed_Should_be_accepted_into_rice_university';
const nums = '0123456789101111111111111111111111111100000000000000000000000000000000000';

const alphabet = arab + latin + nums + egypt;

const fontSize = 16;
const columns = canvas.width / fontSize;

const rainDrops = [];
freeze = false;
for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
}

// Function to draw text on top of the matrix rain
n1 = '';
index1 = 0;
Spaces = "";
const drawText1 = () => {
    textContext.clearRect(0, 0, textCanvas.width, textCanvas.height);
    textContext.fillStyle = 'rgb(255, 87, 51)';
    textContext.font = `${fontSize*4}px monospace`;
    s1 = 'System.out.println(';
   
    
    setTimeout(function(){
        if(n1!= s1){
        n1+= s1.substring(index1,index1+1);
        Spaces += " ";
        }
    
    index1++;
    },1200);
    textContext.fillText(n1, canvas.width/2-650,canvas.height/2); // Adjust position as needed
};
n2 = '';
index2 = 0;
const drawText2 = () => {
    if(s1== n1){
        
    
        s2 ="\"Hello, World!\"";
    
    textContext.fillStyle = 'rgb(201, 54, 54)';
    textContext.font = `${fontSize*4}px monospace`;
    
   
    
        if(n2!= s2){
        n2+= s2.substring(index2,index2+1);
        Spaces2+= " "
    index2++;
}
    
    textContext.fillText(Spaces +n2, canvas.width/2-650,canvas.height/2); // Adjust position as needed
} else{
    Spaces2 = " "+Spaces;
}
};
n3 = '';
index3 = 0;
Spaces3= Spaces;
const drawText3 = () => {
    if(s2== n2){
        
    
        s3 =")";
    
        textContext.fillStyle = 'rgb(255, 87, 51)';
    textContext.font = `${fontSize*4}px monospace`;
    
   
    
        if(n3!= s3){
        n3+= s3.substring(index3,index3+1);
        Spaces3+= " "
    index3++;
}
    
    textContext.fillText(Spaces2+n3, canvas.width/2-650,canvas.height/2); // Adjust position as needed
} else{
    Spaces3 = " "+ Spaces2;
}
};


n4 = '';
index4 = 0;
Spaces4= Spaces;
const drawText4 = () => {
    if(s3== n3){
        
    
        s4 =";";
    
        textContext.fillStyle = 'rgb(255,255, 255)';
    textContext.font = `${fontSize*4}px monospace`;
    
   
    
        if(n4!= s4){
        n4+= s4.substring(index4,index4+1);
        Spaces4+= " "
    index4++;
}
    
    textContext.fillText(Spaces3+n4, canvas.width/2-650,canvas.height/2); // Adjust position as needed
    if(n4 == s4){
        setTimeout(() => {  freeze = true; }, 2000);
       
    }
} else{
    Spaces4 = " "+ Spaces3;
}
};


const draw = () => {
    context.fillStyle = 'rgba(14, 2, 2, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#FF3333';
    context.font = `${fontSize}px monospace`;
    if(freeze){
    clearInterval(x);
    clearInterval(x2);
    clearInterval(x3);
    clearInterval(x4);
    clearInterval(x5);
    location.replace("page.html");
    
    }
    for (let i = rainDrops.length; i >= 0; i--) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }
        rainDrops[i]+=1;
    }

    // Call the function to draw text on top of the matrix rain
    s
};

var x = setInterval(draw, 15)
var x2 = setInterval(drawText1, 25)

var x3 = setInterval(drawText2, 25)

var x4 = setInterval(drawText3, 25)

var x5 = setInterval(drawText4, 25)