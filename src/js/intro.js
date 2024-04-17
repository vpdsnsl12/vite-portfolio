import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'

export function intro() {
    gsap.registerPlugin(ScrollTrigger)
    const frameConunt = 7
    let offsetValue = 358


    gsap.to('.img', {
        backgroundPosition: (-offsetValue* frameConunt) + 'px',
        ease: 'steps(' + frameConunt + ')',
        scrollTrigger: {
            trigger: '#intro',
            start: 'top top',
            end: '+=' + (frameConunt * offsetValue),
            pin: true,
            scrub: true
        }
    })
}