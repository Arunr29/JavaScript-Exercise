function drumKitsFunction(e) {
    // console.log(e.keyCode);
    //get a specific audio element when we click using querySelector
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    //get a specific audio element to play when we click using querySelector
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;// no audio found
    audio.currentTime = 0;//restart to start for each sound
    audio.play(); //play the selected keycode
    key.classList.add('playing') // add style yellow colour
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip the transform
    this.classList.remove('playing'); // remove style colour yellow
    // console.log(this);
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', drumKitsFunction)