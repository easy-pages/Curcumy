import Header from "../components/templates/Header"
import Main from "../components/templates/Main"
import CommonQuestions from "../components/templates/CommonQuestions"
import Depoiments from "../components/templates/Depoiments"
import Depoiments2 from "../components/templates/Depoiments2"
import Sale from "../components/templates/Sale"
import Section1 from "../components/templates/Section1"
import Section10 from "../components/templates/Section10"
import Section11 from "../components/templates/Section11"
import Section2 from "../components/templates/Section2"
import Section3 from "../components/templates/Section3"
import Section4 from "../components/templates/Section4"
import Section5 from "../components/templates/Section5"
import Section6 from "../components/templates/Section6"
import Section7 from "../components/templates/Section7"
import Section8 from "../components/templates/Section8"
import Section9 from "../components/templates/Section9"
import Footer from "../components/templates/Footer"
import { Suspense, useEffect, useState } from "react"
import Whatsapp from "../components/templates/Whatsapp"
import GetWhatsapp from "../modals/getWhatsapp"
import { useParams } from "react-router-dom"
import axios from "axios"

const Home = () => {
    const [canLoad, setLoad] = useState();
    const [clients, setClients] = useState()
    const { id_client } = useParams();

    useEffect(() => {
        (async () => {
            const client = await axios.get(`https://api.saudevivida.site/clients`).catch(err => console.log(err));
            if (client?.status === 200) setClients(client.data)

        })();
    }, [])

    useEffect(() => {
        if (clients) {
            const client = clients.find(client => client.nome === id_client)
            const pixel = client?.pixel_fb;

            if(pixel){
                // eslint-disable-next-line no-undef
                fbq('init', pixel);
                // eslint-disable-next-line no-undef
                fbq('track', 'PageView');
            }
            
            
            const timerout = setTimeout(() => {
                setLoad(true)
                clearTimeout(timerout)
            }, 3000)
        }else{
            // eslint-disable-next-line no-undef
            fbq('init', "2556646064501050");
            // eslint-disable-next-line no-undef
            fbq('track', 'PageView');
        }
    }, [clients, id_client])


    useEffect(() => {
        const timeout = setTimeout(() => {
            // eslint-disable-next-line no-undef
            fbq('trackCustom', 'UserIsInterested', { describe: "Usuario passou mais de 2 minutos visualizando a pagina de vendas" });
            clearTimeout(timeout)
        }, 120000);

        return () => clearTimeout(timeout)
    }, [])

    return (
        <div className="w-screen">
            <Header />
            <Suspense fallback={<span>Loading...</span>}><Main /></Suspense>
            <Suspense fallback={<span>Loading...</span>}><GetWhatsapp /></Suspense>

            {
                canLoad &&
                <>
                    <Suspense fallback={<span>Loading...</span>}><Section1 /></Suspense>
                    <Suspense fallback={<span>Loading...</span>}><Section2 /></Suspense>
                    <Suspense fallback={<span>Loading...</span>}><Depoiments /></Suspense>
                    <Suspense fallback={<span>Loading...</span>}><Section3 /></Suspense>
                    <Suspense fallback={<span>Loading...</span>}><Section4 /></Suspense>
                    <Suspense fallback={<span>Loading...</span>}><Section5 /></Suspense>
                    <Suspense fallback={<span>Loading...</span>}><Section6 /></Suspense>
                    <Suspense fallback={<span>Loading...</span>}><Section7 /></Suspense>
                    <Suspense fallback={<span>Loading...</span>}><Section8 /></Suspense>
                    <Suspense fallback={<span>Loading...</span>}><Section9 /></Suspense>
                    <Suspense fallback={<span>Loading...</span>}><Section10 /></Suspense>
                    <Suspense fallback={<span>Loading...</span>}><Depoiments2 /></Suspense>
                    <Suspense fallback={<span>Loading...</span>}><Sale page="Sales Page" /></Suspense>
                    <Suspense fallback={<span>Loading...</span>}><Section11 /></Suspense>
                    <Suspense fallback={<span>Loading...</span>}><CommonQuestions /></Suspense>
                    <Suspense fallback={<span>Loading...</span>}><Footer /></Suspense>
                    <Suspense fallback={<span>Loading...</span>}><Whatsapp /></Suspense>
                </>
            }

        </div>
    )
}

export default Home