import Button from "../utils/Button"
import ListWithCheck from "../utils/ListWithCheck"
import OptimizedImg from "../utils/OptimizedImg"

const Section2 = () => {

    const questions = [
        "Sentir dor o tempo todo?",
        "Tomar vários remédios para dor sem resultados satisfatórios?",
        "Idas intermináveis ao consultório médico?",
        "Acaba com a dormência",
        "Sente a perna, ombros, braços, quadris ou a coluna travados?",
        "Deixou de fazer coisas que você gosta por causa da dor?"
    ]

    const handleClickButton = ()=>{
        // eslint-disable-next-line no-undef
        fbq('track', 'AddToWishlist', { button: "(Section 2) - Não permita que a dor..." });
        window.location.href="#container-sales";
    }

    return (
        <div className="w-full flex flex-col items-center justify-center py-16">

            <div className="w-[90%] 2xl:w-4/5 flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <h2 className="text-[#522a10] text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold py-4">
                        Não permita que a dor tire a sua alegria de viver!
                    </h2>
                    <ListWithCheck list={questions} />
                </div>
                <div className="w-2/3 lg:w-1/2 mt-8 lg:mt-4 flex flex-wrap justify-center items-start mx-auto p-6 ">
                    <OptimizedImg
                        imgs="https://curcumy.net.br/wp-content/uploads/2023/03/imagem1-min.png"
                        alt="imagem do produto"
                        object="contain"
                    />
                </div>
            </div>

            <Button 
                text={"QUERO CURAR MINHA DOR!"} 
                onClick={handleClickButton}
            />
        </div>
    )
}

export default Section2