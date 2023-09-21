import { ArrowUDownLeft, Play, SpeakerSlash } from "@phosphor-icons/react"
import { useEffect, useRef, useState } from "react";
import Types from "prop-types"
import { getTimeCurrent } from "../../scripts/calculateTimeWatched";

const Controls = ({ player }) => {
    const pauseRef = useRef();
    const progressRef = useRef();
    const contentStartVideo = useRef();
    const [play, setPlay] = useState();
    const [userAlreadyWatching, setUserAlreadyWatching] = useState();

    useEffect(() => {
        function calcTimeInprogress(timer) {
            let newResult = timer;
            if (timer <= 10) newResult = 2
            else if (timer <= 20) newResult = 20
            else if (timer <= 37) newResult = 35
            else if (timer <= 70) newResult =  50
            else if (timer <= 170) newResult = 60
            else if (timer <= 370) newResult = 70
            else if (timer <= 704) newResult = 80
            else if (timer <= 1704) newResult = 90
            return newResult;
        }


        const timerWatched = JSON.parse(localStorage.getItem("timerWatched"));
        var counter = timerWatched ? calcTimeInprogress(timerWatched.timer) : 0;

        const interval = setInterval(() => {
            if (!play || counter >= 100) clearInterval(interval);

            if (counter <= 20) counter += 2.1
            else if (counter <= 35) counter += 1.5
            else if (counter <= 50) counter += .9
            else if (counter <= 60) counter += .3
            else if (counter <= 70) counter += 0.1
            else if (counter <= 80) counter += 0.05
            else if (counter <= 90) counter += 0.03
            else if (counter <= 100) counter += 0.01

            progressRef.current.style.width = `${counter.toFixed(2)}%`;
        }, 1000);

        return () => clearInterval(interval);
    }, [play]);


    useEffect(() => {
        const timerWatched = localStorage.getItem("timerWatched");

        if (timerWatched) {
            setUserAlreadyWatching(true)
            // eslint-disable-next-line no-undef
            fbq('trackCustom', 'Vsl_UserWatchedMoreThan1Time', { describe: "O usuário já assistiu a vsl mais de uma vez" });
        }
        else {
            setUserAlreadyWatching(false)
            // eslint-disable-next-line no-undef
            fbq('trackCustom', 'Vsl_UserWatchingForTheFirstTime', { describe: "O usuário está assistindo pela primeira vez" });
        }
    }, [])

    const handlePlayPause = async () => {
        if (!player) return

        const btnPlay = pauseRef.current;
        const isPaused = await player.getPaused();
        if (isPaused) {
            btnPlay.style.opacity = "0"
            handleSaveProgress(true);
            // eslint-disable-next-line no-undef
            fbq('trackCustom', 'Vsl_Play', { describe: "O usuário deu play na VSL" });
            player.play();
        } else {
            btnPlay.style.opacity = "1"
            handleSaveProgress(false);
            // eslint-disable-next-line no-undef
            fbq('trackCustom', 'Vsl_Pause', { describe: "O usuário deu pause na VSL" });
            player.pause();
        }
    }

    const handleStartVideo = () => {
        localStorage.removeItem("sender_events_facebook")
        localStorage.removeItem("timerWatched")
        player.setCurrentTime(0)
        player.setMuted(false)
        handleSaveProgress(true);
        // eslint-disable-next-line no-undef
        fbq('trackCustom', 'Vsl_Start', { describe: "O usuário começou a assistir a VSL" });
        contentStartVideo.current.style.display = "none"
    }

    const handleContinueVideo = () => {
        const timerWatched = JSON.parse(localStorage.getItem("timerWatched"));
        player.setCurrentTime(timerWatched.timer)
        player.setMuted(false)
        handleSaveProgress(true);
        // eslint-disable-next-line no-undef
        fbq('trackCustom', 'Vsl_Continue', { describe: "O usuário continuou assistindo da onde ele parou." });
        contentStartVideo.current.style.display = "none"
    }

    const handleSaveProgress = async (canPlay) => {
        const currentTime = Number(getTimeCurrent())
        const timerWatched = JSON.parse(localStorage.getItem("timerWatched")) || { timer: 0, play: currentTime, pause: currentTime, analyzeTime: true };

        if (canPlay) {
            timerWatched.play = Number(currentTime)
            timerWatched.analyzeTime = true
            localStorage.setItem("timerWatched", JSON.stringify(timerWatched))
            setPlay(true)
        } else {
            timerWatched.pause = Number(currentTime)
            timerWatched.analyzeTime = true
            localStorage.setItem("timerWatched", JSON.stringify(timerWatched))
            setPlay(false)
        }
    }

    return (
        <>
            <div
                className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
                ref={pauseRef}
                style={{ opacity: 0 }}
                onClick={handlePlayPause}
            >
                <div
                    className="w-[100px] h-[100px] bg-green-500/80 flex justify-center items-center cursor-pointer rounded-full"
                >
                    <Play className="text-6xl fill-white" />
                </div>
            </div>

            <div
                ref={contentStartVideo}
                className="absolute top-0 left-0 w-full h-full flex justify-center items-center cursor-pointer"
            >
                {
                    userAlreadyWatching ?
                        <div className="w-[90%] h-4/5 sm:w-3/4 sm:h-3/4 border-2 border-white bg-green-500 flex flex-col md:justify-center items-center rounded-xl shadow-xl">
                            <h2 className="text-white text-lg md:text-2xl font-bold text-center py-2 md:py-4">Você já começou a assistir esse vídeo</h2>
                            <div className="flex flex-col gap-4 text-lg text-white font-bold mt-4">
                                <div
                                    className="flex items-center gap-2"
                                    onClick={handleContinueVideo}
                                >
                                    <div className="w-[25px] h-[25px] grid place-items-center rounded-full border-2 border-white">
                                        <Play />
                                    </div>
                                    Continuar assistindo?
                                </div>
                                <div
                                    className="flex items-center gap-2"
                                    onClick={handleStartVideo}
                                >
                                    <div className="w-[25px] h-[25px] grid place-items-center rounded-full border-2 border-white">
                                        <ArrowUDownLeft />
                                    </div>
                                    Assistir do inicio?
                                </div>
                            </div>
                        </div>
                        :
                        <div
                            onClick={handleStartVideo}
                            className="w-4/5 h-4/5 sm:w-3/4 sm:h-3/4 border-1 border-white bg-green-500 flex flex-col justify-center items-center rounded-xl shadow-xl"
                        >
                            <h2 className="text-white text-2xl font-bold">Seu video já começou!</h2>
                            <SpeakerSlash className="text-white text-9xl" />
                            <h2 className="text-white text-3xl font-bold">Clique para ouvir...</h2>
                        </div>
                }
            </div>

            <div className="w-full h-[10px] absolute bottom-0 left-0 flex justify-start">
                <div
                    ref={progressRef}
                    className="w-[0%] h-full bg-green-600"
                ></div>
            </div>
        </>
    )
}

Controls.propTypes = {
    player: Types.shape({
        getPaused: Types.func,
        play: Types.func,
        pause: Types.func,
        setMuted: Types.func,
        setCurrentTime: Types.func,
    }),
}

export default Controls