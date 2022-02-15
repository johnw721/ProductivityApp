import React, { Component } from 'react'
import { Button } from 'react-native'

export default class FullHabit extends Component {
    render() {
        return (
            <div>
                <div>
                {this.props.habit.title}
                </div>
                <div>
                {this.props.habit.totalTime}
                </div>
                <Button>
                    Add Stages
                </Button>
                <Button>
                    Frequency
                </Button>
                <Button>
                    Support
                </Button>
            </div>
        )
    }
}
