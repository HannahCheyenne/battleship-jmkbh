import * as Tone from 'tone'

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
let mute = false;
const path = process.env.PUBLIC_URL

async function playEffect(effect) {
    const sound = new Tone.Player(path + effect)
    .toDestination()
    try {
        await Tone.loaded()
    }
    catch (e) {
        console.error(e)
        throw (e)
    }
    sound.start()
};

function laserSound() {
    !mute && playEffect('mp3s/laser.mp3')
};

function hitSound(){
    !mute && playEffect('mp3s/hit.mp3')
};

function missSound(){
    !mute && playEffect('mp3s/miss.mp3')
};

function destroyedSound(){
    !mute && playEffect('mp3s/destroyed.mp3')
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
                .toDestination()
        } else {
            theme = new Tone.Player({
                url: `${path}mp3s/${file}`,
                loop: false
                })
                .toDestination()
        }
        theme.context._latencyHint = 'playback'
        try {
            await Tone.loaded()
        }
        catch (e) {
            console.error(e)
            throw (e)
        }
        !mute && theme.start()
    },

    attackSound(hit, destroyed=false) {
        laserSound()
        hit === true
          ? destroyed === true
            ? setTimeout(destroyedSound, 200)
            : setTimeout(hitSound, 200)
          : setTimeout(missSound, 200)
    },

    soft() {
        !mute && playEffect('mp3s/soft.mp3')
    },

    click() {
        !mute && playEffect('mp3s/click.mp3')
    },

    positioned() {
        !mute && playEffect('mp3s/positioned.mp3')
    },

    err() {
        !mute && playEffect('mp3s/err.mp3')
    },

    stop() {
        theme && theme.stop()
    },

    mute() {
        mute = !mute
        theme && (theme._volume.mute = !theme._volume.mute)
    },
}

export default Audio;