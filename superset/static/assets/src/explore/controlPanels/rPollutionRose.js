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
        '默认：将所有数据不进行拆分，做成一张图'+
        '年份：将数据按照年份进行拆分，每年一张图'+
        '季节：将数据按照季节进行拆分，每个季节一张图'+
        '星期：将数据按照周一到周日进行拆分，周一到周日分别形成一张图'),
      default: 'default',
      choices: [
        ['default', '默认'],
        ['year','年份'],
        ['season','季节'],
        ['weekday','星期'],
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
