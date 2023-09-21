import Button from "../utils/Button"
import OptimizedImg from "../utils/OptimizedImg"

const Section1 = () => {

    const pains = [
        {
            image: "https://curcumy.net.br/wp-content/uploads/2022/12/Artrite-1.png",
            text: "Artrite, Artrose e Reumatismo"
        },
        {
            image: "https://curcumy.net.br/wp-content/uploads/2022/12/Dor-nas-Costas.png",
            text: "Dor na lombar, coluna e quadril"
        },
        {
            image: "https://curcumy.net.br/wp-content/uploads/2022/12/Dor-no-Joelho-1.png",
            text: "Inchaço no joelho, pés e pulso"
        },
        {
            image: "https://curcumy.net.br/wp-content/uploads/2022/12/Bursite-1.png",
            text: "Bursite no ombro, tornozelo e calcanhar"
        },
    ]

    const handleClickButton = ()=>{
        // eslint-disable-next-line no-undef
        fbq('track', 'AddToWishlist', { button: "(Section 1) - Curcumy alivia dores" });
        window.location.href="#container-sales";
    }

    return (
        <div className="w-full pb-16 bg-[url(https://curcumy.net.br/wp-content/uploads/2023/03/desk2-scaled-1.jpg)] bg-cover bg-center ">

            <div className="w-full lg:w-[1000px] flex flex-wrap justify-center mx-auto">
                <h2 className="text-[#522a10] text-3xl md:text-4xl lg:text-5xl text-center font-bold p-4">O Curcumy alivia dores causadas por:</h2>
                {
                    pains.map(pain =>
                        <div
                            key={pain.text}
                            className="w-[50%] lg:w-[40%] flex flex-col items-center p-4 gap-4"
                        >
                            <div className="w-1/2">
                                <OptimizedImg 
                                    imgs={pain.image}
                                    alt="imagem da dor"
                                />
                            </div>
                            <p className="w-[90%] lg:w-2/3 mx-auto text-[#c6941c] font-bold text-xl lg:text-2xl text-center">{pain.text}</p>
                        </div>
                    )
                }
                <Button 
                    text={"QUERO ALIVIAR A DOR!"}
                    onClick={handleClickButton}
                />
            </div>

        </div>
    )
}

export default Section1