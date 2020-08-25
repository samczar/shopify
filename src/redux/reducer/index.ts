import { combineReducers } from 'redux'

// import { bookReducer } from './book/reducer'
// import { countryReducer } from './country/reducer'

const authorReducer = () => {
	return [{ name: 'Sam Czar' }, { name: 'Heavens Senetor' }]
}

export default combineReducers({
	// books: bookReducer,
	// countries: countryReducer,
	authors: authorReducer,
})
