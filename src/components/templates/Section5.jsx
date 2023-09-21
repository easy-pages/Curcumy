import Button from "../utils/Button"
import OptimizedImg from "../utils/OptimizedImg"

const Section5 = () => {

    const modeUses = [
        {
            id: 0,
            img: "https://curcumy.net.br/wp-content/uploads/2023/03/11.jpg",
            text: "Coloque 1ml (20 gotas) do produto diretamente na sua boca, copo com água ou bebida de sua preferência (tem o sabor suave de abacaxi)",
        },
        {
            id: 1,
            img: "https://curcumy.net.br/wp-content/uploads/2023/03/12-1.jpg",
            text: "Não ingerir com bebidas quentes ou geladas, para maior eficácia do produto",
        },
        {
            id: 2,
            img: "https://curcumy.net.br/wp-content/uploads/2023/03/13-1.jpg",
            text: "Tome apenas uma vez por dia e você terá o resultado esperado",
        },
    ]


    const handleClickButton = ()=>{
        // eslint-disable-next-line no-undef
        fbq('track', 'AddToWishlist', { button: "(section 5) - Qual o modo de uso?" });
        window.location.href="#container-sales";
    }
    


    return (
        <div className="w-full py-16 flex flex-col items-center justify-center  bg-[#f7f8ee]">

            <h2 className="text-[#522a10] text-4xl md:text-5xl text-center font-bold py-4">
                Qual o modo de uso?
            </h2>

            <div className="w-full lg:w-4/5 xl:w-3/4 flex flex-col md:flex-row items-center justify-evenly px-4 lg:px-0 my-8 gap-8 md:gap-4 xl:gap-8">
                {
                    modeUses.map(use =>
                        <div
                            key={use.id}
                            className="w-3/4 sm:w-1/2 md:w-1/3 bg-white shadow-md rounded-xl flex flex-col items-center gap-6 md:gap-2 xl:gap-4 lg:gap-8 p-4"
                        >
                            <div className="h-[150px] md:h-[120px] lg:h-[150px] xl:h-[200px] rounded-full overflow-hidden ">
                                <OptimizedImg
                                    imgs={use.img}
                                    alt="imagem do modo de uso"
                                />
                            </div>
                            <div className="h-[150px] lg:h-[100px]">
                                <p className="text-center">{use.text}</p>
                            </div>
                        </div>
                    )
                }
            </div>

            <Button 
                text={"QUERO EXPERIMENTAR O CURCUMY!"} 
                onClick={handleClickButton}
            />
        </div>
    )
}

export default Section5