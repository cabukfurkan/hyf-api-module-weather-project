export async function speak(name, temp, desc) {
    let wish = '';
    if (temp > 20) {
        wish = "It's warm day go have fun"
    } else if (temp <= 19 && temp > 10) {
        wish = "It's a little bit cold, Nice to have some jacket"
    } else {
        wish = "It's freezing be careful"
    }
    const toSpeak = await new SpeechSynthesisUtterance(`${name}. Temperature is ${temp} degree. ${desc} is waiting you. ${wish}`)
    window.speechSynthesis.onvoiceschanged = () => {
        const voices = window.speechSynthesis.getVoices()
        console.log(voices);
        toSpeak.voice = voices[1]
    };
    window.speechSynthesis.speak(toSpeak);
}

