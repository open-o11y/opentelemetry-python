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


from typing import Dict, Sequence

from http.client import HTTPSConnection

from opentelemetry.sdk.metrics.export import (
    MetricRecord,
    MetricsExporter,
    MetricsExportResult,
)
from opentelemetry.sdk.metrics.export.aggregate import (
    HistogramAggregator,
    LastValueAggregator,
    MinMaxSumCountAggregator,
    SumAggregator,
    ValueObserverAggregator,
)


class TimeSeriesData:
    def __init__(self, labels, samples):
        self.labels = labels
        self.samples = samples

    def __eq__(self, other) -> bool:
        return self.labels == other.labels and self.samples == other.samples


class PrometheusRemoteWriteMetricsExporter(MetricsExporter):
    """
    Prometheus remote write metric exporter for OpenTelemetry.

    Args:
        config: configuration object containing all necessary information to make remote write requests
    """

    def __init__(self, prefix: str = ""):
        pass

    def export(self, metric_records: Sequence[MetricRecord]) -> MetricsExportResult:
        pass

    def shutdown(self) -> None:
        pass

    def convert_to_timeseries(self, metric_records: Sequence[MetricRecord]) -> Sequence[TimeSeriesData]:
        pass

    def convert_from_sum(self, sum_record: MetricRecord) -> TimeSeriesData:
        pass

    def convert_from_min_max_sum_count(self, min_max_sum_count_record: MetricRecord) -> TimeSeriesData:
        pass

    def convert_from_histogram(self, histogram_record: MetricRecord) -> TimeSeriesData:
        pass

    def convert_from_last_value(self, last_value_record: MetricRecord) -> TimeSeriesData:
        pass

    def convert_from_value_observer(self, value_observer_record: MetricRecord) -> TimeSeriesData:
        pass

    def convert_from_summary(self, summary_record: MetricRecord) -> TimeSeriesData:
        pass

    def sanitize_label(self, label: str) -> str:
        pass

    def build_message(self, data: Sequence[TimeSeriesData]) -> str:
        pass

    def get_headers(self) -> Dict:
        pass

    def send_message(self, message: str) -> int:
        pass

    def build_client(self) -> HTTPSConnection:
        pass

    def build_tls_config(self) -> Dict:
        pass


class Config():
    """
    Configuration containing all necessary information to make remote write requests

    Args:
        config_dict: dictionary containing all config properties
    """
    def __init__(self, config_dict):
        pass

    def validate(self):
        pass


def parse_config(filepath: str) -> Config:
    pass
