import { WhatsappLogo } from "@phosphor-icons/react";
import Button from "../components/utils/Button";
import { useEffect, useRef } from "react";
import axios from "axios";
import formatNumber from "../scripts/FormatNumber";

const GetWhatsapp = () => {
    const refContainer = useRef();
    const timeout = useRef();

    useEffect(() => {
        timeout.current = setTimeout(() => {
            refContainer.current.classList.add("grid")
            refContainer.current.classList.remove("hidden")
            setTimeout(() => {
                refContainer.current.classList.remove("scale-0")
                refContainer.current.classList.add("scale-100")
                refContainer.current.classList.add("bg-[#fffa]")
                clearTimeout(timeout.current)
            }, 1000);
        }, 60000);
    }, [])

    const handleClose = ({ target }) => {
        if (target.dataset.close === "true") {
            // eslint-disable-next-line no-undef
            fbq("trackCustom", "Lead_dontSendWhatsapp", { whatsapp: false })
            refContainer.current.classList.add("hidden")
            refContainer.current.classList.remove("grid")
            clearTimeout(timeout.current)
        }
    }


    const handleSendLead = async ({ currentTarget }) => {
        currentTarget.textContent = "Enviando..."
        const input = refContainer.current.querySelector("input");
        if (input.value.length == 15 || input.value.length == 16) {
            const response = await axios.post("https://alk.temsabor.blog/lead", {
                number: input.value,
                product: "Curcumy",
                site: "curcumytratamento.ver-receita.cloud"
            }).catch(err => console.log(err))
            if (response.status === 200) {
                // eslint-disable-next-line no-undef
                fbq('track', 'Lead', { Lead: "Whatsapp modal DB" });
                handleClose({ target: { dataset: { close: "true" } } })
                alert("Em breve você receberá seu bônus")
            }
        } else alert("Formato de número invalido!")
    }

    const handleFormatNumber = ({ currentTarget })=>{
        const result = formatNumber(currentTarget.value);
        currentTarget.value = result
    }


    return (
        <div
            className="hidden scale-0 transition-transform duration-300 w-screen h-screen fixed top-0 left-0 z-50  place-items-center "
            ref={refContainer}
            onClick={handleClose}
            data-close="true"
        >
            <div className="w-[90%] max-w-[420px] bg-gradient-to-br from-[#dda873] to-[#d5883b] rounded-xl shadow-lg border-[1px] border-[#6f3700] p-4 ">
                <h2 className="text-2xl font-bold uppercase text-center text-[#6f3700] italic">Bônus especial</h2>
                <h3 className="text-center text-xl leading-6 text-[#4a3b14]">Estamos batendo record visitante nessa página, então decidimos dar um bônus especial para você que faz parte dessa marca!</h3>
                <h3 className="text-center text-xl my-4 mt-8 font-medium leading-6">Deixe seu whatsapp para receber um Curcumy Bônus!</h3>
                <div className="flex items-center justify-start bg-zinc-100 px-4 rounded-xl">
                    <div className="p-2">
                        <WhatsappLogo className="fill-green-600 text-3xl" />
                    </div>
                    <input
                        type="tel"
                        placeholder="(xx) x xxxx-xxxx"
                        autoComplete="on"
                        className="w-3/5 bg-zinc-100 text-xl my-4 rounded-xl outline-none"
                        onChange={handleFormatNumber}
                    />
                </div>
                <div className="w-full flex justify-evenly items-center gap-4 mt-4">
                    <span
                        className="text-zinc-700 opacity-50 cursor-pointer underline"
                        onClick={handleClose}
                        data-close="true"
                    >Perder meu bônus</span>
                    <Button
                        text="ENVIAR"
                        my="4"
                        animate={false}
                        onClick={handleSendLead}
                    />
                </div>
            </div>
        </div>
    )
}

export default GetWhatsapp