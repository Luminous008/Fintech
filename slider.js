




let imageVar = document.getElementById("image");
let imageArray = [ "./slider/slide1.jpg", "./slider/slide2.jpg", "./slider/slide3.jpg", "./slider/slide4.jpg", 
"./slider/slide5.jpg"];

let imageIndex = 0;

function slideShow(){
    imageVar.setAttribute("src", imageArray[imageIndex]);
    imageIndex++

    if(imageIndex >= imageArray.length){
        //return
        imageIndex = 0;
    }

}


setInterval(slideShow, 10000);