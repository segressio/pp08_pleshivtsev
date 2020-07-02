const menu = document.querySelector(".cart"),
cartBtn=document.querySelector(".cart-button");

cartBtn.addEventListener("click",(e)=>
{
    cartBtn.classList.toggle("close");
    menu.classList.toggle("close");

})
menu.addEventListener("click",(e)=>
{
    if (e.target.classList.contains("cart-close"))
    {
        cartBtn.classList.toggle("close");
        menu.classList.toggle("close");
    }
})