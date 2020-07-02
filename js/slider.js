const slider = document.querySelector(".slider"),
images = slider.querySelectorAll(".slide-img");

let count=0;
let interval =intervalSlide();
let timer;

slider.addEventListener("click",(e)=>
{
    if (e.target.closest(".left-btn"))
    {
        slide("left",images);
    }
    else if (e.target.closest(".right-btn"))
    {
        slide("right",images,"user");
    }
})

function allImgHide(imgages)
{

    images.forEach(element => {
        element.style.display="none";
    });
}
function slide(x,images,operator)
{
    
    allImgHide(images);
    if (x=="left")
    {
        count--;

        if (count<0)
        {
            count=images.length;
        }
        
    }
    else if (x=="right")
    {
        count++;
        
        if (count>=images.length)
        {
            count=0;
        }
    }
    if (operator=="user"){
        clearInterval(interval);
    clearTimeout(timer);
    timer=setTimeout(() => {
        interval =intervalSlide();
    }, 10000);
}

    

    images[count].style.display="block";
}
slide("none",images);
function intervalSlide()
{

    
   let intervalTemp = setInterval(()=>
    {

    slide("right",images,"auto");
 
    
    },5000)
    return intervalTemp;

}
