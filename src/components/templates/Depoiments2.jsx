import Button from "../utils/Button";
import OptimizedImg from "../utils/OptimizedImg";

const depoiments = [
    {
        id: 0,
        img: "https://curcumy.net.br/wp-content/uploads/2022/12/mao.png",
        name: "Janet, 59 anos",
        text: "Curcumy é maravilhoso, gostei muito, senti o efeito nos primeiros dias de uso. Minhas mãos há mais de 10 anos inchava e doia muito por conta da artrite, não sabia mais o que fazer, hoje não incha nem dói mais graças ao Curcumy voltou ao normal, pra mim é 5 estrelas."
    },
    {
        id: 1,
        img: "https://curcumy.net.br/wp-content/uploads/2022/12/joelho.png",
        name: "Cícero, 45 anos",
        text: "Para eu subir escada era sofrimento, meu joelho ficava inchado o dia todo por qualquer esforço que eu fazia, tomei o CURCUMY por 3 dias e ja estou me sentindo bem melhor, parece milagre. Obrigado a toda equipe que desenvolveu esse produto, é maravilhoso e salvou minha vida!"
    },
    {
        id: 2,
        img: "https://curcumy.net.br/wp-content/uploads/2022/12/pe2.jpg",
        name: "Tereza, 45 anos",
        text: "Trabalho como operadora de caixa há 16 anos, prefiro trabalhar em pé pois consigo melhor agilidade, mas sempre que chegava em casa meus pés estavam me matando de tanta dor, vi um anúncio do Curcumy e resolvi comprar. E o resultado foi fantástico, me livrei das dores e do inchaço. É ótimo!"
    },

]

const Depoiments2 = () => {

    const handleClickButton = ()=>{
        // eslint-disable-next-line no-undef
        fbq('track', 'AddToWishlist', { button: "(depoiments 2) - Depoimentos reais de quem já usou o Curcumy!" });
        window.location.href="#container-sales";
    }

    return (
        <div className="w-full py-16 flex flex-col justify-center items-center">

            <h2 className="p-6 my-4 text-center text-[#6f3700] font-bold text-4xl">Depoimentos reais de quem já usou o Curcumy!</h2>

            <div className="w-[90%] sm:w-3/4 md:w-full lg:w-4/5 flex flex-col md:flex-row justify-center items-center px-4 lg:px-0 gap-4 lg:gap-8 ">
                {
                    depoiments.map((depoiment, index) =>
                        index < 3 &&
                        <div
                            key={depoiment.id}
                            className={`flex flex-col items-center bg-white bg-gradient-to-tl from-[#271200] to-[#592400]  p-4 rounded-xl shadow-lg`}
                        >
                            <div className="w-[250px]">
                                <OptimizedImg
                                    imgs={depoiment.img}
                                    alt="imagem do resultados"
                                    object="contain"
                                />
                            </div>
                            <h3 className="text-white p-2 text-2xl font-bold text-center">{depoiment.name}</h3>
                            <span className="text-yellow-400 text-2xl">★ ★ ★ ★ ★</span>
                            <p className="text-white pb-4 pt-2 text-center">{depoiment.text}</p>
                        </div>
                    )
                }
            </div>
            <Button 
                text={"QUERO ESSES RESULTADOS!"} 
                onClick={handleClickButton}
            />
        </div>
    )
}

export default Depoiments2