import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div className="list-missions" data-testid="missions">
        <div class='t-missions'><Title  headline="Missões" /></div>
        <div className="flex missions-container">
        {missions.map(({ name, year, country, destination }) => (
          <MissionCard
            name={ name }
            year={ year }
            country={ country }
            destination={ destination }
            key={ name }

          />
        ))}
        </div>
      </div>
    );
  }
}

export default Missions;
