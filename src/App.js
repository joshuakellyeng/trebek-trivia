import React, { Component } from 'react';
import './App.css';



class App extends Component {
	state = {
		baseURL: 'http://jservice.io/api/random',
		triviaQuestion: ""
	}


	handleChange = (e) => {
		this.setState({
		  [e.target.id]: e.target.value
		})
	  }

	  componentDidMount() {
		console.log('mounted app.js')
		fetch(this.state.baseURL)
		  .then(response => response.json())
		  .then(data => this.setState({ triviaQuestion: data.pop() }))
		  .catch(error => console.error(error))
	  }
	render() {
		const {question, answer, value} = this.state.triviaQuestion
		return (
			<div className='flex'>
				<h1>Welcome to Jeopardy</h1>
				<h2>Score: </h2>
				<div className="buttons">
					<button>Decrease</button>
					<button>Increase</button>
					<button>Reset</button>
				</div>
				<h2>Let's Play!</h2>
				<button>Get Question</button>
				<h2>Category: {this.state.triviaQuestion.category?.title} </h2>
				<h3>Points: {value} </h3>
				<div>
					<h3>Answer: {question} </h3>
				</div>

				<button>Click To Reveal Question</button>
				<h1>What is: {answer}</h1>
			</div>
		);
	}
}

export default App;
