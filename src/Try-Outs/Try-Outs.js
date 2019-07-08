import React from 'react';
import { Card, CardTitle, CardText, CardBody, Jumbotron } from 'reactstrap';
// import Contact from '../Contact/Contact';
// import fieldImage from '../images/mark-duffel-352915-unsplash2.jpg';
// import HomeField from '../HomeField/HomeField';

const TryOuts = ({ homeImage }) => {
  // const contact1="Fire.Fastpitch.Softball@gmail.com"
  // const contact2="Phone: (330)646-9157"
  const fieldName="Johnson Community Center"
  const fieldAddress1="800 Gilmer Rd,"
  const fieldAddress2="Leavittsburg, Ohio 44430"
  const googleMapLink="https://goo.gl/maps/TSZ2T6Ti4oo"
  
  return (
    <div className="App">
      <Jumbotron style={{ backgroundImage: `url(${homeImage})`, width: '90vw', /*height: '40vw', maxWidth: '600px', maxHeight: '600px',*/ border: 'none' }}> 
      </Jumbotron>
      <div>
      <Card style={{ backgroundColor: '#6c757d00', borderColor: '#6c757d00' }}>
          <CardBody>
            <CardTitle className="tc f1" tag="h1">Are you ready to play with FIRE?</CardTitle>
            <h3>FIRE FASTPITCH will have open try outs for divisions 10U, 12U and 14U. </h3>
            <h1>Saturday July 27th & Saturday Aug. 3rd</h1>
            <h3>10U — 10:00 AM - 12:00 PM*</h3>
            <h3>12U — 12:00 PM - 2:00 PM*</h3>
            <h3>14U — 2:00 PM - 4:00 PM*</h3>
            <h1>Wednesday July 31st</h1>
            <h3>All age groups - 6:00 PM - 8:00 PM*</h3>
            <Card style={{ backgroundColor: '#6c757d00', borderColor: '#6c757d00' }}>
            <a href={googleMapLink} target="_blank" 
                rel="noopener noreferrer" 
                className="gmap"><h1>{fieldName}</h1></a>
            <CardText tag="h3">{fieldAddress1}</CardText>
            <CardText tag="h3">{fieldAddress2}</CardText>
            <br/>
        </Card>
            <h3>*Please arrive at least 30 minutes early for your session.</h3>
            <h3>*Pitchers & Catchers should be prepared to stay later than the designated times listed.</h3>
            <h3>*Girls are responsible for being properly dressed in softball attire, and gear (gloves, bats, catchers gear, etc.).</h3>             
            <CardText tag="h1">Evaluations will include: Simple infield & outfield drills, Timed base running, Hitting and Softball IQ. 
                <br/>
                <br/>
                <h3>If you or anyone you know is interested in discussing a coaching opportunity or would like to get a private tryout for your daughter please contact us here by email at: </h3>
                <h3>Fire.Fastpitch.Softball@gmail.com</h3>
                <br/>
                <br/>
              </CardText>
          </CardBody>
        </Card>
      </div>
      <div  >
        
      </div> 
    </div>
  );
}

export default TryOuts;
