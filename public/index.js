let scrollTopBtn = document.getElementById("top");
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
      } else {
        scrollTopBtn.style.display = "none";
      }
};

function scrollToTop(){
  function topFunction() {
    if (document.documentElement.scrollTop <= 0){
      window.clearInterval(interval);
    }else{
      document.documentElement.scrollTop -= 50;
    }
  }
  let interval = window.setInterval(topFunction, 10);
}

// let hovers = document.getElementsByClassName('hover-class');
// let timeouts = [];
// for(let hover of hovers){
//   hover.addEventListener('mouseover', function(e){
//     let div = e.target.children[e.target.children.length-1];
//     div.style.visibility = 'visible';
//     let boxes = div.children;
//     let time = 0;
//     for(let box of boxes){
//       let timeout = setTimeout(function(){box.style.visibility = 'visible';}, time);
//       timeouts.push(timeout);
//       time+=100;
//     }
//   });
//   //---------- this is the mouseout version below-----------------
//   hover.addEventListener('mouseout', function(e){
//     let div = e.target.children[e.target.children.length-1];
//     div.style.visibility = 'hidden';
//     let boxes = div.children;
//     for(let timeout of timeouts){
//       clearTimeout(timeout);
//     }
//     timeouts = [];
//     for(let box of boxes){
//       box.style.visibility = 'hidden'
//     }
//   });
// }
