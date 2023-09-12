import 'bootswatch/dist/cosmo/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Loading from '../components/Loading';
import '../styles/styles.css';

function App ({ Component, pageProps }) {
    //Configurando para detectar, cuando una pagina esta cargando
    const [isLoading, setIsLoading] = useState(false);
    //Establesco un nuevo estado local para controlar el tiempo del temporizador de carga
    const [showLoading, setShowLoading] = useState(false);
    const router = useRouter();

    //Manejamos su ciclo de vida del componente Loading
    useEffect(() => {
        //Defino mi temporizador
        let time;
        const handleStart = () => {
            setIsLoading(true);
            //Mostramos el componente al inicio
            setShowLoading(true);
        }
        const handleComplete = () => {
            //Limpio el temporizador para que no se oculte prematuramente, 
            //evitando el error de cache que se produce despues de recorrer cada una de las rutas por 2° vez
            clearTimeout(time);
            //Muestro el componente Loading durante al menos 3 segundos
            time = setTimeout(() => {
                setIsLoading(false);
            }, 3000);
        }

        //Aqui manejo los eventos y lo asociamos a nuestra arrow function handleStart, 
        //que se ejecutara cuando ocurra el evento
        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        //Finalizao el evento, lo dejamos de escuchar,
        //para evitar problemas de eventos y setear el isLoading en false
        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        }
    }, [router]);

    return(
        <div>
            {isLoading && <Loading/>}
            <Component { ...pageProps } />
        </div>
    )
}

export default App;