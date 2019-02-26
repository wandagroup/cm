import createAdaptor from '../../utils/createAdaptor';
import Component from './ReactTsDiff';
import transformProps from './transformProps';

export default createAdaptor(Component, transformProps);
