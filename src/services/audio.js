import * as Tone from 'tone'

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

const Audio = {
    
    async playTheme(file) {
        theme && await theme.stop()
        if(file !== 'win.mp3' && file !== 'lose.mp3'){
            theme = new Tone.Player({
                url: `${path}mp3s/${file}`,
                loop: true
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

    laser() {
        !mute && playEffect('mp3s/laser.mp3')
    },

    hit(){
        !mute && playEffect('mp3s/hit.mp3')
    },

    miss(){
        !mute && playEffect('mp3s/miss.mp3')
    },

    destroyed(){
        !mute && playEffect('mp3s/destroyed.mp3')
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