import React from 'react';
import PropTypes from 'prop-types';
import MapGL from 'react-map-gl';
import DeckGL from 'deck.gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { isEqual } from 'lodash';
import MapboxLanguage from '../MapBox/mapbox-gl-language';


const TICK = 2000;  // milliseconds

const propTypes = {
  viewport: PropTypes.object.isRequired,
  layers: PropTypes.array.isRequired,
  setControlValue: PropTypes.func,
  mapStyle: PropTypes.string,
  mapboxApiAccessToken: PropTypes.string.isRequired,
  onViewportChange: PropTypes.func,
};
const defaultProps = {
  mapStyle: 'light',
  onViewportChange: () => {},
  setControlValue: () => {},
};

export default class DeckGLContainer extends React.Component {
  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
    this.onViewportChange = this.onViewportChange.bind(this);
    // This has to be placed after this.tick is bound to this
    this.state = {
      previousViewport: props.viewport,
      timer: setInterval(this.tick, TICK),
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.viewport !== prevState.viewport) {
      return {
        viewport: { ...nextProps.viewport },
        previousViewport: prevState.viewport,
      };
    }
    return null;
  }
  componentWillUnmount() {
    clearInterval(this.state.timer);
  }
  onViewportChange(viewport) {
    const vp = Object.assign({}, viewport);
    // delete vp.width;
    // delete vp.height;
    const newVp = { ...this.state.previousViewport, ...vp };

    // this.setState(() => ({ viewport: newVp }));
    this.props.onViewportChange(newVp);
  }

  /**for language control*/
  componentDidMount(){
    const map = this.reactMap.getMap();
    map.on('load', () => {
      //map.addControl(new MapboxLanguage({defaultLanguage:'zh'}));
      map.setLayoutProperty('country-label-lg','text-field','{name_zh}');
      //map.addControl(new MapboxLanguage({defaultLanguage:'zh'}));
      map.setLayoutProperty("tunnel-oneway-arrows-blue-minor",  "text-field", "{name_zh}");
      map.setLayoutProperty("tunnel-oneway-arrows-blue-major",  "text-field", "{name_zh}");
      map.setLayoutProperty("tunnel-oneway-arrows-white", "text-field", "{name_zh}");
      map.setLayoutProperty("tunnel-oneway-arrows-white", "text-field", "{name_zh}");
      //map.setLayoutProperty("turning-features-outline","text-field", "{name_zh}");
      map.setLayoutProperty("road-oneway-arrows-blue-minor",  "text-field", "{name_zh}");
      map.setLayoutProperty("road-oneway-arrows-blue-major","text-field", "{name_zh}");
      //map.setLayoutProperty("level-crossings",    "text-field", "{name_zh}");
      map.setLayoutProperty("road-oneway-arrows-white", "text-field", "{name_zh}");
      //map.setLayoutProperty("turning-features",  "text-field", "{name_zh}");
      map.setLayoutProperty("bridge-oneway-arrows-blue-minor", "text-field", "{name_zh}");
      map.setLayoutProperty("bridge-oneway-arrows-blue-major", "text-field", "{name_zh}");
      map.setLayoutProperty("bridge-oneway-arrows-white", "text-field", "{name_zh}");
      map.setLayoutProperty("road-label-small", "text-field", "{name_zh}");
      map.setLayoutProperty("road-label-medium","text-field", "{name_zh}");
      map.setLayoutProperty("road-label-large", "text-field", "{name_zh}");
      map.setLayoutProperty("road-label-xlarge", "text-field", "{name_zh}");
      //map.setLayoutProperty("road-shields-black", "text-field", "{name_zh}");
      //map.setLayoutProperty("road-shields-white",  "text-field", "{name_zh}");
      map.setLayoutProperty("motorway-junction", "text-field", "{name_zh}");
      map.setLayoutProperty("waterway-label", "text-field", "{name_zh}");
      map.setLayoutProperty("rail-label",    "text-field", "{name_zh}");
      map.setLayoutProperty("water-label", "text-field", "{name_zh}");
      map.setLayoutProperty("water-label-sm", "text-field", "{name_zh}");
      //map.setLayoutProperty("place-residential",  "text-field", "{name_zh}");
      map.setLayoutProperty("airport-label",    "text-field", "{name_zh}");
      //map.setLayoutProperty("place-islet-archipelago-aboriginal",   "text-field", "{name_zh}");
      map.setLayoutProperty("place-neighbourhood",  "text-field", "{name_zh}");
      map.setLayoutProperty("place-suburb", "text-field", "{name_zh}");
      map.setLayoutProperty("place-hamlet",  "text-field", "{name_zh}");
      map.setLayoutProperty("place-village", "text-field", "{name_zh}");
      map.setLayoutProperty("place-town",   "text-field", "{name_zh}");
      //map.setLayoutProperty("place-island", "text-field", "{name_zh}");
      map.setLayoutProperty("place-city-sm",  "text-field", "{name_zh}");
      map.setLayoutProperty("place-city-md-s", "text-field", "{name_zh}");
      map.setLayoutProperty("place-city-md-n",  "text-field", "{name_zh}");
      map.setLayoutProperty("place-city-lg-s",  "text-field", "{name_zh}");
      map.setLayoutProperty("place-city-lg-n",  "text-field", "{name_zh}");
      map.setLayoutProperty("marine-label-sm-ln", "text-field", "{name_zh}");
      map.setLayoutProperty("marine-label-sm-pt", "text-field", "{name_zh}");
      map.setLayoutProperty("marine-label-md-ln","text-field", "{name_zh}");
      map.setLayoutProperty("marine-label-md-pt", "text-field", "{name_zh}");
      map.setLayoutProperty("marine-label-lg-ln", "text-field", "{name_zh}");
      map.setLayoutProperty("marine-label-lg-pt", "text-field", "{name_zh}");
      map.setLayoutProperty("state-label-sm",    "text-field", "{name_zh}");
      map.setLayoutProperty("state-label-md",  "text-field", "{name_zh}");
      map.setLayoutProperty("state-label-lg",  "text-field", "{name_zh}");
      map.setLayoutProperty("country-label-sm", "text-field", "{name_zh}");
      map.setLayoutProperty("country-label-md", "text-field", "{name_zh}");

    })
  }


  tick() {
    // Limiting updating viewport controls through Redux at most 1*sec
    // Deep compare is needed as shallow equality doesn't work here, viewport object
    // changes id at every change
    if (this.state && !isEqual(this.state.previousViewport, this.props.viewport)) {
      const setCV = this.props.setControlValue;
      const vp = this.props.viewport;
      if (setCV) {
        setCV('viewport', vp);
      }
      this.setState(() => ({ previousViewport: this.props.viewport }));
    }
  }
  layers() {
    // Support for layer factory
    if (this.props.layers.some(l => typeof l === 'function')) {
      return this.props.layers.map(l => typeof l === 'function' ? l() : l);
    }
    return this.props.layers;
  }
  render() {
    const { viewport } = this.props;
    return (
      <MapGL
        ref={(reactMap) => { this.reactMap = reactMap;}}
        {...viewport}
        mapStyle={this.props.mapStyle}
        onViewportChange={this.onViewportChange}
        mapboxApiAccessToken={this.props.mapboxApiAccessToken}
      >
        <DeckGL
          {...viewport}
          layers={this.layers()}
          initWebGLParameters
        />
      </MapGL>
    );
  }
}

DeckGLContainer.propTypes = propTypes;
DeckGLContainer.defaultProps = defaultProps;
