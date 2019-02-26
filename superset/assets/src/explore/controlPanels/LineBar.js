import { t } from '@superset-ui/translation';
import { annotations } from './sections';
import { D3_TIME_FORMAT_OPTIONS } from '../controls';

export default {
    label: t('Line Bar Chart'),
    requiresTime: true,
    controlPanelSections: [
      {
        label: t('Chart Options'),
        expanded: true,
        controlSetRows: [
          ['color_scheme'],
          ['x_axis_format'],
        ],
      },
      {
        label: 'Y 轴 1（柱）',
        expanded: true,
        controlSetRows: [
          ['metric'], 
          ['y_axis_format'],
        ],
      },
      {
        label: 'Y 轴 2（线）',
        expanded: true,
        controlSetRows: [
          ['metric_2'],
          ['y_axis_2_format'],
        ],
      },
      {
        label: '查询',
        expanded: true,
        controlSetRows: [
          ['adhoc_filters'],
        ],
      },
    ],
    controlOverrides: {
      metric: {
        label: '指标',
        description: '为左轴选择一个指标',
      },
      y_axis_format: {
        label: '左轴格式',
      },
      metric_2: {
        label: '指标',
        description: '为右轴选择一个指标',
      },
      y_axis_2_format: {
        label: '右轴格式',
      },
      x_axis_format: {
        choices: D3_TIME_FORMAT_OPTIONS,
        default: 'smart_date',
      },
    },
};
