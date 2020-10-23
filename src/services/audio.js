import * as Tone from 'tone';

/* 
// --- Integrate into game's attack function for appropriate sound ---

// This function takes one or two boolean parameters.
// 1. Was it a hit? (required)
// 2. If it was a hit, was it destroyed? (not required, defaults to false)

    handleAttack = () => {
        Audio.attackSound(true)
    }

 */

let theme = null;
let isMuted = false;
let vol = new Tone.Volume().toDestination();
const path = process.env.PUBLIC_URL

async function playEffect(effect) {
    const sound = new Tone.Player(path + effect)
    try {
        await Tone.loaded()
    }
    catch (e) {
        console.error(e)
        throw (e)
    }
    sound.connect(vol).start()
};

function laserSound() {
    !isMuted && playEffect('mp3s/laser.mp3')
};

function hitSound(){
    !isMuted && playEffect('mp3s/hit.mp3')
};

function missSound(){
    !isMuted && playEffect('mp3s/miss.mp3')
};

function destroyedSound(){
    !isMuted && playEffect('mp3s/destroyed.mp3')
};

const Audio = {
    
    async playTheme(file) {
        theme && await theme.stop()
        if(file !== 'win.mp3' && file !== 'lose.mp3'){
            theme = new Tone.Player({
                url: `${path}mp3s/${file}`,
                loop: true,
                loopEnd: 102.6
                })
        } else {
            theme = new Tone.Player({
                url: `${path}mp3s/${file}`,
                loop: false
                })
        }
        theme.context._latencyHint = 'playback'
        try {
            await Tone.loaded()
        }
        catch (e) {
            console.error(e)
            throw (e)
        }
        isMuted && theme && (theme._volume.mute = !theme._volume.mute)
        theme.connect(vol).start()
    },

    attackSound(hit, destroyed=false) {
        laserSound()
        hit === true
          ? destroyed === true
            ? setTimeout(destroyedSound, 200)
            : setTimeout(hitSound, 200)
          : setTimeout(missSound, 200)
    },

    setVol(val) {
        vol.volume.value = val
    },

    soft() {
        !isMuted && playEffect('mp3s/soft.mp3')
    },

    click() {
        !isMuted && playEffect('mp3s/click.mp3')
    },

    positioned() {
        !isMuted && playEffect('mp3s/positioned.mp3')
    },

    err() {
        !isMuted && playEffect('mp3s/err.mp3')
    },

    stop() {
        theme && theme.stop()
    },

    mute() {
        isMuted = !isMuted
        theme && (theme._volume.mute = !theme._volume.mute)
    },
}

export default Audio;
export {isMuted}