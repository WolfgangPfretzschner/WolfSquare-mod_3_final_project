import React, { Component, Fragment } from 'react'

class RestaurantView extends Component {
    constructor(props) {
        super(props)
        
    };
    makeImg = () => {
        // this.props.res.map( res => {
        //     // debugger
        //     const src= res.prefix+"height300"+res.suffix 
        //     console.log(src);
            
        // })
    }
    render() {
        console.log(this.props.res);
        
        return (
            <Fragment>
                <img src={`${this.props.res.prefix}height300${this.props.res.suffix}`}/>
                {/* {this.makeImg()} */}
            </Fragment>
        )
    }
}

export default RestaurantView

