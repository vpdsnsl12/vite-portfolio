import Splide from '@splidejs/splide';
new Splide('#splide1').mount();
new Splide('#splide1').mount();
new Splide('#splide1').mount();
export function splide(){
    const ltlElens=document.querySelectorAll('.ltl')
    const rtlElens=document.querySelectorAll('.rtl')

    ltlElens.forEach(ltElen=>{
        const splide=new Splide(ltElem,{
            type:"loop",
            drag:true,
            autoWidth:true,
            gap:30,
            pagination:false,
            arrows:false,
            autoScroll:{
                speed:1.5,
                pauseOnHover:true
            }
        })
        splide.mount(window.splide.Extensions)
    })
}