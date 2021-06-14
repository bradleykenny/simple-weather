import React from 'react';

type CardProps = {
    day: string,
    description: string,
    avgTemp: string,
    minTemp: string,
    maxTemp: string,
    icon: string
};
type CardState = {};

class Card extends React.Component<CardProps, CardState> {
    
    render () {
        const iconUrl: string = `http://openweathermap.org/img/wn/${this.props.icon}@4x.png`;
        
        return (
            <div className="w-80 px-8 pt-8 pb-4 bg-white shadow-md rounded-md">
                <h1 className="text-2xl mb-2">{this.props.day}</h1>
                <h2 className="text-8xl mb-2">{this.props.avgTemp}ºC</h2>
                <h2 className="text-gray-500 italic">{this.props.description}</h2>
                <img src={iconUrl} className="m-auto" />
            </div>
        );
    }

}

export default Card;