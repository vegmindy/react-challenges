import React, { Component } from 'react';

class DogIndex extends Component {
    constructor(props) {
        super(props);

        this.state = {
            img: ''
        }

        this.getNewImage();
    }

    getNewImage() {

        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    img: data.message
                })
            })
            .catch(err => console.log({
                err,
                message: 'oh no, something went wrong!'
            })
            )
    }

    render() {
        return (
            <div>
                <img alt="pruppet" src={this.state.img}></img>
                <br />
                <button onClick={this.getNewImage}>New Image</button>
            </div>
        )
    }
}

export default DogIndex