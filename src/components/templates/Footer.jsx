import { Truck, WhatsappLogo } from "@phosphor-icons/react"
import Button from "../utils/Button"
import OptimizedImg from "../utils/OptimizedImg"

const Footer = () => {

    const handleTrackOrder = ()=>{
        // eslint-disable-next-line no-undef
        fbq('trackCustom', 'Sp_TrackOrder');
        window.open("https://rastreamento.correios.com.br/app/index.php")
    }

    const handleClickButtonWhatsapp = ()=>{
        // eslint-disable-next-line no-undef
        fbq('track', 'Lead', { Lead: "Whatsapp footer direct" });
        window.open("https://api.whatsapp.com/send?phone=5535991368790&text=Ol%C3%A1,%20estou%20com%20uma%20d%C3%BAvida%20sobre%20o%20produto%20Curcumy...")
    }

    return (
        <div className="w-full flex flex-col gap-4 pt-16 bg-gradient-to-b from-[#592400] to-[#0b0500]">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/4 flex flex-col items-center">
                    <h3 className="font-bold text-white text-3xl md:text-2xl">Rastreio</h3>
                    <div className="text-xl">
                        <Button
                            onClick={handleTrackOrder}
                            icon={<Truck size={30} />}
                            text="Rastrear pedido"
                            animate={false}
                        />
                    </div>
                </div>
                <div className="w-full md:w-1/4 flex flex-col items-center">
                    <h3 className="font-bold text-white text-3xl md:text-2xl">Atendimento</h3>
                    <div className="text-xl">
                        <Button
                            onClick={handleClickButtonWhatsapp}
                            icon={<WhatsappLogo size={30} />}
                            text="Whatsapp"
                            animate={false}
                            px="16"
                        />
                    </div>
                </div>
                <div className="w-full md:w-1/4 flex flex-col items-center my-8 md:my-0">
                    <h3 className="font-bold text-white text-2xl">Links </h3>
                    <div className="flex flex-col items-center md:items-start">
                        <a href="/politicas">Politicas de privacidade</a>
                        <a href="/termos">Termos de uso</a>
                        <a href="https://rastreamento.correios.com.br/app/index.php" target="_blank" rel="noreferrer">Rastrear pedido</a>
                    </div>
                </div>
                <div className="w-full md:w-1/4 flex flex-col items-center">
                    <h3 className="font-bold text-white text-2xl my-4">Formas de pagamentos </h3>
                    <div className="w-4/5">
                        <OptimizedImg
                            imgs="https://curcumy.net.br/wp-content/uploads/2023/03/pagamento-new-1-1.png"
                            alt="Formas de pagamento"
                        />
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center items-center h-[80px] border-t-[1px] border-[#fff2]">
                <p className="text-white">
                    © Copyright 2023 <span className="text-orange-500">Curcumy</span> Todos os direitos reservados
                </p>
            </div>

        </div>
    )
}

export default Footer