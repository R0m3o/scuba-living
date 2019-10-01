import React, { useState } from 'react';
import Regulator from '../../../assets/images/dynamic/reg.jpg';
import Rejsefine from '../../../assets/images/dynamic/fine.jpg';
import SvoemmeHansker from '../../../assets/images/dynamic/hanske.jpg';

const Udstyr = () => {
    const [udstyrene, setUdstyrene] = useState([
        {
            image: Regulator, 
            alt: 'en regulator med resist', 
            title: 'REGULATOR MED RESIST', 
            price: 'KR. 899,-', 
            id: 1
        },
        {
            image: Rejsefine, 
            alt: 'rejse-venlige svømmeføder', 
            title: 'REJSEFINNE', 
            price: 'KR. 999,-', 
            id: 2
        },
        {
            image: Rejsefine, 
            alt: 'rejse-venlige svømmeføder', 
            title: 'REJSEFINNE', 
            price: 'KR. 999,-', 
            id: 3
        },
        {
            image: SvoemmeHansker, 
            alt: 'svømmehansker', 
            title: 'KOLDVANDS HANSKER', 
            price: 'KR. 1499,-', 
            id: 4
        }
    ]);
    return (
        <div className="row">
            {udstyrene.map(udstyret => {
                return (
                    <article key={ udstyret.id }>
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
