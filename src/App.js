import React, { Component } from 'react';
import './App.css';

class App extends Component {
	render() {
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
				<h2>Category: </h2>
				<h3>Points: </h3>
				<div>
					<h3>Answer: </h3>
				</div>

				<button>Click To Reveal Question</button>
			</div>
		);
	}
}

export default App;
