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
      description: t('请选择分析指标'),
      expanded: true,
      controlSetRows: [
        ['metric','normalized'],
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
      label: t('分析类别'),
      expanded: true,
      controlSetRows: [
        ['normalized',],
      ],
    },*/
  ],
  controlOverrides: {
   normalized:{
      label: t('季节影响'),
      description: t('是否去除季节影响'),
    },

  },
};
