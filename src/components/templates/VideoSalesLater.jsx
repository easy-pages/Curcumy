import { useEffect, useRef, useState } from "react"
import Vimeo from "@vimeo/player";
import Controls from "../utils/Controls";
import { SpeakerSimpleHigh } from "@phosphor-icons/react";
import { addPauseLocalStorage } from "../../scripts/calculateTimeWatched";

const VideoSalesLater = () => {
    const containerFrameRef = useRef();
    const [player, setPlayer] = useState();

    useEffect(() => {
        const iframe = containerFrameRef.current.querySelector("iframe")
        const playerVimeo = new Vimeo(iframe, { id: '863621288', });
        setPlayer(playerVimeo);
    }, [])

    useEffect(() => {
        window.addEventListener("beforeunload", addPauseLocalStorage)
        return () => window.removeEventListener("beforeunload", addPauseLocalStorage)
    },[])


    return (
        <div className="flex flex-col my-4 md:my-8 mb-32">
            <h2 className="flex justify-center items-center gap-1 sm:gap-4  text-md sm:text-2xl text-black mb-2">
                <SpeakerSimpleHigh /> Por favor, verifique se o som está ligado.
            </h2>
            <div className="w-full flex justify-center">
                <div
                    ref={containerFrameRef}
                    className="w-[370px] h-[215px] bg-black sm:w-[600px] sm:h-[330px] md:w-[750px] md:h-[380px] lg:w-[850px] lg:h-[480px] relative"
                >
                    <iframe
                        src="https://player.vimeo.com/video/863621288?badge=0&autoplay=1&muted=1&player_id=0&controls=0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        className="w-full h-full shadow-xl "
                        title="202309121148"
                    ></iframe>



                    <Controls
                        player={player}
                    />
                </div>
            </div>
        </div>
    )
}

export default VideoSalesLater