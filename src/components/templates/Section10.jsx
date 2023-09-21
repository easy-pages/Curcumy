import Button from "../utils/Button"
import OptimizedImg from "../utils/OptimizedImg"

const Section10 = () => {

    const handleClickButton = ()=>{
        // eslint-disable-next-line no-undef
        fbq('track', 'AddToWishlist', { button: "(section 10) - Garantia de resultados" });
        window.location.href="#container-sales";
    }

    return (
        <div className="w-full py-16 flex flex-col items-center gap-6 bg-[url(https://curcumy.net.br/wp-content/uploads/2023/03/desk4-scaled-1.jpg)] bg-cover">

            <div className="w-[90%] h-full flex flex-col lg:flex-row gap-4">
                <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
                    <h2 className="text-[#6f3700] text-2xl sm:text-4xl font-bold py-4">
                        Garantia de resultados ou o seu dinheiro de volta!
                    </h2>

                    <p className="italic py-4 text-lg sm:text-xl">Sabemos que oferecemos produtos eficazes e superiores aos disponíveis no mercado. Nossas fórmulas são inovadoras e realmente entregam o que prometem. Confiamos tanto em nossas fórmulas que podemos fazer essa garantia:</p>

                    <p className="font-bold text-lg sm:text-xl">Se você não estiver satisfeito com os resultados do Curcumy com 90 dias de tratamento, reembolsamos 100% do seu dinheiro!</p>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="w-3/5 sm:w-[300px]">
                        <OptimizedImg
                            imgs="https://curcumy.net.br/wp-content/uploads/2023/03/imagem6-min.png"
                            alt="imagem do produto"
                            object="contain"
                        />
                    </div>
                </div>
            </div>


            <Button 
                text={"QUERO COMPRAR COM GARANTIA!"} 
                onClick={handleClickButton}
            />
        </div>
    )
}

export default Section10