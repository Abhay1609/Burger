const navMenu=document.getElementById('nav-menu'),
    navToggle=document.getElementById('nav-toggle'),
    navClose=document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click',()=>{
        
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click',()=>{
        //console.log("jjs")
        navMenu.classList.remove('show-menu')
    })
}

const navLink=document.querySelectorAll('.nav__link')
const linkAction=()=>{
    const navMenu=document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction));

const shadowHeader=()=>{
    const header=document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                    :header.classList.remove('shadow-header')
}
window.addEventListener('scroll',shadowHeader)

const scrollUp =()=>{

    const scrollUp=document.getElementById('scroll-up')
    this.scrollY >= 350?scrollUp.classList.add('show-scroll')
                        :scrollUp.classList.remove('show-scroll')

}
window.addEventListener('scroll',scrollUp)


const section = document.querySelectorAll('section[id]')
const scrollActive=()=>{
    const scrollDown = window.scrollY
    section.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId= current.getAttribute('id')
        sectionClass=document.querySelector('.nav__menu a[href*=' + sectionId +']')
        //console.log(sectionId,'sid',sectionHeight+sectionTop,"less",sectionTop,"st","scroldown",scrollDown)

    if(scrollDown>sectionTop && scrollDown<= sectionTop+sectionHeight){
    sectionClass.classList.add('active-link')
    }else{
        sectionClass.classList.remove('active-link')
    }

    })
}
window.addEventListener('scroll',scrollActive)
// ANimatyion
const sr=ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:300,
    //reset:true,//Animations repeat

})
sr.reveal(`.home__data, .footer`)
sr.reveal(`.home__dish`,{delay:500,distance:'100px',origin:'bottom'})
sr.reveal(`.home__burger`,{delay:1200,distance:'100px',duration:1500})
sr.reveal(`.home__ingredient`,{delay:1600,invterval:100})
sr.reveal(`.recipe__img, .delivery__img, .contact__image`,{origin:'left'})
sr.reveal(`.recipe__data, .delivery__data, .contact__data `,{origin:'right'})
sr.reveal(`.popular__card`,{interval:100})
//sr.reveal(`.receipe__img`,{origin:'left'})
// function even(n){
//     return n&1
// }
// console.log(even(211),even(128))
// function magic(n,i){
//     if(i==8){
//         return 0
//     }
//     let lastdigit=n&1;
//     console.log(lastdigit,i)
//     return (Math.pow(5,i+1)*lastdigit)+magic(n>>1,i+1)

// }
// console.log(magic(6,0),'result')
// console.log(4&1,"and")
// console.log(Math.floor(Math.log(6)/Math.log(2))+1)//no of digit in that number of base b
// let n=5;
// console.log(1<<(n-1))//use to represent the sum of pascal triangle in n row
// console.log(n&(n-1))//use ot check whether power of 2
// //find a**b
// let power=4
// let base=2
// let ans=1
// while(power>0){
//     last=power&n;
//     if(last==1){
//     ans*=base;}
//     power=power>>1;
//     base*=base

// }
// console.log("baase",ans)
// console.log('f')
// count=0
// n=7 ///no. set bits
// while(n>0){
//     count++;
//     n-=n&(n-1)
// }
// console.log("count")
// console.log(count)
//sum of digit 
function sum(n){
    if(n==0){
        return 0
    }else{
        return sum(n/10)+n%10
    }

}
console.log(154)