import React, { Component } from 'react'
import{  toggleYoutube,toggleCamera, toggleSpotify } from '../../redux/actions/index'

export default class supportForm extends Component {
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <button onClick={toggleYoutube()}>
                    <i></i>Youtube
                </button>
                <button onClick={toggleCamera()}>
                    <i></i>Camera
                </button>
                <button onClick={toggleSpotify()}>
                    <i></i>Spotify
                </button>
            </form>
        )
    }
}
