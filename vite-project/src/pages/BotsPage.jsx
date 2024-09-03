import BotsList from "../components/BotsList";
import Filter from "../components/Filter";
import { useState } from 'react';

const BotPage = () => {
    // Decided not to use context here since only the two direct children of this
    // component use this state. I don't want to overpopulate the global context.
    const [botTypeFilter, setBotTypeFilter] = useState('');


    const handleSubmit = async(e) => {
        e.preventDefault() //prevent default action of submit
        const fetchAllRobotsFromJson = {}
        const response = await fetch('http://localhost:4000/robots',{
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body : JSON.stringify(fetchAllRobotsFromJson)
        });
    
        const data = await response.json()
        
    }
    return (
        <div className="backgroundColor" >
            <h1>Robot Army</h1>
            <Filter setBotTypeFilter={setBotTypeFilter} />
            <BotsList botTypeFilter={botTypeFilter} />
        </div>
    )
}

export default BotPage