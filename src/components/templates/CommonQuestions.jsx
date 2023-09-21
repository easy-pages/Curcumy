import Button from "../utils/Button";

const CommonQuestions = () => {


    const questions = [
        {
            q: "Qual o estoque mais vendido?",
            a: "O estoque mais vendido e o mais recomendado é para 5 meses, porque apesar de você ter resultados imediatos com o Curcumy , os melhores benefícios vem com o uso contínuo do produto. Além disso, você recebe até 50% de desconto quando você faz um estoque para 5 meses e se protege para quando a gente ficar sem produto.",
        },
        {
            q: "O Curcumy é aprovado pela anvisa?",
            a: "Sim, o Curcumy foi aprovado e considerado eficaz pela ANVISA – AGÊNCIA NACIONAL DE VIGILÂNCIA SANITÁRIA.",
        },
        {
            q: "Como eu posso usa-lo?",
            a: "Ingerir 1 ml (20 gotas) do Curcumy por dia (sabor suave de abacaxi), pode ser colocado em alguma bebida de sua preferência, para um alívio prolongado da dor.",
        },
        {
            q: "Como o Curcumy funciona?",
            a: "O Curcumy trata suas dores de dentro pra fora. ",
        },
        {
            q: "Qual sabor tem o Curcumy?",
            a: "O Curcumy não tem um gosto forte, ele tem um sabor suave de abacaxi.",
        },
        {
            q: "Quanto tempo leva para o Curcumy fazer efeito?",
            a: "Isso depende de cada pessoa, mas o Curcumy começa a fazer efeito logo nos primeiros dias de uso.",
        },
        {
            q: "Este site é seguro?",
            a: "Muito seguro, com todas as suas informações sendo criptografadas assim que inseridas. Por isso, compre seu Curcumy aqui sem nenhum risco.",
        },
        {
            q: "Como posso pagar com PIX?",
            a: "Você já pode comprar seu kit com Pix, selecione a quantidade de produtos que deseja e na área de pagamento escolha a opção Pix.",
        },
    ]


    const handleClickQuestion = ({ currentTarget }) => {
        const h3 = currentTarget.querySelector("h3");
        const p = currentTarget.querySelector("p");

        h3.classList.toggle("rounded-lg")
        h3.classList.toggle("rounded-t-lg")
        p.classList.toggle("rounded-b-lg")
        p.classList.toggle("hidden")
    }

    const handleClickButton = ()=>{
        // eslint-disable-next-line no-undef
        fbq('track', 'AddToWishlist', { button: "(Common Question) - PERGUNTAS FREQUENTES" });
        window.location.href="#container-sales";
    }


    return (
        <div className="w-full py-16 bg-gradient-to-r from-[#592400] to-[#271200]">
            <h2 className="text-white text-center text-3xl md:text-5xl font-bold">PERGUNTAS FREQUENTES</h2>
            <div className="w-[90%] sm:w-4/5 mx-auto my-8 flex flex-col gap-4">
                {
                    questions.map(question =>
                        <div
                            key={question.q}
                            onClick={handleClickQuestion}
                        >
                            <h3 className="bg-white p-4 rounded-lg font-bold">{question.q}</h3>
                            <p className="bg-white p-4 hidden transition-all duration-300">{question.a}</p>
                        </div>
                    )
                }

            </div>
            <Button
                onClick={handleClickButton}
                text={"QUERO EXPERIMENTAR O CURCUMY!"} />
        </div>
    )
}

export default CommonQuestions