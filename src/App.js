import React, { Component } from 'react';
import './App.css';

class App extends Component {
	state = {
		baseURL: 'http://jservice.io/api/random',
		triviaQuestion: '',
		score: 0,
		question: true,
	};

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};

	handleGetTriviaQuestion = (e) => {
		fetch(this.state.baseURL)
			.then((response) => response.json())
			.then((data) => this.setState({ triviaQuestion: data.pop() }))
			.catch((error) => console.error(error));
	};

	handleRevealQuestion = (e) => {
		const isHidden = this.state.question;
		this.setState({ question: !isHidden });
	};

	handleIncreaseScore = (e) => {
		this.setState({
			score: (this.state.score += this.state.triviaQuestion.value),
		});
	};

	handleDecreaseScore = (e) => {
		this.setState({
			score: (this.state.score -= this.state.triviaQuestion.value),
		});
	};

	handleScoreReset = (e) => {
		this.setState({ score: 0 });
	};

	render() {
		const { question, answer, value } = this.state.triviaQuestion;
		return (
			<div>
				<div className="flex game">
					<h1>Welcome to Jeopardy!</h1>
					<h2>Score: {this.state.score} </h2>
					<div className="buttons">
						<button
							className="ui inverted red button"
							onClick={this.handleDecreaseScore}
						>
							Decrease
						</button>
						<button
							className="ui inverted blue button"
							onClick={this.handleIncreaseScore}
						>
							Increase
						</button>
						<button
							className="ui inverted grey button"
							onClick={this.handleScoreReset}
						>
							Reset
						</button>
					</div>
					<h2>Let's Play!</h2>
					<button
						className="ui inverted yellow button"
						onClick={this.handleGetTriviaQuestion}
					>
						Get Question
					</button>
					<h2>Category: {this.state.triviaQuestion.category?.title} </h2>
					<h3>Points: {value} </h3>
					<div>
						<h3>Answer: {question} </h3>
					</div>

					<button
						className="ui inverted green button"
						onClick={this.handleRevealQuestion}
					>
						Click To Reveal Question
					</button>
					<h1 className={this.state.question ? 'hide' : null}>
						What is: {answer}
					</h1>
				</div>
			</div>
		);
	}
}

export default App;
