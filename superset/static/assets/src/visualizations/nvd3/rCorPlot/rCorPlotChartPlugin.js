import { t } from '@superset-ui/translation';
import { ChartMetadata, ChartPlugin } from '@superset-ui/chart';
import transformProps from '../transformProps';
import thumbnail from './images/thumbnail.png';

const metadata = new ChartMetadata({
  name: t('R Corplot Chart'),
  description: '',
  credits: ['http://nvd3.org'],
  thumbnail,
});

export default class rCorPlotChartPlugin extends ChartPlugin {
  constructor() {
    super({
      metadata,
      transformProps,
      //loadChart: () => import('../ReactNVD3.js'),
      loadChart: () => import('./ReactrCorPlot.js'),
    });
  }
}
