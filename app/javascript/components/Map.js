import React from "react"
import PropTypes from "prop-types"
import mapboxgl from 'mapbox-gl'

class Map extends React.Component {
  componentDidMount() {
    mapboxgl.accessToken = this.props.accessToken;

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9'
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render () {
    const style = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '100%'
    };

    return <div style={style} ref={el => this.mapContainer = el} />;
  }
}

Map.propTypes = {
  accessToken: PropTypes.string
};
export default Map
