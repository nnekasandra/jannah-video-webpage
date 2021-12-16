let followBtn = document.getElementById('follow');
let smLinks = document.getElementById('sm-links');
followBtn.addEventListener('mousemove',function(){
    smLinks.style.visibility = 'visible';
    followBtn.appendChild(smLinks);
})