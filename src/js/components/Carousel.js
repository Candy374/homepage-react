/**
 * Created by huangling on 21/05/2017.
 */

import React from 'react';

const Carousel = (props) => {
    const { children } = props;
    const activators = [];
    const controls = [];
    const tracks = React.Children.map(children, (child, index) => {
        return (
            <div className="carousel__slide" key={index}>
                {child}
            </div>
        );
    });

    const count = tracks.length;
    for(let i = 0; i < count; i++) {
        activators.push(
            <input className="carousel__activator" type="radio" name="carousel" id={i} defaultChecked={i == 0}/>
        );

        controls.push(
            <div className="carousel__controls">
                <label className="carousel__control carousel__control--backward" htmlFor={(count + i + 2) % count}/>
                <label className="carousel__control carousel__control--forward" htmlFor={(i + 1) % count}/>
            </div>
        )
    }

    return (
        <div className="carousel-container">
            <img className='quote' src="../assets/client_say_bg.png"/>
            <div className="carousel carousel--translate">
                {activators}
                {controls}
                <div className="carousel__track">{tracks}</div>
            </div>
        </div>
    );
};

export default Carousel;