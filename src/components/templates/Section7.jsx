import Button from "../utils/Button"
import OptimizedImg from "../utils/OptimizedImg"

const Section7 = () => {

    const handleClickButton = ()=>{
        // eslint-disable-next-line no-undef
        fbq('track', 'AddToWishlist', { button: "(section 7) - Para quem sofre com a dor intensa" });
        window.location.href="#container-sales";
    }
    


    return (
        <div className="w-full py-16 flex flex-col items-center justify-center gap-6 bg-gradient-to-r from-[#592400] to-[#271200]">

            <div className="w-[90%] sm:w-4/5 flex flex-col-reverse lg:flex-row">

                <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex flex-col items-center justify-center">
                    <div className="w-3/4 lg:w-4/5">
                        <OptimizedImg
                            imgs="https://curcumy.net.br/wp-content/uploads/2023/03/imagem4-min.png"
                            alt="imagem do produto"
                        />
                    </div>
                </div>

                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-white text-2xl sm:text-3xl font-bold pl-4">
                        Para quem sofre com a dor intensa e constante e
                        <span className="text-[#D7A224]"> deseja ter um alívio rápido e duradouro!</span>
                    </h2>

                    <p className="text-white text-lg pl-4 my-4 leading-8">
                        A fórmula inovadora do Curcumy tem sua origem na milenar medicina Ayurveda,
                        usada por milhares de anos pelos povos do oriente para tratar a dor.
                        Sua composição possui extrato de cúrcuma longa do tipo bcm-95,
                        comprovada em mais de 140 estudos científicos pela sua eficácia no tratamento da dor.
                    </p>

                </div>
            </div>

            <Button 
                text={"EU QUERO O CURCUMY!"} 
                onClick={handleClickButton}
            />
        </div>

    )
}

export default Section7