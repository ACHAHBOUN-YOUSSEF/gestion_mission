import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Agent from './agent';
import Update_agnet from './Update_agnet';
import Mission from './mission';
import Vehicule from './véhicule';

export default function Home() {
    return (
        <BrowserRouter>
            <Header /> 
            <Routes>
                {/* <Route path="/home"/> */}
                <Route path="/agent"element={<Agent/>} />
                <Route path='/update_agent/:id' element={<Update_agnet/>}/>
                <Route path='/mission' element={<Mission/>}/>
                <Route path='/véhicule' element={<Vehicule/>}/>
            </Routes>
        </BrowserRouter>
    );
}
