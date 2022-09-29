import { Routes, Route } from 'react-router-dom';
import { Сonverter } from './components/Сonverter'
import { Сourses } from './components/Сourses'


const App = () => {
	return (
		<div className='App'>
					<Routes>					
						<Route path="/converter" exact element={ <Сonverter/> } />
						<Route path="/courses" exact element={ <Сourses/>} />
						<Route path="/" exact element={ <Сonverter/>} />
					</Routes>		
		</div>
	)
}

export default App