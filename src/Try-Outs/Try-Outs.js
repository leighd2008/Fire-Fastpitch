import React from 'react';
import { Card, CardTitle, CardText, CardBody, Jumbotron } from 'reactstrap';
import './Try-outs.css';

const TryOuts = ({ homeImage }) => {
  
  return (
    <div className="App">
      <Jumbotron style={{ backgroundImage: `url(${homeImage})`, width: '90vw',border: 'none' }}> 
      </Jumbotron>
      <div>
        <Card style={{ backgroundColor: '#6c757d00', borderColor: '#6c757d00' }}>
          <CardBody>
            <CardTitle className="tc f1" tag="h1">Are you ready to play with FIRE?</CardTitle>
            <h3>FIRE FASTPITCH Try-outs are over, however, we still have roster spots to fill for 8U and 10U. </h3>
            <CardText tag="h1">
              <h3>If you or anyone you know is interested in discussing a coaching opportunity or would like to get a private tryout for your daughter please contact us here by email or phone at: </h3>
              Fire.Fastpitch.Softball@gmail.com
              <br/>
              Phone: 330-980-1366
              <br/>
            </CardText>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default TryOuts;
