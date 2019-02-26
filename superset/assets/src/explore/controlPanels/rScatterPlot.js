import { t } from '@superset-ui/translation';
import { annotations } from './sections';
import { D3_TIME_FORMAT_OPTIONS } from '../controls';

export default {
  requiresTime: true,
  controlPanelSections: [
    {
      label: t('Chart Options'),
      expanded: true,
      controlSetRows: [
        ['color_scheme'],
      ],
    },
    {
      label: t('分析指标'),
      expanded: true,
      controlSetRows: [
        ['metrics'],
      ],
    },
    {
      label: t('Query'),
      expanded: true,
      controlSetRows: [
        ['adhoc_filters'],
      ],
    },
    {
      label: t('R图片尺寸'),
      expanded: true,
      controlSetRows: [
        ['plot_height','plot_width'],
      ],
    },
    {
      label: t('分析方法'),
      description: t('采用均值或中值的方式对数据进行分析,展示图表的时间段选择'),
      expanded: true,
      controlSetRows: [
        ['statistic_type'], ['normalized'],
      ],
    },
  ],
  controlOverrides: {
    metrics: {
      label: t('分析指标'),
      description: t('请选择两种分析指标'),
    },
   statistic_type:{
      label: t('分析方式'),
      description: t('请选择分析方式'),
      default: 'scatter',
      choices: [
        ['scatter', '散点'],
        ['hexbin', '六边形'],
        ['level','级别'],
        ['density','密度'],
      ],
    },
   normalized:{
      label: t('拟合平滑处理'),
      description: t('是否对做的分析图进行拟合平滑处理'),
    },



  },
};
