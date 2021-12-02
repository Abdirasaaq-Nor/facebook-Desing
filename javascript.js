const bars =  document.getElementById('bars')
const showme = document.getElementById('showme');

bars.addEventListener('click', () => {
    showme.style.display= "block"
    showme.style.zIndex= "40"
})


const close = document.getElementById('close')
close.addEventListener('click', () => {
    showme.style.display= "none"
})