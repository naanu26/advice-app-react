import React, {Component} from 'react';
import  './App.css';
import axios from 'axios';


class App extends Component {

    state = {
        advice: ' '
    }

    componentDidMount() {
        this.fetchAdvie();
    }

    fetchAdvie = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                //console.log(response);
                //console.log(response.data.slip.advice);

                this.setState({advice: response.data.slip.advice})
            })
            
            .catch((error) => {
                console.log(error);
            });
    }


    render() {
        return(
            <div className="app">
                <div className="card">
                    <h1 className="heading">{this.state.advice}</h1>
                    <button className="button" onClick={this.fetchAdvie}>
                        <span>GET ADVICE!</span>
                    </button>
                </div>
            </div>
            
        );
    }
}

export default App;