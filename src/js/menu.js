export function menu(){
    const headerToggle=document.getElementById('headerToggle')
    const headerNav=document.querySelector('.header_nav')

    if(headerToggle){
        headerToggle.addEventListener('click',function(){
            headerNav.classList.toggle('show')
            // 조건식
            headerToggle.getAttribute("aria-expanded")=='true'
            // true이면
            ?headerToggle.setAttribute('aria-expanded','false')
            // false이면
            : headerToggle.setAttribute('aria-expanded','true')
        })
    }
}