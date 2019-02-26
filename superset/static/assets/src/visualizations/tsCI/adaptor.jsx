import createAdaptor from '../../utils/createAdaptor';
import Component from './ReactTsCI';
import transformProps from './transformProps';

export default createAdaptor(Component, transformProps);
