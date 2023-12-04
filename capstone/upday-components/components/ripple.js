export function createRippleAnimation(e, element, animate) {
    const rect = element.getBoundingClientRect();
    /* x position within the element. */
    const x = e.clientX - rect.left;
    /* y position within the element. */
    const y = e.clientY - rect.top;
    const ripple = document.createElement('span');
    const diameter = Math.max(
      getHypotenuse(x, y),
      getHypotenuse(y, element.clientWidth - x),
      getHypotenuse(element.clientWidth - x, element.clientHeight - y),
      getHypotenuse(x, element.clientHeight - y)
    );
    const radius = diameter / 2;
  
    ripple.style.width = `${diameter}px`;
    ripple.style.height = `${diameter}px`;
    ripple.style.left = `${x - radius}px`;
    ripple.style.top = `${y - radius}px`;
    ripple.classList.add('ripple');
    ripple.animationStartTime = new Date().getTime();
  
    if (!animate) {
      ripple.style.transform = 'scale(2.1)';
    }
  
    element.addEventListener('pointercancel', (event) => {
      removeRippleAnimation(event, element);
    });
    element.addEventListener('pointerup', (event) => {
      removeRippleAnimation(event, element);
    });
    element.addEventListener('pointerleave', (event) => {
      removeRippleAnimation(event, element);
    });
    element.appendChild(ripple);
  }
  
  export function removeRippleAnimation(e, element) {
    const ripples = e.currentTarget.getElementsByClassName('ripple');
    for (let i = 0; i < ripples.length; i++) {
      const ripple = ripples[i];
      if (ripple) {
        setTimeout(() => {
          ripple.style.backgroundColor = 'transparent';
          ripple.style.transition = 'background-color 150ms linear';
          setTimeout(() => {
            ripple.remove();
          }, 10);
        }, 350 - (new Date().getTime() - ripple.animationStartTime));
      }
    }
  }
  
  function getHypotenuse(a, b) {
    return Math.sqrt(a * a + b * b);
  }
  