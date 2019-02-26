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
    /*{
      label: t('均一化处理'),
      description: t('是否对做的分析图进行均一化处理'),
      expanded: true,
      controlSetRows: [
        ['normalized'],
      ],
    },*/
    {
      label: t('分析方法'),
      description: t('采用均值或中值的方式对数据进行分析,展示图表的时间段选择'),
      expanded: true,
      controlSetRows: [
        ['statistic_type'],['timeVariation_type'], ['normalized'],
      ],
    },
  ],
  controlOverrides: {
    metrics: {
      label: t('分析指标'),
      description: t('请选择分析指标'),
    },
   normalized:{
      label: t('均一化处理'),
      description: t('是否对做的分析图进行均一化处理'),
    },
  },
};
