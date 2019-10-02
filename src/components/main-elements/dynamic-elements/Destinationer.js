import React, { useState } from 'react';
import Malta from '../../../assets/images/dynamic/malta.jpg';
import Norge from '../../../assets/images/dynamic/norge.jpg';

const DykkerDestinationer = () => {
    const [destinationer, setDestinationer] = useState([
        {
            image: Malta, 
            alt: 'dykkere i havet omkring Malta', 
            title: 'Malta', 
            text: 'Oplev skønne Malta og det helt fantastiske dyreliv og sammenhold. Vi arrangerer dykkerrejser til Malta hele året rundt.', 
            id: 1,
            label: 'denne article handler om at tage en dykkerrejse til Malta'
        },
        {
            image: Norge, 
            alt: 'dykkere i havet omkring Norge finder bil vrag', 
            title: 'Norge', 
            text: 'Nordeuropas bedste dykkerspots ligger i Norge. Vi har 25 års erfaring med dyk i Norge. Oplev det klareste vand i verden!', 
            id: 2,
            label: 'denne article handler om at tage en dykkerrejse til Norge'
        }
    ]);
    return (
        <div className="row">
            {destinationer.map(destination => {
                return (
                    <article key={ destination.id } aria-label={ destination.label }>
                        <div className="bg-white">
                            <img src={ destination.image } alt={ destination.alt } className="img-fluid"/>
                        </div>
                        <div className="bg-black">
                            <p className="title text-white">{ destination.title }</p>
                            <p className="text-white">{ destination.text }</p>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}

export default DykkerDestinationer;
