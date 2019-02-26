import React from 'react';
import PropTypes from 'prop-types';
import MapGL from 'react-map-gl';
import Immutable from 'immutable';
import ViewportMercator from 'viewport-mercator-project';
import ScatterPlotGlowOverlay from './ScatterPlotGlowOverlay';
import MapboxLanguage from './mapbox-gl-language';
import './MapBox.css';

const NOOP = () => {};
export const DEFAULT_MAX_ZOOM = 16;
export const DEFAULT_POINT_RADIUS = 60;

const propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  aggregatorName: PropTypes.string,
  clusterer: PropTypes.object,
  globalOpacity: PropTypes.number,
  mapStyle: PropTypes.string,
  mapboxApiKey: PropTypes.string,
  onViewportChange: PropTypes.func,
  pointRadius: PropTypes.number,
  pointRadiusUnit: PropTypes.string,
  renderWhileDragging: PropTypes.bool,
  rgb: PropTypes.array,
  bounds: PropTypes.array,
};

const defaultProps = {
  globalOpacity: 1,
  onViewportChange: NOOP,
  pointRadius: DEFAULT_POINT_RADIUS,
  pointRadiusUnit: 'Pixels',
};

class MapBox extends React.Component {
  constructor(props) {
    super(props);

    const { width, height, bounds } = this.props;
    // Get a viewport that fits the given bounds, which all marks to be clustered.
    // Derive lat, lon and zoom from this viewport. This is only done on initial
    // render as the bounds don't update as we pan/zoom in the current design.
    const mercator = new ViewportMercator({
      width,
      height,
    }).fitBounds(bounds);
    const { latitude, longitude, zoom } = mercator;

    this.state = {
      viewport: {
        longitude,
        latitude,
        zoom,
      },
    };
    this.onViewportChange = this.onViewportChange.bind(this);
  }

  /**for language control*/
  componentDidMount(){
    const map = this.reactMap.getMap();
    map.on('load', () => {
    map.addControl(new MapboxLanguage({defaultLanguage:'zh'}));
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
    map.setLayoutProperty("country-label-lg" , "text-field", "{name_zh}");
    })
  }



  onViewportChange(viewport) {
    this.setState({ viewport });
    this.props.onViewportChange(viewport);
  }

  render() {
    const {
      width,
      height,
      aggregatorName,
      globalOpacity,
      mapStyle,
      mapboxApiKey,
      pointRadius,
      pointRadiusUnit,
      renderWhileDragging,
      rgb,
      hasCustomMetric,
      bounds,
    } = this.props;
    const { viewport } = this.state;
    const isDragging = viewport.isDragging === undefined ? false :
                       viewport.isDragging;

    // Compute the clusters based on the original bounds and current zoom level. Note when zoom/pan
    // to an area outside of the original bounds, no additional queries are made to the backend to
    // retrieve additional data.
    const bbox = [bounds[0][0], bounds[0][1], bounds[1][0], bounds[1][1]];
    const clusters = this.props.clusterer.getClusters(bbox, Math.round(viewport.zoom));

    return (
      <MapGL
        ref={(reactMap) => { this.reactMap = reactMap;}}
        {...viewport}
        mapStyle={mapStyle}
        width={width}
        height={height}
        mapboxApiAccessToken={mapboxApiKey}
        onViewportChange={this.onViewportChange}
      >
        <ScatterPlotGlowOverlay
          {...viewport}
          isDragging={isDragging}
          width={width}
          height={height}
          locations={Immutable.fromJS(clusters)}
          dotRadius={pointRadius}
          pointRadiusUnit={pointRadiusUnit}
          rgb={rgb}
          globalOpacity={globalOpacity}
          compositeOperation={'screen'}
          renderWhileDragging={renderWhileDragging}
          aggregation={hasCustomMetric ? aggregatorName : null}
          lngLatAccessor={(location) => {
            const coordinates = location.get('geometry').get('coordinates');
            return [coordinates.get(0), coordinates.get(1)];
          }}
        />
      </MapGL>
    );
  }
}

MapBox.propTypes = propTypes;
MapBox.defaultProps = defaultProps;

export default MapBox;
