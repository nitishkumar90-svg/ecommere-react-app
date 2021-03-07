import React from 'react'
import '../css/App.css'
import Footer from './Shared/Footer'
import Header from './Shared/Header'
import '../css/reset.css'
import '../css/style.css'
import '../css/responsive.css'
import Main from './Homepage/Main'

const App = () => {
	return (
		<>
			<Header />
			<Main />
			<Footer />
		</>
	)
}

export default App