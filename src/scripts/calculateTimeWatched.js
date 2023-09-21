export function addPauseLocalStorage() {
    const timerWatched = calculateTimerByCurrentTimer();

    if (timerWatched) {
        const currentDate = getTimeCurrent();

        timerWatched.pause = currentDate;
        timerWatched.analyzeTime = false;

        if (timerWatched.timer <= 1000) {
            // eslint-disable-next-line no-undef
            fbq('trackCustom', 'Vsl_UserDontInterested', { describe: "O usuário não assistiu a vsl até os pontos importes" });
        }

        localStorage.setItem("timerWatched", JSON.stringify(timerWatched))
    }
}

export function getTimeCurrent() {
    const date = new Date();
    const days = date.getDate() * 24 * 60 * 60;
    const hours = date.getHours() * 60 * 60;
    const minutes = date.getMinutes() * 60;
    const seconds = date.getSeconds();
    const currenTimeFormated = days + hours + minutes + seconds;

    return currenTimeFormated;
}

export function calculateTimerByCurrentTimer() {
    const timerWatched = JSON.parse(localStorage.getItem("timerWatched"));
    const currentTime = getTimeCurrent()

    if (timerWatched) {
        if (timerWatched.play >= timerWatched.pause) {
            let differenceValues = Math.floor(currentTime - timerWatched.play);
            timerWatched.timer += differenceValues
            timerWatched.play = currentTime;
            localStorage.setItem("timerWatched", JSON.stringify(timerWatched))
        }
        return timerWatched
    } else return 0
}