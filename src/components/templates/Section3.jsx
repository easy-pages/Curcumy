import Button from "../utils/Button"
import OptimizedImg from "../utils/OptimizedImg"

const Section3 = () => {

    const handleClickButton = ()=>{
        // eslint-disable-next-line no-undef
        fbq('track', 'AddToWishlist', { button: "(section 3) - Veja por que o Curcumy" });
        window.location.href="#container-sales";
    }
    
    

    return (
        <div className="w-full flex flex-col items-center justify-center py-16">

            <div className="w-full sm:w-4/5 flex flex-col lg:flex-row items-center">

                <div className="w-full lg:w-1/2">
                    <h2 className="w-full text-[#6f3700] px-2 sm:px-0 text-3xl md:text-4xl font-bold text-center lg:text-left py-4">
                        Veja por que o Curcumy alivia a dor de forma rápida e eficiente!
                    </h2>
                    <p className="leading-8 text-xl text-center lg:text-left">
                        <span className="font-bold italic">A Aplicação Sublingual</span>,
                        proporciona uma absorção rápida e eficaz por meio da glândula que temos sob a língua,
                        nela vasos que acessam diretamente a corrente sanguíne
                        <span className="font-bold italic"> absorvem o conteúdo rapidamente e alcançam efeitos surpreendentes em poucos minutos.</span>
                    </p>
                </div>

                <div className="w-full md:w-4/5 lg:w-1/2 mt-4 flex justify-center items-start mx-auto">
                    <OptimizedImg
                        imgs="https://curcumy.net.br/wp-content/uploads/2022/12/sublingual.jpg"
                        alt="imagem do produto"
                        object="contain"
                    />
                </div>

            </div>

            <Button
                text={"QUERO ALÍVIO RÁPIDO!"}
                onClick={handleClickButton}
            />
        </div>
    )
}

export default Section3