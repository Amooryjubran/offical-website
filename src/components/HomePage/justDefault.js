import React from 'react';
import Title from '../Title';

export default function JustDefault() {
    return (
        <div className="just-default">
            <div className="inside-container">
                <Title title="just default section" color="#aab5b9" />
                <div className="just-default-center">
                    <div className="just-texts">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos illum, laborum voluptates iste perspiciatis nobis modi deleniti nulla beatae vero nam necessitatibus? Quasi atque amet ex, placeat consectetur nobis magni!</p>

                    </div>
                    <div className="just-video">
                    <iframe   src="https://www.youtube.com/embed/n-VRntrbypI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{border:"none"}}></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
