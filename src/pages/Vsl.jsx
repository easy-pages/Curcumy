import HeadLine from "../components/templates/HeadLine"
import HeaderVsl from "../components/templates/HeaderVsl"
import VideoSalesLater from "../components/templates/VideoSalesLater"
import SalesVsl from "../components/templates/SalesVsl"
import Whatsapp from "../components/templates/Whatsapp"
import { Suspense } from "react"

const Vsl = () => {

    return (
        <div className="w-screen min-h-screen bg-gradient-to-tr from-green-200 to-[#ffffff]">
            <Suspense fallback={"Carregando..."}>
                <HeaderVsl />
            </Suspense>
            <Suspense fallback={"Carregando..."}>
                <HeadLine />
            </Suspense>
            <Suspense fallback={"Carregando..."}>
                <VideoSalesLater />
                <p className="text-center w-full md:w-1/2 md:mx-auto">
                    2022 ©Copyright © 2021 Curcumy. Todos os direitos reservados.
                    Todo o conteúdo do site, todas as fotos, imagens, logotipos, marcas, layout,
                    aqui veículados são de propriedade exclusiva do Curcumy. É vedada qualquer reprodução, total ou parcial,
                    de qualquer elemento de identidade, sem expressa autorização.
                    A violação de qualquer direito mencionado implicará na responsabilização cível e criminal nos termos da Lei.
                    “Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook,
                    a responsabilidade não é deles e sim do nosso site.”
                </p>
            </Suspense>
            <SalesVsl />
            <Whatsapp />
        </div>
    )
}

export default Vsl