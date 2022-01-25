import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from '../pages/Index';
import Show from '../pages/Show';

function Main(props) {
    const [ random, setRandom ] = useState(null);
    const URL = 'http://localhost:4000/random';

    const getRandom = async () =>{
        const response = await fetch(URL);
        const data = await response.json;
        setRandom(data);
    }
    
    const createRandom = async (rando) => {
        //make post request to create people
        await fetch(URL, {
            method: "POST",
            headers: {
                'Content-Type' : 'Application/json',
            },
            body: JSON.stringify(rando),
        });
        //update list of people
        getRandom();
    }

    useEffect(() => getRandom(), []);
    
    return (
        <main>
            <Switch>
                <Route exact path='/'>
                    <Index />
                </Route>
                <Route
                    path='/random/:id'
                    render={(rp) => (
                        <Show
                            {...rp}
                        />
                    )}
                />

            </Switch>
        </main>
    )
}

export default Main;