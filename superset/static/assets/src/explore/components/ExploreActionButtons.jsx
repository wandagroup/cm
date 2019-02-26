import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { t } from '@superset-ui/translation';

import URLShortLinkButton from '../../components/URLShortLinkButton';
import EmbedCodeButton from './EmbedCodeButton';
import DisplayQueryButton from './DisplayQueryButton';
import { exportChart, getExploreLongUrl } from '../exploreUtils';
import Button from '../../components/Button';
import * as d3SaveSvg from './d3-save-svg.min.js';
import saveSvgAsPng from './saveSvgAsPng.js';

const propTypes = {
  actions: PropTypes.object.isRequired,
  canDownload: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  chartStatus: PropTypes.string,
  latestQueryFormData: PropTypes.object,
  queryResponse: PropTypes.object,
};

export default function ExploreActionButtons({
    actions, canDownload, chartStatus, latestQueryFormData, queryResponse }) {
  const exportToCSVClasses = cx('btn btn-default btn-sm', {
    'disabled disabledButton': !canDownload,
  });
  const doExportCSV = exportChart.bind(this, latestQueryFormData, 'csv');
  const doExportChart = exportChart.bind(this, latestQueryFormData, 'json');

  return (
    <div className="btn-group results" role="group">
      {latestQueryFormData &&
        <URLShortLinkButton
          url={getExploreLongUrl(latestQueryFormData)}
          emailSubject="Superset Chart"
          emailContent="Check out this chart: "
        />
      }

      {latestQueryFormData &&
        <EmbedCodeButton latestQueryFormData={latestQueryFormData} />}

      {latestQueryFormData &&
        <a
          onClick={doExportChart}
          className="btn btn-default btn-sm"
          title={t('Export to .json')}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-file-code-o" /> .json
        </a>}
      {latestQueryFormData &&
        <a
          onClick={doExportCSV}
          className={exportToCSVClasses}
          title={t('Export to .csv format')}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-file-text-o" /> .csv
        </a>}
      <DisplayQueryButton
        queryResponse={queryResponse}
        latestQueryFormData={latestQueryFormData}
        chartStatus={chartStatus}
        onOpenInEditor={actions.redirectSQLLab}
      />

        <Button
          onClick={() => {
            d3SaveSvg.save(d3.select('svg').node());
          }}
          tooltip="导出svg图"
        >
          <i className="fa fa-file-code-o" />.svg&nbsp;
        </Button>

        <Button
          onClick={() => {
              saveSvgAsPng.saveSvgAsPng(d3.select('svg').node(), "diagram.png", {scale: 2});
          }}
          tooltip="导出png图片"
        >
          <i className="fa fa-file-picture-o" />.png&nbsp;
        </Button>

    </div>
  );
}

ExploreActionButtons.propTypes = propTypes;
