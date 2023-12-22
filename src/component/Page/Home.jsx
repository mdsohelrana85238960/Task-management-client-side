import Banner from "./Section/Banner";
import Calender from "./Section/Calender";
import Reports from "./Section/Reports";


const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <section id="reports">
            <Reports ></Reports>
            </section>

            <section id="calender" >
            <Calender ></Calender>
            </section>
            
        </div>
    );
};

export default Home;