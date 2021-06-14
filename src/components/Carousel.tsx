import React from 'react';

type CarouselProps = {};
type CarouselState = {};

class Carousel extends React.Component<CarouselProps, CarouselState> {
    
    render () {
        const apiUrl: string = `https://api.openweathermap.org/data/2.5/onecall?lat=-33.839490&lon=151.209080&appid=${process.env.REACT_APP_API}`;
        const weatherData = fetch(apiUrl).then(res => res.json()).then(res => res);

        console.log(weatherData);
        
        return (
            <></>
        );
    }

}

export default Carousel;