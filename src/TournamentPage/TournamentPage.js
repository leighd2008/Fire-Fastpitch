import React from 'react';
import Tournaments from './Tournaments';
import { Card, CardTitle } from 'reactstrap';

const TournamentPage = () => {
  let indexStart = 1;
  let indexEnd = 5;

  return (
    <Card className="ma3 roster" style={{ backgroundColor: '#6c757d', borderColor: 'red', borderWidth: '4px', minWidth:'48vw' }}>
      <CardTitle tag="h1">Tournaments</CardTitle>
      <Tournaments indexStart={indexStart} indexEnd={indexEnd} />
      <Tournaments indexStart={5} indexEnd={8} />
      <Tournaments indexStart={8} indexEnd={11} />
    </Card>
  )
}

export default TournamentPage;