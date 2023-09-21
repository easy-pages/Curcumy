import Button from "../utils/Button"
import ListWithCheck from "../utils/ListWithCheck"
import OptimizedImg from "../utils/OptimizedImg"

const Main = () => {

    const beneficios = [
        "Alívio Imediato das Dores",
        "Reduz Inchaços e Inflamações",
        "Destrava as articulações duras",
        "Acaba com a dormência",
        "Aumenta a mobilidade",
        "Promove a reparação do tecido cartilaginoso",
    ]

    const handleClickButton = ()=>{
        // eslint-disable-next-line no-undef
        fbq('track', 'AddToWishlist', { button: "main" });
        window.location.href="#container-sales";
    }


    return (
        <div
            className="w-full h-auto py-4 sm:py-16 lg:py-0 lg:h-[80vh] flex justify-center bg-[url(https://curcumy.net.br/wp-content/uploads/2023/03/desk1-scaled-1.jpg)] bg-cover bg-center "
        >
            <div className="w-full 2xl:w-4/5 flex flex-col items-center">
                <div className="w-3/5 sm:w-[280px] sm:mt-8">
                    <OptimizedImg
                        imgs={"https://curcumy.net.br/wp-content/uploads/2022/12/Ativo-1-2.svg"}
                        alt="logo do produto"
                    />
                </div>
                <h3 className="w-full text-[#d7a225] font-medium text-lg md:text-2xl text-center mt-6">
                    FÓRMULA AVANÇADA PARA O COMBATE DAS DORES ARTICULARES E DO CORPO
                </h3>

                <div className="w-[90%] sm:w-[75%] flex flex-col lg:flex-row mt-8 gap-16">
                    <div className="w-full sm:w-[450px] mx-auto">
                        <OptimizedImg
                            imgs="https://i.ibb.co/wwG9vW2/imagem2-991x1024-1.webp"
                            alt="imagem do produto"
                            object="contain"
                        />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-center lg:text-left text-2xl lg:text-4xl xl:text-5xl font-bold text-[#522a10]">
                            Alívio das dores nas juntas e do corpo em poucos dias! 
                        </h1>
                        <ListWithCheck list={beneficios} />
                        <Button 
                            onClick={handleClickButton}
                            text={"QUERO ALIVIAR A DOR!"} 
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main