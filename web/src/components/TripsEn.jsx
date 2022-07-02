import {useState, useEffect} from 'react';
import './Style.css'
import {getTrips} from '../api'

function TripsEn() {
	const [trips, setTrips] = useState([]);
	const [keyword, setKeyword] = useState([]);
	useEffect(()=> {
		getTrips('', 'en')
			.then(trips => setTrips(trips))
	}, []);
	const changeKeyword = (text) => {
		window.scrollTo(0, 0)
		setKeyword(text);
		getTrips(text, 'en')
			.then(trips => setTrips(trips))

	}
	const renderTrip = (trip) => {
		return (
			<div id="detail-id" className='renderTrip'>
				<div className="show-img"><img src={trip.photos[0]} alt="img"/></div>
				<div className='description'>
					<h3 id='TripTitle'><a href={trip.url}>{trip.title}</a></h3>
					<p>{trip.description}... <a href={trip.url} className='read'>Read More</a></p>
					<p className='category'>Category :&nbsp;&nbsp;
						<a onClick={() => changeKeyword("")} className='group'>All</a>&nbsp;&nbsp;
						{trip.tags.map(el => (<a onClick={() => changeKeyword(el)} className='group'>{el}&nbsp;&nbsp;</a>))}
					</p>
					<div id='photos-id' className='photos-album'>
						{ (trip.photos.slice(1)).map(el => <img src={el} alt="photos album of trip"/>) }
					</div>
				</div>
			</div>
		);
	}
	return (
		<div>
			<div className='Title'>
				Where we go?
			</div>
			<div className='Search'>
				<input className='SearchBar' type="text" placeholder="Find and go..." onChange={(e) => changeKeyword(e.target.value)} value={(keyword)}/>
			</div>
			<div>
				{ trips.map(trip => renderTrip(trip)) }
			</div>
		</div>
	);
}

export default TripsEn;
