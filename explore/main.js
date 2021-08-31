let desert = document.querySelector('#desert') ;
let night = document.querySelector('#night') ;
let moon = document.querySelector('#moon') ;
// this is the content background
let content_div = document.querySelector('.content');

desert.onclick = () => {
    content_div.style.background = 'url(./images/image2.jpeg)no-repeat';
    document.querySelector('.text').textContent = "desert";
}
night.onclick = () => {
    content_div.style.background = 'url(./images/image3.jpeg)no-repeat';
    document.querySelector('.text').textContent = "night";
}
moon.onclick = () => {
    content_div.style.background = 'url(./images/image4.jpeg)no-repeat';
    document.querySelector('.text').textContent = "moon";
}