import './hotel.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Hotel = () => {
  const photos = [
    {
      src: 'https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768'
    },
    {
      src: 'https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg'
    },
    {
      src: 'https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg'
    },
    {
      src: 'https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg'
    },
    {
      src: 'https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg'
    },
    {
      src: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/orlandofl/5900_pool_b92df465-0c67-4161-b8bb-67f9fc301094.jpg'
    },
  ]
  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className='hotelContainer'>
        <div className='hotelWrapper'>
          <button className='bookNow'>Reserve or Book Now!</button>
          <h1 className='hotelTtitle'>Grand Hotel</h1>
          <div className='hotelAddress'>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </div>
          <span className='hotelDistance'>
            Excellent location - 500m from center
          </span>
          <span className='hotelPriceHighlight'>
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className='hotelImages'>
            {photos.map(photo => (
              <div className='hotelImgWrapper'>
                <img src={photo.src} alt='' className='hotelImg' />
              </div>
            ))}
          </div>
          <div className='hotelDetails'>
            <div className='hotelDetailsTexts'>
              <h1 className='hotelTitle'>Stay in the heart of Krakov</h1>
              <p className='hotelDesc'>
                Live in it! Excellent Environment with kind natured guest welcome with welcome drink and best hotel in trichy with 5 star rating. Incredible welcoming of all employees towards guest asking and completing their orders and direction guidance until to rooms and available areas in hotel.. best wishes and thankful to all employees
              </p>
            </div>
            <div className='hotelDetailsPrice'>
              <h1>Perfect for 9-night stay!</h1>
              <span>
                Located in thereal heart of Krakov, this is an excellent location of score 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
              </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel