import React, { Component } from 'react';
import Header from './Header';

class Joke extends Component {
    state = { joke: {}};

    fetchJoke = () => {
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(json => this.setState({joke: json}));
    }
    componentDidMount() {
        this.fetchJoke();
    };

    render() {
        const { setup, punchline } = this.state.joke
        return(
            <div className='joke'>
                <Header />
                <h3>Thanks for dropping by. Here's a random joke:</h3>
                <p>{setup}</p>
                <p><em>{punchline}</em></p>
                <div>
                    <button onClick={this.fetchJoke}> Give me another one</button>
                </div>
            </div>
        )
    }
}

export default Joke;