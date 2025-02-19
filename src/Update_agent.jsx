import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function UpdateAgent() {
    // État pour les informations de l'agent
    const [agent, setAgent] = useState({
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        age: 30
    });

    // Fonction de mise à jour des champs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setAgent({
            ...agent,
            [name]: value
        });
    };

    // Fonction pour annuler les modifications
    const handleCancel = () => {
        setAgent({
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            age: 30
        });
    };

    // Fonction pour soumettre les informations
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Informations mises à jour :', agent);
        // Ici tu pourrais ajouter une logique pour envoyer les données mises à jour à un serveur
    };

    return (
        <div className="container">
            <h3>Modifier les informations de l'agent</h3>
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">ID</label>
                    <input type="text" className="form-control" id="id" name="id" value={agent.id} readOnly/>
                </div>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">Prénom</label>
                    <input type="text" className="form-control"id="firstName" name="firstName" value={agent.firstName} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Nom</label>
                    <input type="text" className="form-control" id="lastName" name="lastName" value={agent.lastName}onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Âge</label>
                    <input type="number"className="form-control"id="age"name="age"value={agent.age}onChange={handleChange}/>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary m-1">Enregestrer les modifications</button>
                    <button type="button" className="btn btn-secondary m-1" onClick={handleCancel}>Annuler</button>
                </div>
            </form>
        </div>
    );
}
