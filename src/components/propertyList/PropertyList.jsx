import './propertyList.css'

const PropertyList = () => {
    return (
        <div className='pList'>
            <div className='pListItem'>
                <img className='pListImg' src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/a1/9c/80/essentia-luxury-hotel.jpg?w=700&h=-1&s=1' alt='' />
                <div className='pListTitles'>
                    <h1>Hotels</h1>
                    <h2>3141 hotels</h2>
                </div>
            </div>
            <div className='pListItem'>
                <img className='pListImg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsnvObE3Slo5N5HSLuC_h5XAqNTCnjL6dzaQ&usqp=CAU' alt='' />
                <div className='pListTitles'>
                    <h1>Apartments</h1>
                    <h2>1241 hotels</h2>
                </div>
            </div>
            <div className='pListItem'>
                <img className='pListImg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr5iR6Ux9sVC3pO517IDDmWe4WmI40yP_RDQ&usqp=CAU' alt='' />
                <div className='pListTitles'>
                    <h1>Restaurant</h1>
                    <h2>4641 hotels</h2>
                </div>
            </div>
            <div className='pListItem'>
                <img className='pListImg' src='https://media.cntraveler.com/photos/53da60a46dec627b149e66f4/master/pass/hilton-moorea-lagoon-resort-spa-moorea-french-poly--110160-1.jpg' alt='' />
                <div className='pListTitles'>
                    <h1>Resorts</h1>
                    <h2>8462 hotels</h2>
                </div>
            </div>
        </div>
    )
}

export default PropertyList