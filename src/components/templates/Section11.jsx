import Button from "../utils/Button"
import OptimizedImg from "../utils/OptimizedImg"

const Section11 = () => {

    const handleClickButton = ()=>{
        // eslint-disable-next-line no-undef
        fbq('track', 'AddToWishlist', { button: "(section 11) - O Curcumy é um produto 100% natural!" });
        window.location.href="#container-sales";
    }


    return (
        <div className="w-full py-16 flex flex-col items-center justify-center">

            <div className="w-4/5 flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col justify-center gap-y-5">
                    <h2 className="text-[#6f3700] text-4xl font-bold py-4">O Curcumy é um produto <br /> 100% natural!</h2>
                    <p className="font-bold italic text-lg">O Curcumy é um produto 100% natural criado para reconstruir e fortalecer as articulações, tendões, coluna e músculos.</p>
                    <p className="italic text-lg">Um tratamento que age direto na causa da dor, trazendo alívio imediato sem os problemas que uma medicação forte pode causar no seu fígado e  estômago.</p>
                    <p className="font-bold italic text-lg">É um tratamento de dentro para fora, causando alívio mais rapidamente.</p>
                    <p className="italic text-lg">Além disso, o Curcumy tem um sabor agradável de abacaxi e você pode diluir 20 gotas em água ou na sua bebida preferida.</p>
                </div>
                <div className="w-3/4 md:w-1/2 mt-4 flex justify-center items-center mx-auto p-6 ">
                    <div className="w-full md:w-4/5">
                        <OptimizedImg
                            imgs="https://curcumy.net.br/wp-content/uploads/2023/03/imagem5-min-629x1024.png"
                            alt="imagem do produto"
                            object="contain"
                        />
                    </div>

                </div>
            </div>

            <Button 
                text={"QUERO EXPERIMENTAR O CURCUMY!"}
                onClick={handleClickButton}
             />
        </div>
    )
}

export default Section11