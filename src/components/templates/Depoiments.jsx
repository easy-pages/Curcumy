import Button from "../utils/Button";

const depoiments = [
    {
        id: 0,
        link: "https://player.vimeo.com/video/796445877?h=5c686f03c4&badge=0&autopause=0&player_id=0&app_id=58479"
    },
    {
        id: 1,
        link: "https://player.vimeo.com/video/796448820?h=cee387a1b4&badge=0&autopause=0&player_id=0&app_id=58479"
    },
    {
        id: 2,
        link: "https://player.vimeo.com/video/796441598?h=79a29ec115&ba dge=0&autopause=0&player_id=0&app_id=58479"
    },
    {
        id: 3,
        link: "https://player.vimeo.com/video/765934020?h=0821a4e809"
    },
    {
        id: 4,
        link: "https://player.vimeo.com/video/765934041?h=dd06b2715b"
    },
    {
        id: 5,
        link: "https://player.vimeo.com/video/765934002?h=b9c57623c0"
    },
]

const handleClickButton = ()=>{
    // eslint-disable-next-line no-undef
    fbq('track', 'AddToWishlist', { button: "(Depoiment 1) - Testado e aprovado" });
    window.location.href="#container-sales";
}


const Depoiments = () => {

    return (
        <div className="w-full h-auto py-16 flex flex-col justify-center items-center bg-[url(https://curcumy.net.br/wp-content/uploads/2023/03/desk3-scaled-1.jpg)] bg-cover">

            <h2 className="w-full sm:w-2/3 xl:w-1/2 p-6 my-4 text-center text-white font-bold text-3xl md:text-5xl ">
                Testado e aprovado por milhares de pessoas!
            </h2>

            <div className="w-full lg:w-4/5 px-8 lg:px-0 flex flex-col md:flex-row justify-center items-center gap-8">
                {
                    depoiments.map((depoiment, index) =>
                        index < 3 &&
                        <div
                            key={depoiment.id}
                            className={`w-[350px] h-[600px] sm:w-[450px] sm:h-[700px] md:[450px] md:h-[420px] lg:h-[500px] xl:w-[300px] xl:h-[550px] bg-white snap-center`}
                        >
                            <iframe
                                src={depoiment.link}
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    )
                }
            </div>
            <Button
                text={"QUERO ESSES RESULTADOS!"}
                onClick={handleClickButton}
                my="16"
            />
            <div className="w-full lg:w-4/5 px-8 lg:px-0 flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
                {
                    depoiments.map((depoiment, index) =>
                        index >= 3 &&
                        <div
                            key={depoiment.id}
                            className={`w-[350px] h-[600px] sm:w-[450px] sm:h-[700px] md:[450px] md:h-[420px] lg:h-[500px] xl:w-[300px] xl:h-[550px] bg-white snap-center`}
                        >
                            <iframe
                                src={depoiment.link}
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    )
                }
            </div>
            <p className="w-full lg:w-1/2 p-6 text-center text-white font-medium text-2xl md:text-3xl">Pessoas satisfeitas que voltaram a ter uma vida em paz e sem dores</p>
            <Button
                text={"QUERO ESSES RESULTADOS!"}
                onClick={()=> window.location.href="#container-sales"}
                my="16"
            />
        </div>
    )
}

export default Depoiments