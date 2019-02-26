import { t } from '@superset-ui/translation';
import { ChartMetadata, ChartPlugin } from '@superset-ui/chart';
import transformProps from './transformProps';
import thumbnail from './images/thumbnail.png';

const metadata = new ChartMetadata({
  name: t('tsdiff'),
  description: 'timeseries difference',
  credits: ['<a href="http://mcaule.github.io/d3-timeseries/">tsDiff</a>'],
  thumbnail,
});

export default class tsDiffChartPlugin extends ChartPlugin {
  constructor() {
    super({
      metadata,
      transformProps,
      loadChart: () => import('./ReactTsDiff.js'),
    });
  }
}
