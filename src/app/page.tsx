
import NavBar from './components/NAVBAR';
import AboutUs from './components/About';
import Services from './components/Services';
import Header from './components/Header';




export default function HomePage() {
    return (
        <div>
            <NavBar />
            <Header/>
            <AboutUs/>
            <Services/>
         
        </div>
    );
}
