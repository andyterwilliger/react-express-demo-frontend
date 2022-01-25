import { Link } from 'react-router-dom'
import { useState } from 'react';

function Index(props) {
    //state to hold form data
    const [newForm, setNewForm] = useState({
        name: '',
        image: '',
        title: ''
    });



    //loaded function

    const loaded = () => {
        return props.random.map((rando) => (
            <div key={rando._id} className='random'>
                <Link to={`random/${rando._id}`}><h1>{rando.name}</h1></Link>
                <img src={rando.image} alt={rando.name} />
                <h3>{rando.title}</h3>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Loading...</h1>
    };

    return props.random ? loaded() : loading();


}

export default Index;


