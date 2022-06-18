import React from 'react';
import { Button } from 'react-bootstrap';
import SingleEvent from '../SingleEvent/SingleEvent';
import useEvents from './../../../hooks/useEvents'

const Events = () => {
    const [events] = useEvents()
    return (
        <section className='py-5 mt-5'>
            <div className='container '>
                <div className=" text-start">
                    <Button variant="outline-dark" className='mt-2 px-3 rounded-pill' >Events</Button>
                    <Button variant="outline-dark" className='mt-2 ms-3 px-3 rounded-pill' >Mentors</Button>

                    <hr />
                    <h2 style={{ color: "#1E0A3C" }}> Events</h2>
                </div>

                <div className="row g-3 pt-4">
                    {
                        events.map(event => <SingleEvent
                            key={event.id}
                            event={event}
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Events;