import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;
    
    return (

      <div className="planet-card" data-testid="planet-card">
        <p data-testid="planet-name">{ planetName }</p>
        <img class='planet-img' src={ planetImage } alt={ `Planeta ${planetName}` }/>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetImage: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
};

export default PlanetCard;
