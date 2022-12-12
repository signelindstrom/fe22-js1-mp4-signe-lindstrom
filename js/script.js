const playBtn = document.querySelector('#play');
const pauseBtn = document.querySelector('#pause');
const stopBtn = document.querySelector('#stop');


const planetAnimation = anime.timeline({
    duration: 5000,
    loop: true,
    easing: 'easeInOutQuad',
    direction: 'alternate',
})

planetAnimation
    .add({
        targets: '#sun',
        rotate: '360deg',
    }, 0)

planetAnimation
    .add({
        targets: '#mercury',
        translateX: '-1px',
        translateY: '50px',
        scale: 1.5,
        boxShadow: '1px 0px 65px -5px rgba(255,255,255,0.71)'
    }, 0)

planetAnimation
    .add({
        targets: '#venus',
        translateX: '-3px',
        translateY: '-52px',
        scale: 1.5,
        boxShadow: '1px 0px 65px -5px rgba(255,255,255,0.71)'
    }, 0)

planetAnimation
    .add({
        targets: '#earth',
        translateX: '-10px',
        translateY: '-95px',
        scale: 1.5,
        boxShadow: '1px 0px 65px -5px rgba(255,255,255,0.71)'
    }, 0)

planetAnimation
    .add({
        targets: '#mars',
        translateX: '-10px',
        translateY: '95px',
        scale: 1.5,
        boxShadow: '1px 0px 65px -5px rgba(255,255,255,0.71)'
    }, 0)

planetAnimation
    .add({
        targets: '#jupiter',
        translateX: '-5px',
        translateY: '-35px',
        scale: 1.5,
        boxShadow: '1px 0px 65px -5px rgba(255,255,255,0.71)'
    }, 0)

planetAnimation
    .add({
        targets: '#saturn',
        translateX: '-5px',
        translateY: '65px',
        scale: 1.5,
        boxShadow: '1px 0px 65px -5px rgba(255,255,255,0.71)'
    }, 0)

planetAnimation
    .add({
        targets: '#uranus',
        translateX: '-13px',
        translateY: '105px',
        scale: 1.5,
        boxShadow: '1px 0px 65px -5px rgba(255,255,255,0.71)'
    }, 0)

planetAnimation
    .add({
        targets: '#neptune',
        translateX: '-13px',
        translateY: '-105px',
        scale: 1.5,
        boxShadow: '1px 0px 65px -5px rgba(255,255,255,0.71)'
    }, 0)

planetAnimation
    .add({
        targets: '#pluto',
        translateX: '-4px',
        translateY: '65px',
        scale: 1.5,
        boxShadow: '1px 0px 65px -5px rgba(255,255,255,0.71)'
    }, 0)


playBtn.addEventListener('click', planetAnimation.play);
pauseBtn.addEventListener('click', planetAnimation.pause);
stopBtn.addEventListener('click', planetAnimation.restart);