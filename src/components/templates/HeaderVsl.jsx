import axios from "axios";
import { useEffect, useState } from "react"

const HeaderVsl = () => {
    const [city, setCity] = useState();

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                // Obtém as coordenadas de latitude e longitude
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                // Crie uma URL para a solicitação de geocodificação reversa
                var url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;

                const response = await axios.get(url).catch(err => console.log(err))

                if(response.status === 200){
                    const city = response.data.address.city;
                    city ? setCity(city) : setCity("Brasil");
                }else setCity("Brasil")


            })
        } else setCity("Brasil")
    }, [])


    return (
        <div className="w-full flex justify-center bg-gradient-to-r from-green-500 to-green-800">
            <h2 className="w-full text-md md:text-xl text-center font-bold text-white leading-6 md:leading-8 p-1 py-2 sm:p-4">
                Selecionamos você e mais 
                <span className="text-green-800 uppercase bg-white px-1 rounded-full mx-1">5</span> 
                Pessoas proximas {city ? "de ":"da sua"}
                <span className="text-green-800 uppercase  bg-white px-1 rounded-full mx-1">{city ? city : " cidade"} </span> 
                para ver esse conteúdo.
            </h2>
        </div>
    )
}

export default HeaderVsl