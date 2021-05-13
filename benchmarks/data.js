window.BENCHMARK_DATA = {
  "lastUpdate": 1620925457920,
  "repoUrl": "https://github.com/open-o11y/opentelemetry-python",
  "entries": {
    "OpenTelemetry Python Benchmarks - Python 3.7 - exporter": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608742018823,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2524.679117069091,
            "unit": "iter/sec",
            "range": "stddev: 0.00010234247233733045",
            "extra": "mean: 396.08994000033704 usec\nrounds: 200"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3253.7894602689285,
            "unit": "iter/sec",
            "range": "stddev: 0.0009719957282643109",
            "extra": "mean: 307.3339600520278 usec\nrounds: 4606"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.6 - core": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608742019504,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23532.347506054255,
            "unit": "iter/sec",
            "range": "stddev: 0.0000063354894324300695",
            "extra": "mean: 42.49469797871743 usec\nrounds: 1682"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17127.242630160814,
            "unit": "iter/sec",
            "range": "stddev: 0.000009104491852200261",
            "extra": "mean: 58.3865144900216 usec\nrounds: 5176"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "42213c41e98b2c058b53ba1b3ff3525e2e86a7ff",
          "message": "[chore] bump 1.3.0.dev0 & 0.22.dev0 versions (#1843)",
          "timestamp": "2021-05-12T11:30:09-07:00",
          "tree_id": "cff4b947ba375ce45b9501e8ece72600c0bcb9cb",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/42213c41e98b2c058b53ba1b3ff3525e2e86a7ff"
        },
        "date": 1620925453954,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 17923.26936222483,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037496397583307423",
            "extra": "mean: 55.79339236554715 usec\nrounds: 1598"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 13182.375666166628,
            "unit": "iter/sec",
            "range": "stddev: 0.000008367440046467108",
            "extra": "mean: 75.85886074894383 usec\nrounds: 4912"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.8 - exporter": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608742023708,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2966.5952019691254,
            "unit": "iter/sec",
            "range": "stddev: 0.000012916701706090884",
            "extra": "mean: 337.0867718441107 usec\nrounds: 206"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4044.4782023040843,
            "unit": "iter/sec",
            "range": "stddev: 0.0009133795815118066",
            "extra": "mean: 247.25068351964748 usec\nrounds: 5637"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.6 - exporter": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608742020724,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2028.4493841958883,
            "unit": "iter/sec",
            "range": "stddev: 0.000013892359024183345",
            "extra": "mean: 492.9874059423064 usec\nrounds: 101"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3028.962322077468,
            "unit": "iter/sec",
            "range": "stddev: 0.0008801644418645495",
            "extra": "mean: 330.1460677510614 usec\nrounds: 4059"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.9 - exporter": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608742030151,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 817.2580231926046,
            "unit": "iter/sec",
            "range": "stddev: 0.0001801572152616797",
            "extra": "mean: 1.2236037721520518 msec\nrounds: 158"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3726.289910027743,
            "unit": "iter/sec",
            "range": "stddev: 0.001144722704531747",
            "extra": "mean: 268.36344571819825 usec\nrounds: 5932"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.7 - core": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608742033521,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 24504.853766611188,
            "unit": "iter/sec",
            "range": "stddev: 0.000003575374746461131",
            "extra": "mean: 40.80824189053268 usec\nrounds: 4316"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 18780.635273903783,
            "unit": "iter/sec",
            "range": "stddev: 0.00000482719239006571",
            "extra": "mean: 53.24633514338719 usec\nrounds: 5893"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "42213c41e98b2c058b53ba1b3ff3525e2e86a7ff",
          "message": "[chore] bump 1.3.0.dev0 & 0.22.dev0 versions (#1843)",
          "timestamp": "2021-05-12T11:30:09-07:00",
          "tree_id": "cff4b947ba375ce45b9501e8ece72600c0bcb9cb",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/42213c41e98b2c058b53ba1b3ff3525e2e86a7ff"
        },
        "date": 1620925456363,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26853.68368157176,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026870207956395484",
            "extra": "mean: 37.2388388817675 usec\nrounds: 4686"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20138.046458851877,
            "unit": "iter/sec",
            "range": "stddev: 0.000003306871954609237",
            "extra": "mean: 49.65724962663596 usec\nrounds: 6698"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.8 - core": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608742044694,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 29037.199055745732,
            "unit": "iter/sec",
            "range": "stddev: 0.000001349634304779813",
            "extra": "mean: 34.43858335234731 usec\nrounds: 4505"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 21388.106831785655,
            "unit": "iter/sec",
            "range": "stddev: 0.000002464510983488034",
            "extra": "mean: 46.7549562878498 usec\nrounds: 7435"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.5 - exporter": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608742013765,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2255.1274436382373,
            "unit": "iter/sec",
            "range": "stddev: 0.00004671159436085534",
            "extra": "mean: 443.43391892153204 usec\nrounds: 111"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3093.150394798515,
            "unit": "iter/sec",
            "range": "stddev: 0.0009268171766037241",
            "extra": "mean: 323.2949816089169 usec\nrounds: 4350"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.9 - core": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608742060218,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 28455.694122670993,
            "unit": "iter/sec",
            "range": "stddev: 0.000002527511349933787",
            "extra": "mean: 35.14235132304462 usec\nrounds: 4762"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20895.922358488275,
            "unit": "iter/sec",
            "range": "stddev: 0.000002766537956323829",
            "extra": "mean: 47.85622681995577 usec\nrounds: 6935"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.5 - core": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608742037489,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 17912.151924532634,
            "unit": "iter/sec",
            "range": "stddev: 0.000019726483003977994",
            "extra": "mean: 55.828021346245485 usec\nrounds: 609"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 13161.64144863143,
            "unit": "iter/sec",
            "range": "stddev: 0.000035816825052702235",
            "extra": "mean: 75.97836515322956 usec\nrounds: 4735"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python pypy3 - core": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608742123384,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 209845.0268968221,
            "unit": "iter/sec",
            "range": "stddev: 0.000017470569788130242",
            "extra": "mean: 4.765421486455746 usec\nrounds: 135117"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 150647.75113382752,
            "unit": "iter/sec",
            "range": "stddev: 0.000015969489835618707",
            "extra": "mean: 6.638001513289454 usec\nrounds: 96145"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.7 - propagator": [
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "42213c41e98b2c058b53ba1b3ff3525e2e86a7ff",
          "message": "[chore] bump 1.3.0.dev0 & 0.22.dev0 versions (#1843)",
          "timestamp": "2021-05-12T11:30:09-07:00",
          "tree_id": "cff4b947ba375ce45b9501e8ece72600c0bcb9cb",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/42213c41e98b2c058b53ba1b3ff3525e2e86a7ff"
        },
        "date": 1620925441602,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 87061.18978153371,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012693906230084784",
            "extra": "mean: 11.486174293153377 usec\nrounds: 14642"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 144626.30786949862,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010691318044419403",
            "extra": "mean: 6.914371352840834 usec\nrounds: 53192"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.8 - propagator": [
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "42213c41e98b2c058b53ba1b3ff3525e2e86a7ff",
          "message": "[chore] bump 1.3.0.dev0 & 0.22.dev0 versions (#1843)",
          "timestamp": "2021-05-12T11:30:09-07:00",
          "tree_id": "cff4b947ba375ce45b9501e8ece72600c0bcb9cb",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/42213c41e98b2c058b53ba1b3ff3525e2e86a7ff"
        },
        "date": 1620925444565,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 92163.0132116198,
            "unit": "iter/sec",
            "range": "stddev: 0.00000634115419293868",
            "extra": "mean: 10.85033968782958 usec\nrounds: 11961"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 168565.64394162467,
            "unit": "iter/sec",
            "range": "stddev: 0.00000637695565355957",
            "extra": "mean: 5.9324069639380745 usec\nrounds: 55860"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.6 - propagator": [
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "42213c41e98b2c058b53ba1b3ff3525e2e86a7ff",
          "message": "[chore] bump 1.3.0.dev0 & 0.22.dev0 versions (#1843)",
          "timestamp": "2021-05-12T11:30:09-07:00",
          "tree_id": "cff4b947ba375ce45b9501e8ece72600c0bcb9cb",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/42213c41e98b2c058b53ba1b3ff3525e2e86a7ff"
        },
        "date": 1620925441999,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 57062.55138721847,
            "unit": "iter/sec",
            "range": "stddev: 0.00001625071938236904",
            "extra": "mean: 17.524628248991885 usec\nrounds: 10811"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 96711.61846413808,
            "unit": "iter/sec",
            "range": "stddev: 0.000008570303404139963",
            "extra": "mean: 10.340019284971566 usec\nrounds: 36765"
          }
        ]
      }
    ]
  }
}