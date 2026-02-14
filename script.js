
const allIframes = document.querySelectorAll('iframe');
allIframes.forEach(iframe => {
    iframe.addEventListener('click', () => {
        allIframes.forEach(otherIframe => {
            if (otherIframe !== iframe) {
                
                let src = otherIframe.src;
                otherIframe.src = src; 
            }
        });
    });
});
