import 'bootswatch/dist/cosmo/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css';

function App ({ Component, pageProps }) {
    return <Component { ...pageProps } />
}

export default App;