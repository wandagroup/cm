/* eslint-disable no-param-reassign */
import d3 from 'd3';
import PropTypes from 'prop-types';
import { CategoricalColorNamespace } from '@superset-ui/color';
//import { getNumberFormatter } from '@superset-ui/number-format';
import './rTimeVariation.css';

const propTypes = {
  data: PropTypes.shape({
    nodes: PropTypes.arrayOf(PropTypes.string),
    matrix: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  }),
  width: PropTypes.number,
  height: PropTypes.number,
  numberFormat: PropTypes.string,
  colorScheme: PropTypes.string,
};

function rTimeVariation(element, props) {
  const {
    data,
    width,
    height,
    numberFormat,
    colorScheme,
  } = props;
  //console.log(data);
  element.innerHTML = data ;
  //element.innerHTML = '' ;

  //const div = d3.select(element)
  /*div = d3.select(element)
    .attr('width', width)
    .attr('height', height)
    .attr('id', 'rplot');
  div.innerHTML = data;*/

  //const { nodes, matrix } = data;
  //const f = getNumberFormatter(numberFormat);
  const colorFn = CategoricalColorNamespace.getScale(colorScheme);

  //alert(width);

}

rTimeVariation.displayName = 'rTimeVariation';
rTimeVariation.propTypes = propTypes;

export default rTimeVariation;
