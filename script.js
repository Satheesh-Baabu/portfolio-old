

window.addEventListener('scroll', function() {
    var scrollDiv = document.querySelector('.left');
    var scrollDiv5= document.querySelector('.right');
    var scrollDiv2= document.querySelector('.right-co');
    var scrollDiv3= document.querySelector('.right-co1');
    var scrollDiv4= document.querySelector('.right-co2');
    // var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var divPosition = scrollDiv.getBoundingClientRect();

    if (divPosition.top < windowHeight) {
        scrollDiv.classList.add('anim');
        scrollDiv5.classList.add('anim');
        scrollDiv2.classList.add('insertanim');
        scrollDiv3.classList.add('insertanim');
        scrollDiv4.classList.add('insertanim');
    }
    else
    {
        scrollDiv.classList.remove('anim');
        scrollDiv5.classList.remove('anim');
        scrollDiv2.classList.remove('insertanim');
        scrollDiv3.classList.remove('insertanim');
        scrollDiv4.classList.remove('insertanim');
    }
});
  
function submited()
{
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    if(name !="" && email != "")
        alert("Message Sent !");
}
