import React, { useState } from 'react';
import Regulator from '../../../assets/images/dynamic/reg.jpg';
import Rejsefine from '../../../assets/images/dynamic/fine.jpg';
import Ur from '../../../assets/images/dynamic/ur.jpg';
import SvoemmeHansker from '../../../assets/images/dynamic/hanske.jpg';

const Udstyr = () => {
    const [udstyrene, setUdstyrene] = useState([
        {
            image: Regulator, 
            alt: 'en regulator med resist', 
            title: 'REGULATOR MED RESIST', 
            price: 'KR. 899,-', 
            id: 1,
            label: 'denne article handler om en regulator som er til salg i webshoppen'
        },
        {
            image: Rejsefine, 
            alt: 'rejse-venlige svømmeføder', 
            title: 'REJSEFINNE', 
            price: 'KR. 999,-', 
            id: 2,
            label: 'denne article handler om nogle rejsefinner som er til salg i webshoppen'
        },
        {
            image: Ur, 
            alt: 'et vandtæt ur', 
            title: 'VANDTÆT UR', 
            price: 'KR. 560,-', 
            id: 3,
            label: 'denne article handler om et ur som er til salg i webshoppen'
        },
        {
            image: SvoemmeHansker, 
            alt: 'svømmehansker', 
            title: 'KOLDVANDS HANSKER', 
            price: 'KR. 1499,-', 
            id: 4,
            label: 'denne article handler om nogle svømmehansker som er til salg i webshoppen'
        }
    ]);
    return (
        <div className="row">
            {udstyrene.map(udstyret => {
                return (
                    <article key={ udstyret.id } aria-label={ udstyret.label }>
                        <img src={ udstyret.image } alt={ udstyret.alt } className="img-fluid"/>
                        <p className="title text-center">{ udstyret.title }</p>
                        <p className="text-center">{ udstyret.price }</p>
                    </article>
                )
            })}
        </div>
    )
}

export default Udstyr;
