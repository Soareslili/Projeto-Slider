 let btnNext = document.querySelector('.next')
 let btnBack = document.querySelector('.back')

 let container = document.querySelector('.container')
 let list = document.querySelector('.container .list')
 let card = document.querySelector('.container .card')

btnNext.onclick = () => moveitemonclick('next')
btnBack.onclick = () => moveitemonclick('back')

 function moveitemonclick(type){
    let listitem =document.querySelectorAll('.list .list-item')
    let carditem =document.querySelectorAll('.card .card-item')

    
    if(type === 'next'){
        list.appendChild(listitem[0])
        card.appendChild(carditem[0])
        container.classList.add('next')
        } else {
        list.prepend(listitem[listitem.length - 1])
        card.prepend(carditem[carditem.length - 1])
        container.classList.add('back')
    }

    setTimeout(() => {
        container.classList.remove('next')
        container.classList.remove('back')
    }, 3000);
 }