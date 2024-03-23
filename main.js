  const keys = document.querySelectorAll('.key');
  const audios = document.querySelectorAll('audio');

    /* Empêche l'événement de raccourci clavier JavaScript d'être géré plusieurs fois tout en étant maintenu enfoncé */
window.addEventListener('keydown', function(e) {
    if (e.repeat) {
        return
    }
    
    /* Faire correspondre les keyCode et les data-key puis jouer les sons */
    audios.forEach(audio => {
        if (e.keyCode == audio.getAttribute('data-key')) {
                audio.currentTime = 0;
                audio.play();
        }
    })
    
    /* Si le keyCode corrrespond au data-key, ajouter les effets CSS */
 
    keys.forEach(key => {
        if (e.keyCode == key.getAttribute('data-key')) {   
                key.classList.add('playing')
                key.addEventListener('transitionend', function(e) {
                    key.classList.remove('playing')
                })
        }
    })
})


//DECLARATION

async function beatBox() {
    function simulateKey(key) {
        var boxkey = new Event('keydown',{
            bubbles : true
        });
        boxkey.keyCode = key
        window.dispatchEvent(boxkey)
    }
    function playBeat(time,key){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
            resolve(simulateKey(key));
            },time)
        })   
    }

    await playBeat(50, 90)
    await playBeat(400, 83)
    await playBeat(50, 67)
    await playBeat(420, 83)
    await playBeat(420, 83)
    await playBeat(420, 83)
   
    await playBeat(50, 90)
    await playBeat(420, 83)
    await playBeat(50, 67)
    await playBeat(420, 83)
    await playBeat(420, 83)
    await playBeat(420, 83)
    
    await playBeat(50, 90)
    await playBeat(420, 83)
    await playBeat(50, 67)
    await playBeat(420, 83)
    await playBeat(420, 83)
    await playBeat(420, 83)
    
    await playBeat(50, 90)
    await playBeat(420, 83)
    await playBeat(50, 67)
    await playBeat(420, 83)
    await playBeat(420, 83)
    await playBeat(420, 83)
    
    await playBeat(50, 90)
    await playBeat(420, 83)
    await playBeat(50, 67)
    await playBeat(420, 83)
    await playBeat(420, 83)
    await playBeat(420, 83)
    
}