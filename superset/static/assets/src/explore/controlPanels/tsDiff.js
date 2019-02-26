import { t } from '@superset-ui/translation';
import { nonEmpty } from '../validators';
export default {
    controlPanelSections: [
      {
        label: t('Query'),
        expanded: true,
        controlSetRows: [
          ['groupby'],
          ['columns'],
          ['x'],
          ['y'],
          ['adhoc_filters'],
          ['row_limit'],
        ],
      },
      /*{
        label: t('Chart Options'),
        expanded: true,
        controlSetRows: [
          ['y_axis_format', null],
          ['color_scheme'],
        ],
      },*/
    ],
    controlOverrides: {
      y_axis_format: {
        label: t('Number format'),
        description: t('Choose a number format'),
      },
      x: {
        label: t('主线'),
      },
      y: {
        label: t('相对比曲线'),
      },
      groupby: {
        label: t('排序'),
        multi: false,
        validators: [nonEmpty],
        description: t('请选择排序字段，一般为时间'),
      },
      columns: {
        label: t('分组'),
        multi: false,
        description: t('请选择分组字段，一般与过滤字段相一致，便于分析'),
      },
    },

};
