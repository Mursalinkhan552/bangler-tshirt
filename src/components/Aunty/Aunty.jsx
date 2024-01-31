import React from 'react';
import Cousine from '../Cousine/Cousine';

const Aunty = () => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className='flex'>
                <Cousine>Abir</Cousine>
                <Cousine hasFriend={true}>Nibir</Cousine>
            </section>
        </div>
    );
};

export default Aunty;