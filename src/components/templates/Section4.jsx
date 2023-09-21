const Section4 = () => {


    
    return (
        <div className="w-full py-16 flex flex-col items-center justify-center bg-[#f7f8ee]">

            <h2 className="text-[#522a10] text-2xl sm:text-3xl md:text-5xl text-center font-bold py-4">
                Conheça nossas instalações!
            </h2>
            <h2 className="text-[#d7a225] text-lg md:text-xl px-2 md:px-0 text-center font-bold ">
                O Curcumy é feito nos padrões mais rigorosos da indústria
            </h2>

            <div className="md:w-[90%] lg:w-3/4 flex flex-col md:flex-row md:justify-evenly gap-4 my-8">
                <iframe
                    src="https://player.vimeo.com/video/811242492?h=e8c548aea6&badge=0&autopause=0&player_id=0&app_id=58479"
                    className="w-[350px] h-[600px] sm:w-[450px] sm:h-[800px] md:h-[500px] lg:w-[400px] lg:h-[700px]"
                ></iframe>
                <iframe
                    src="https://player.vimeo.com/video/811242450?h=e6ee44cbb5&badge=0&autopause=0&player_id=0&app_id=58479"
                    className="w-[350px] h-[600px] sm:w-[450px] sm:h-[800px] md:h-[500px] lg:w-[400px] lg:h-[700px]"
                ></iframe>
            </div>
        </div>
    )
}

export default Section4