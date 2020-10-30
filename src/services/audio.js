import * as Tone from 'tone';

let theme = null;
let isMuted = false;
let vol = new Tone.Volume().toDestination();
let missCount = 0;
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

function hitSound(){
    missCount = 0;
    !isMuted && playEffect('mp3s/hit.mp3')
};

function destroyedSound(){
    !isMuted && playEffect('mp3s/destroyed.mp3')
};

const Audio = {
    
    async playTheme(file) {
        theme && await theme.dispose()
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

    attackSound(hit=false, destroyed=false) {
        if(hit === true) {
          destroyed === true
            ? setTimeout(destroyedSound, 200)
            : setTimeout(hitSound, 200)
        } else {
             missCount++
             missCount % 10 === 0
                ? !isMuted && playEffect('mp3s/squeak.mp3')
                : !isMuted && playEffect('mp3s/laser.mp3')
        }
    },

    setVol(val) {
        vol.volume.value = val
    },

    laser() {
        !isMuted && playEffect('mp3s/laser.mp3')
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

    stop() {
        theme && theme.stop()
        theme && theme.dispose()
    },

    mute() {
        isMuted = !isMuted
        theme && (theme._volume.mute = !theme._volume.mute)
    },
}

export default Audio;
export {isMuted}