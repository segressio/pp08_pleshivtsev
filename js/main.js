const popupOrderCall = document.getElementById("call-order"),
popupOrderReq = document.getElementById("request-order"),
buttons = document.querySelectorAll(".order-button");

    document.addEventListener("click",(e)=>
    {
        if (e.target==buttons[0])
        {
            allPopupClose()
            popupOrderCall.classList.toggle("open");
        }
        else if (e.target==buttons[1])
        {
            allPopupClose()
            popupOrderReq.classList.toggle("open");
        }
        else if (!e.target.closest(".popup-call")){
            allPopupClose()
        }
        else if ( e.target.type=="submit")
        {
            e.target.closest(".popup-call").classList.remove("open");
        }
    })
function allPopupClose()
{
    popupOrderCall.classList.remove("open");
    popupOrderReq.classList.remove("open");
}


