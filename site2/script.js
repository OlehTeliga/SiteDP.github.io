function dwiki(){
    window.location.href = 'https://ru.wikipedia.org/wiki/Dungeons_%26_Dragons';
}
function wwiki(){
    window.location.href = 'https://ru.wikipedia.org/wiki/Warhammer_40,000';
}
function tg(){
    window.location.href ='https://t.me/BoardGameFinder_bot';
}

let idBack = false;

function warlp(){
    
    const body = document.body;
    if(!idBack)
        {
            body.style.backgroundImage = "url('back2.jpg')";
            idBack = true;
        }
    else{
            body.style.backgroundImage = "url('back1.jpg')";
            idBack = false;
        }
}