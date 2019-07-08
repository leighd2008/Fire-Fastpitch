import React from 'react';
import { Jumbotron } from 'reactstrap';
import Contact from '../Contact/Contact';
import fieldImage from '../images/mark-duffel-352915-unsplash2.jpg';
import HomeField from '../HomeField/HomeField';
// import Banner from '../Banner/Banner';
import './Home.css';

const Home = ({ homeImage }) => {
  const contact1="Fire.Fastpitch.Softball@gmail.com"
  const contact2="Phone: (330)646-9157"
  const fieldName="Johnson Community Center"
  const fieldAddress1="800 Gilmer Rd,"
  const fieldAddress2="Leavittsburg, Ohio 44430"
  const googleMapLink="https://goo.gl/maps/TSZ2T6Ti4oo"
  
  return (
    <div className="App">
      <Jumbotron style={{ backgroundImage: `url(${homeImage})`, width: '90vw', /*height: '40vw', maxWidth: '600px', maxHeight: '600px',*/ border: 'none' }}> 
      </Jumbotron>
      <div>
        {/* <Banner
          // backgroundImage={BC12UTeams}
          teamName='Buckeye Charge 12U Teams'
        /> */}
      </div>
      <div  >
        <Contact contact1={contact1} contact2={contact2} />
        <HomeField
          fieldName={fieldName}
          fieldAddress1={fieldAddress1}
          fieldAddress2={fieldAddress2}
          googleMapLink={googleMapLink}
          fieldImage={fieldImage}
        />
      </div> 
    </div>
  );
}

export default Home;
