# Copyright The OpenTelemetry Authors
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import unittest

from opentelemetry.exporter.prometheus_remote_write import (
    Config,
    PrometheusRemoteWriteMetricsExporter,
)

from opentelemetry.metrics import get_meter_provider, set_meter_provider
from opentelemetry.sdk import metrics
from opentelemetry.sdk.metrics.export import (
    MetricRecord,
    aggregate,
)
from opentelemetry.sdk.util import get_dict_as_key


class TestPrometheusRemoteWriteMetricExporter(unittest.TestCase):
    # Initializes test data that is reused across tests
    def setUp(self):
        set_meter_provider(metrics.MeterProvider())
        self._test_config = Config({
            "url": "https://testurl.com",
            "name": "test_name",
            "remote_timeout": "30s",
        })
        self._meter = get_meter_provider().get_meter(__name__)
        self._test_metric = self._meter.create_counter(
            "testname", "testdesc", "unit", int,
        )
        self._labels = {"environment": "staging"}
        self._labels_key = get_dict_as_key(self._labels)

    def test_create_time_series(self):
        exporter = PrometheusRemoteWriteMetricsExporter(self._test_config)
        aggregator = aggregate.SumAggregator()
        test_metric = self._meter.create_counter(
            "testname", "testdesc", "unit", int, self._labels.keys(),
        )
        record = MetricRecord(
            test_metric,
            self._labels_key,
            aggregator,
            get_meter_provider().resource,
        )
        extra_labels = {"test": "value"}
        timeseries = exporter.create_time_series(record, extra_labels, 12)
        print(timeseries)
    # # Ensures export is successful with valid metric_records and config
    # def test_export(self):
    #     record = MetricRecord(
    #         self._test_metric,
    #         self._labels_key,
    #         SumAggregator(),
    #         get_meter_provider().resource,
    #     )
    #     exporter = PrometheusRemoteWriteMetricsExporter(self._test_config)
    #     result = exporter.export([record])
    #     self.assertIs(result, MetricsExportResult.SUCCESS)

    # # Ensures sum aggregator is correctly converted to timeseries
    # def test_convert_from_sum(self):
    #     sum_record = MetricRecord(
    #         self._test_metric,
    #         self._labels_key,
    #         SumAggregator(),
    #         get_meter_provider().resource,
    #     )
    #     sum_record.aggregator.update(5)
    #     expected_timeseries = TimeSeries(["testname"], [5])
    #     exporter = PrometheusRemoteWriteMetricsExporter(self._test_config)
    #     timeseries = exporter.convert_from_sum(sum_record)
    #     self.assertEqual(timeseries, expected_timeseries)

    # # Ensures sum min_max_count aggregator is correctly converted to timeseries
    # def test_convert_from_min_max_sum_count(self):
    #     min_max_sum_count_record = MetricRecord(
    #         self._test_metric,
    #         self._labels_key,
    #         MinMaxSumCountAggregator(),
    #         get_meter_provider().resource,
    #     )
    #     min_max_sum_count_record.aggregator.update(5)
    #     expected_timeseries = TimeSeries(
    #         [
    #             "testname_min",
    #             "testname_max",
    #             "testname_sum",
    #             "testname_count"
    #         ], [5, 5, 5, 1]
    #     )
    #     exporter = PrometheusRemoteWriteMetricsExporter(self._test_config)
    #     timeseries = exporter.convert_from_min_max_sum_count(
    #         min_max_sum_count_record)
    #     self.assertEqual(timeseries, expected_timeseries)

    # # Ensures histogram aggregator is correctly converted to timeseries
    # def test_convert_from_histogram(self):
    #     histogram_record = MetricRecord(
    #         self._test_metric,
    #         self._labels_key,
    #         HistogramAggregator(),
    #         get_meter_provider().resource,
    #     )
    #     histogram_record.aggregator.update(5)
    #     expected_timeseries = TimeSeries(
    #         [
    #             "testname_count",
    #             "testname_sum",
    #             "testname_{le=\"0\"}",
    #             "testname_{le=\"+Inf\"}"
    #         ], [1, 5, 0, 1]
    #     )
    #     exporter = PrometheusRemoteWriteMetricsExporter(self._test_config)
    #     timeseries = exporter.convert_from_histogram(histogram_record)
    #     self.assertEqual(timeseries, expected_timeseries)

    # # Ensures last value aggregator is correctly converted to timeseries
    # def test_convert_from_last_value(self):
    #     last_value_record = MetricRecord(
    #         self._test_metric,
    #         self._labels_key,
    #         LastValueAggregator(),
    #         get_meter_provider().resource,
    #     )
    #     last_value_record.aggregator.update(5)
    #     expected_timeseries = TimeSeries(["testname"], [5])
    #     exporter = PrometheusRemoteWriteMetricsExporter(self._test_config)
    #     timeseries = exporter.convert_from_last_value(last_value_record)
    #     self.assertEqual(timeseries, expected_timeseries)

    # # Ensures value observer aggregator is correctly converted to timeseries
    # def test_convert_from_value_observer(self):
    #     value_observer_record = MetricRecord(
    #         self._test_metric,
    #         self._labels_key,
    #         ValueObserverAggregator(),
    #         get_meter_provider().resource,
    #     )
    #     value_observer_record.aggregator.update(5)
    #     expected_timeseries = TimeSeries(
    #         [
    #             "testname_min",
    #             "testname_max",
    #             "testname_sum",
    #             "testname_count",
    #             "testname_last_value",
    #         ], [5, 5, 5, 1, 5]
    #     )
    #     exporter = PrometheusRemoteWriteMetricsExporter(self._test_config)
    #     timeseries = exporter.convert_from_value_observer(
    #         value_observer_record)
    #     self.assertEqual(timeseries, expected_timeseries)

    # # Ensures conversion to timeseries function as expected for different aggregation types
    # def test_convert_to_timeseries(self):
    #     empty_timeseries = TimeSeries([], [])
    #     timeseries_mock_method = mock.Mock(return_value=empty_timeseries)
    #     exporter = PrometheusRemoteWriteMetricsExporter(self._test_config)
    #     exporter.convert_from_sum = timeseries_mock_method
    #     exporter.convert_from_min_max_sum_count = timeseries_mock_method
    #     exporter.convert_from_histogram = timeseries_mock_method
    #     exporter.convert_from_last_value = timeseries_mock_method
    #     exporter.convert_from_value_observer = timeseries_mock_method
    #     test_records = [
    #         MetricRecord(
    #             self._test_metric,
    #             self._labels_key,
    #             SumAggregator(),
    #             get_meter_provider().resource,
    #         ), MetricRecord(
    #             self._test_metric,
    #             self._labels_key,
    #             MinMaxSumCountAggregator(),
    #             get_meter_provider().resource,
    #         ), MetricRecord(
    #             self._test_metric,
    #             self._labels_key,
    #             HistogramAggregator(),
    #             get_meter_provider().resource,
    #         ), MetricRecord(
    #             self._test_metric,
    #             self._labels_key,
    #             LastValueAggregator(),
    #             get_meter_provider().resource,
    #         ), MetricRecord(
    #             self._test_metric,
    #             self._labels_key,
    #             ValueObserverAggregator(),
    #             get_meter_provider().resource,
    #         )
    #     ]
    #     data = exporter.convert_to_timeseries(test_records)
    #     self.assertEqual(len(data), 5)
    #     for timeseries in data:
    #         self.assertEqual(timeseries, empty_timeseries)

    #     no_type_records = [
    #         MetricRecord(
    #             self._test_metric,
    #             self._labels_key,
    #             None,
    #             get_meter_provider().resource,
    #         )
    #     ]
    #     with self.assertRaises(ValueError):
    #         exporter.convert_to_timeseries(no_type_records)
    #     no_label_records = [
    #         MetricRecord(
    #             self._test_metric,
    #             self._labels_key,
    #             None,
    #             get_meter_provider().resource,
    #         )
    #     ]
    #     with self.assertRaises(ValueError):
    #         exporter.convert_to_timeseries(no_label_records)
