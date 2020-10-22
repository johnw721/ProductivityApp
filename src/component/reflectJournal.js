import React, { Component } from 'react'

import './reflectPage.scss'

export default class ReflectJournal extends Component {
    render() {
        return (
            <div className='reflect'>
                <textarea name='Journal' cols='10' rows='45'/> 
            </div>
        )
    }
}
