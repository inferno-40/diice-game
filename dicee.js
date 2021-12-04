var ran1=Math.floor(Math.random()*6)+1;
var ran2=Math.floor(Math.random()*6)+1;
var src1= "images/dice"+ran1+".png";
var src2= "images/dice"+ran2+".png";
var image1=document.getElementsByClassName("img1")[0];
var image2=document.getElementsByClassName("img2")[0];
image1.setAttribute("src",src1);
image2.setAttribute("src",src2);
var result = document.getElementsByTagName("h1")[0];
if(ran1>ran2){
    result.innerText="Player 1 Wins";
}
else if(ran1<ran2){
    result.innerText="Player 2 Wins";
}
else{
    result.innerText="Draw";
}


