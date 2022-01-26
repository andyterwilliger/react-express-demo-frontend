import { Link } from 'react-router-dom'
import { useState } from 'react'; //import useState to create state(track data)


function Index(props) {
    //state to hold form data
    const [newForm, setNewForm] = useState({   //state is newForm, function is setNewForm
        name: '',
        image: '',
        title: ''
    });


    //handleChange function for form

    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value }) //referencing the inputs?
    }

    //handleSubmit function for form

    const handleSubmit = (event) => {
        event.preventDefault(); //stop page from refreshing
        props.createRandom(newForm); //create random func from main.js
        setNewForm({ //clears old state, setting new state
            name: '',
            image: '',
            title: ''
        })
    }



    //loaded function

    const loaded = () => {
        return props.random.map((rando) => (
            <div key={rando._id} className='random'>
                {/*to = l */}
                <Link to={`random/${rando._id}`}><h1>{rando.name}</h1></Link>
                <img src={rando.image} alt={rando.name} />
                <h3>{rando.title}</h3>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Loading...</h1>


        
    }



    //form

    return (
        <section>
            <form onSubmit={handleSubmit}> {/* event handler to submit data when form submitted */}
                <input
                    type="text"
                    name="name"
                    value={newForm.name}
                    placeholder='name'
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="image"
                    value={newForm.image}
                    placeholder='image url'
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="title"
                    value={newForm.title}
                    placeholder='title'
                    onChange={handleChange}
                />
            <input type="submit" value="Create Random"/>

            </form>
            {props.random ? loaded() : loading()}
        </section>
    )
}
export default Index;


