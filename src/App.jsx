import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Agent from './agent';
import UpdateAgent from './Update_agent';
import Mission from './mission';
import Vehicule from './véhicule';
import Fournisseur from './fournisseur';
import Login from './login';
import Notifications from './notifications';

export default function Home() {
    const data = [
        { id: 1, name: "Fournisseur A", contact: "0612345678", address: "Adresse 1" },
        { id: 2, name: "Fournisseur B", contact: "0623456789", address: "Adresse 2" },
    ];

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/*' element={
                    <>
                        <Header />
                        <Routes>
                            <Route path='/agent' element={<Agent />} />
                            <Route path='/update_agent/:id' element={<UpdateAgent />} />
                            <Route path='/mission' element={<Mission />} />
                            <Route path='/véhicule' element={<Vehicule />} />
                            <Route path='/fournisseur' element={<Fournisseur data={data} />} />
                            <Route path='/notifications' element={<Notifications/>} />
                        </Routes>
                    </>
                } />
            </Routes>
        </BrowserRouter>
    );
}
