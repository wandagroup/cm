import { t } from '@superset-ui/translation';
import { ChartMetadata, ChartPlugin } from '@superset-ui/chart';
import transformProps from '../transformProps';
import thumbnail from './images/thumbnail.png';

const metadata = new ChartMetadata({
  name: t('R ScatterPlot Chart'),
  description: '',
  credits: ['http://nvd3.org'],
  thumbnail,
});

export default class rScatterPlotChartPlugin extends ChartPlugin {
  constructor() {
    super({
      metadata,
      transformProps,
      //loadChart: () => import('../ReactNVD3.js'),
      loadChart: () => import('./ReactrScatterPlot.js'),
    });
  }
}
