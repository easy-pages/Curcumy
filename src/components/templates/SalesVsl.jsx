import Section10 from "./Section10"
import Sale from "./Sale"
import CommonQuestions from "./CommonQuestions"
import { useEffect, useState } from "react"
import { calculateTimerByCurrentTimer } from "../../scripts/calculateTimeWatched"
import Comments from "./Comments"
import Button from "../utils/Button"


const SalesVsl = () => {
    const [showContainer, setContainer] = useState();


    useEffect(() => {
        const interval = setInterval(() => {
            const timerWatched = calculateTimerByCurrentTimer();
            const sendersEventesFacebook = JSON.parse(localStorage.getItem("sender_events_facebook"));

            if (timerWatched.analyzeTime && timerWatched.timer >= 2000) {
                if (!sendersEventesFacebook?.hundred) {
                    // eslint-disable-next-line no-undef
                    fbq('trackCustom', 'Vsl_Watched_100%', { describe: "O vídeo foi reproduzido 100%" });
                    // eslint-disable-next-line no-undef
                    fbq('trackCustom', 'Vsl_ShowCurcumyContent', { describe: "O conteúdo o curcumy para venda foi exibido" });
                    localStorage.setItem("sender_events_facebook", JSON.stringify({ fiveSeconds: true, oneMin: true, twentyFive: true, fifty: true, senventyFive: true, hundred: true }))
                    setContainer({ comment: true, sales: true })
                    clearInterval(interval)
                }
            }
            else if (timerWatched.analyzeTime && timerWatched.timer >= 1500) {
                if (!sendersEventesFacebook?.senventyFive) {
                    // eslint-disable-next-line no-undef
                    fbq('trackCustom', 'Vsl_Watched_75%', { describe: "O vídeo foi reproduzido 75%" });
                    localStorage.setItem("sender_events_facebook", JSON.stringify({ fiveSeconds: true, oneMin: true, twentyFive: true, fifty: true, senventyFive: true, }))
                }
            } else if (timerWatched.analyzeTime && timerWatched.timer >= 1000) {
                if (!sendersEventesFacebook?.fifty) {
                    // eslint-disable-next-line no-undef
                    fbq('trackCustom', 'Vsl_Watched_50%', { describe: "O vídeo foi reproduzido 50%" });
                    // eslint-disable-next-line no-undef
                    fbq('trackCustom', 'Vsl_ShowComments', { describe: "O conteúdo dos comentários foi exibido" });
                    localStorage.setItem("sender_events_facebook", JSON.stringify({ fiveSeconds: true, oneMin: true, twentyFive: true, fifty: true, }))
                    setContainer({ comment: true });
                }
            } else if (timerWatched.analyzeTime && timerWatched.timer >= 500) {
                if (!sendersEventesFacebook?.twentyFive) {
                    // eslint-disable-next-line no-undef
                    fbq('trackCustom', 'Vsl_Watched_25%', { describe: "O vídeo foi reproduzido 25%" });
                    localStorage.setItem("sender_events_facebook", JSON.stringify({ fiveSeconds: true, oneMin: true, twentyFive: true }))
                }
            } else if ((timerWatched.analyzeTime && timerWatched.timer >= 60)) {
                if (!sendersEventesFacebook?.oneMin) {
                    // eslint-disable-next-line no-undef
                    fbq('trackCustom', 'Vsl_Watched_1min', { describe: "O vídeo foi reproduzido por mais de 1 minuto" })
                    localStorage.setItem("sender_events_facebook", JSON.stringify({ fiveSeconds: true, oneMin: true }))
                }
            } else if ((timerWatched.analyzeTime && timerWatched.timer >= 5)) {
                if (!sendersEventesFacebook?.fiveSeconds) {
                    // eslint-disable-next-line no-undef
                    fbq('trackCustom', 'Vsl_Watched_5s', { describe: "O vídeo foi reproduzido por mais de 5 segundos" });
                    localStorage.setItem("sender_events_facebook",JSON.stringify({ fiveSeconds: true,}));
                }
            }

        }, 10000)

        return () => clearInterval(interval)
    }, [])


    const handleClickButtonKnowMore = () => {
        // eslint-disable-next-line no-undef
        fbq('trackCustom', 'Vsl_ClickButtonKnowMore', { describe: "O usuário clicou no botão para saber mais do curcumy" });
        window.location.href = "/"
    }


    return (
        <div className="flex flex-col mt-28">
            {
                showContainer?.sales &&
                <>
                    <Sale page="VSL" />
                    <Section10 />
                    <CommonQuestions />
                    <div className="flex flex-col bg-gradient-to-r from-[#592400] to-[#271200]">
                        <h2 className="text-center text-3xl p-4 font-bold text-white">Ainda está com dúvidas?</h2>
                        <h3 className="text-center text-2xl text-white">Veja mais detalhes do produtos</h3>
                        <Button onClick={handleClickButtonKnowMore} text="Ver mais detalhes" animate={false} />
                    </div>
                </>
            }
            {showContainer?.comment && <Comments />}
        </div>
    )
}

export default SalesVsl