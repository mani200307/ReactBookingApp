import './featured.css'

const Featured = () => {
    return (
        <div className='featured'>
            <div className='featuredItem'>
                <img
                    src='https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80'
                    alt=''
                    className='featuredImg'
                />
                <div className='featuredTitles'>
                    <h1>Dublin</h1>
                    <h1>123 properties</h1>
                </div>
            </div>
            <div className='featuredItem'>
                <img
                    src='https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    alt=''
                    className='featuredImg'
                />
                <div className='featuredTitles'>
                    <h1>Austin</h1>
                    <h1>472 properties</h1>
                </div>
            </div>
            <div className='featuredItem'>
                <img
                    src='https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-1287145.jpg&fm=jpg'
                    alt=''
                    className='featuredImg'
                />
                <div className='featuredTitles'>
                    <h1>Reno</h1>
                    <h1>725 properties</h1>
                </div>
            </div>
        </div>
    )
}

export default Featured