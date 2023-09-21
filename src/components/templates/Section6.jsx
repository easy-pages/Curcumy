import Button from "../utils/Button"
import OptimizedImg from "../utils/OptimizedImg"

const Section6 = () => {


    const handleClickButton = ()=>{
        // eslint-disable-next-line no-undef
        fbq('track', 'AddToWishlist', { button: "(section 6) - O que os especialistas falam" });
        window.location.href="#container-sales";
    }
    

    return (
        <div className="w-full py-16 flex flex-col items-center justify-center bg-white">

            <div className="w-[90%] sm:w-4/5 flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-[#522a10] text-2xl md:text-4xl font-bold py-4">
                        O que os especialistas falam sobre o Curcumy?
                    </h2>
                    <p className="italic my-4 text-lg">
                        &quot;Já indiquei vários outros suplementos ao longo da minha carreira, mas o Curcumy é uma das maiores surpresas que tive até aqui, não é atoa que vem fazendo sucesso no Brasil!
                    </p>
                    <p className="italic my-4 text-lg">
                        Ele chegou em minhas mãos e pude perceber que ele tem a maior concentração do mais importantes ativos que combatem as dores articulares.
                    </p>
                    <p className="italic my-4 text-lg">
                        O Curcumy trata e previne as dores fortes agindo de dentro para fora do corpo, assim causando maior conforto e alívio para meus pacientes, estou testando e aprovo com toda certeza!
                    </p>
                    <p className="italic my-4 text-lg">
                        Além do mais, é um suplemento 100% natural, sem efeitos colaterais!&quot;
                    </p>
                </div>
                <div className="w-full md:w-1/2 h-full flex flex-col items-center">
                    <div className="w-full sm:w-[500px] lg:w-full mt-8 lg:mt-0">
                        <OptimizedImg
                            imgs="https://curcumy.net.br/wp-content/uploads/2023/03/imagem3-min.png"
                            alt="imagem do medico"
                            object="contain"
                        />
                    </div>
                    <div className="w-full flex flex-col items-center">
                        <span className="w-full underline text-center italic ">Fernando Luz, desde 1989</span>
                        <div className="h-[100px]">
                            <OptimizedImg
                                imgs="https://curcumy.net.br/wp-content/uploads/2022/12/Assinatura-300x121-1.png"
                                alt="imagem do medico"
                                object="contain"
                            />i
                        </div>
                    </div>
                </div>
            </div>

            <Button 
                text={"EU QUERO O CURCUMY!"} 
                onClick={handleClickButton}
            />
        </div>
    )
}

export default Section6