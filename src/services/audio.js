import * as Tone from 'tone'

const Audio = {

    music: null,

    async laser(){
        const sound = new Tone.Player(
            process.env.PUBLIC_URL + 'mp3s/laser.mp3'
        )
        .toDestination()
        try {
            await Tone.loaded()
        }
        catch (e) {
            console.error(e)
            throw (e)
        }
        sound.start()
    },

    async hit(){
        const sound = new Tone.Player(
            process.env.PUBLIC_URL + 'mp3s/hit.mp3'
        )
        .toDestination()
        try {
            await Tone.loaded()
        }
        catch (e) {
            console.error(e)
            throw (e)
        }
        sound.start()
    },

    async miss(){
        const sound = new Tone.Player(
            process.env.PUBLIC_URL + 'mp3s/miss.mp3'
        )
        .toDestination()
        try {
            await Tone.loaded()
        }
        catch (e) {
            console.error(e)
            throw (e)
        }
        sound.start()
    },

    async destroyed(){
        const sound = new Tone.Player(
            process.env.PUBLIC_URL + 'mp3s/destroyed.mp3'
        )
        .toDestination()
        try {
            await Tone.loaded()
        }
        catch (e) {
            console.error(e)
            throw (e)
        }
        sound.start()
    },

    async playTheme(file) {
        this.music && await this.music.stop()
        this.music = new Tone.Player({
            url: process.env.PUBLIC_URL + 'mp3s/' + file,
            loop: true
            })
            .toDestination()
        try {
            await Tone.loaded()
        }
        catch (e) {
            console.error(e)
            throw (e)
        }
        this.music.start()
    },

    stop() {
        this.music && this.music.stop()
    },

}

export default Audio;