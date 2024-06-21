// elements
const allImagesSpansArray = document.querySelectorAll('.all-imgs-span')
const imageContainerArray = document.querySelectorAll('.img-container')

// animation function
function animationScrollTrigger(target, animation){
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };
    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animation);
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(target)
}

for(let i = 0; i < allImagesSpansArray.length; i++){
    animationScrollTrigger(allImagesSpansArray[i], 'all-imgs-span-animation')
}
for(let i = 0; i < imageContainerArray.length; i++){
    animationScrollTrigger(imageContainerArray[i], 'img-container-animation')
}
