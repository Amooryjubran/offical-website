import React from 'react';
import Title from '../Title';

export default function JustDefault() {
    return (
        <div className="just-default">
            <div className="inside-container">
                <Title title="Italy is right here" color="#fff" />
                <div className="just-default-center">
                    <div className="just-texts">
                        <p>TASTE OF ROME offers the real italian food, it makes you feel like you are in Italy. You do not have to travel all the way to Italy to try the food, TASTE OF ROME provides it for you </p>

                    </div>
                    <div className="just-video">
                    <iframe src="https://www.youtube.com/embed/n-VRntrbypI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{border:"none"}}></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
