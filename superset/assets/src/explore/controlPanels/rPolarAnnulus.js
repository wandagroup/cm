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
      label: t('风向风速'),
      description: t('请选择风向,风速指标'),
      expanded: true,
      controlSetRows: [
        ['metric'],['metric_2'],['metric_3'],
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
      label: t('分析类别'),
      expanded: true,
      controlSetRows: [
        ['statistic_type'],
      ],
    },
  ],
  controlOverrides: {
    statistic_type: {
      label: t('分析类别'),
      description: t('请分析类别'+
        '趋势：总体趋势的分析'+
        '月份：分12个月份分析'+
        '星期：分一周7天分析'+
        '小时：分24小时分析'),
      default: 'trend',
      choices: [
        ['trend', '趋势'],
        ['season','季节'],
        ['weekday','星期'],
        ['hour','小时'],
      ],
    },
    metric: {
      label: t('风向'),
      description: t('请选择风向指标'),
    },
    metric_2: {
      label: t('风速'),
      description: t('请选择风速指标'),
    },
    metric_3: {
      label: t('污染物'),
      description: t('请选择污染物指标'),
    },

  },
};
