import React, { Component, Fragment } from 'react';
import RestaurantView from './RestaurantView'
import ImageGallery from './ImageGallery'

class RestaurantsContainer extends Component {
    state = {
        restaurants: []
    }


    componentDidMount(){
        fetch('https://api.foursquare.com/v2/venues/5893aa7e1e1de501d95e372e/photos?oauth_token=OAHNAK10ZIN0UVCODPJQORTEA3IRST3ESAR5V4INZLCF04HK&v=20180817')
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(res => this.setState({restaurants: res.response.photos.items}))
    }

    picsMaker = () => {
        // debugger
        return  this.state.restaurants.map( (rest,index) => { return <RestaurantView res={rest} key={index} />}  )
    }
    
    render(){
        console.log(this.state.restaurants);
        
        return (
            <div className='uff'>
                {this.picsMaker()}
                Hello from the RestaurantsContainer
                <ImageGallery />
            </div>
        )
    }
}

export default RestaurantsContainer;
