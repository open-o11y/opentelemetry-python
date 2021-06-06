window.BENCHMARK_DATA = {
  "lastUpdate": 1622939059625,
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
        "date": 1620925510773,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2286.412042682182,
            "unit": "iter/sec",
            "range": "stddev: 0.000074915766573412",
            "extra": "mean: 437.3664857130929 usec\nrounds: 35"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3310.5236757347698,
            "unit": "iter/sec",
            "range": "stddev: 0.0008451633279327541",
            "extra": "mean: 302.06701354523625 usec\nrounds: 3839"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1470a8c1ad8b4f7138ab98f7d366cf0dc155e6b0",
          "message": "Add public symbols checker script (#1816)",
          "timestamp": "2021-05-25T13:15:27-07:00",
          "tree_id": "9ec37e978259a7da52692fe87a4b2ba6fe5064fa",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/1470a8c1ad8b4f7138ab98f7d366cf0dc155e6b0"
        },
        "date": 1621986464146,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2351.7895681182586,
            "unit": "iter/sec",
            "range": "stddev: 0.000026632292233380922",
            "extra": "mean: 425.20811111520135 usec\nrounds: 36"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3072.4111143121886,
            "unit": "iter/sec",
            "range": "stddev: 0.000941476554166151",
            "extra": "mean: 325.47727592238806 usec\nrounds: 4552"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8ebda956160b658a2569a109248cbcdb54c995e",
          "message": "Fix error in license files (#1881)\n\nFixes #1880",
          "timestamp": "2021-05-28T09:17:54-07:00",
          "tree_id": "0578e40918bfdba5b3aa7b43f101e9e53c8eda0e",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/c8ebda956160b658a2569a109248cbcdb54c995e"
        },
        "date": 1622444989162,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2632.129374906265,
            "unit": "iter/sec",
            "range": "stddev: 0.00001077099780899827",
            "extra": "mean: 379.9205348846546 usec\nrounds: 43"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3355.218172448374,
            "unit": "iter/sec",
            "range": "stddev: 0.0009932176331550527",
            "extra": "mean: 298.04321167892306 usec\nrounds: 4384"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ea4cdfe42435dda7c39a264612e89dae09eac620",
          "message": "[chore] update main after 1.3.0 release (#1886)",
          "timestamp": "2021-06-02T09:16:22-07:00",
          "tree_id": "3293645575148c7d8ac6924017255c1f605f0dff",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/ea4cdfe42435dda7c39a264612e89dae09eac620"
        },
        "date": 1622652162505,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2598.7773106980267,
            "unit": "iter/sec",
            "range": "stddev: 0.00004303258340052658",
            "extra": "mean: 384.7963409113349 usec\nrounds: 44"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3460.9462782101764,
            "unit": "iter/sec",
            "range": "stddev: 0.0008517306290731315",
            "extra": "mean: 288.9383190649086 usec\nrounds: 4836"
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
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1470a8c1ad8b4f7138ab98f7d366cf0dc155e6b0",
          "message": "Add public symbols checker script (#1816)",
          "timestamp": "2021-05-25T13:15:27-07:00",
          "tree_id": "9ec37e978259a7da52692fe87a4b2ba6fe5064fa",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/1470a8c1ad8b4f7138ab98f7d366cf0dc155e6b0"
        },
        "date": 1621986430269,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 16026.048366305637,
            "unit": "iter/sec",
            "range": "stddev: 0.000024920473024331288",
            "extra": "mean: 62.398413953527985 usec\nrounds: 1720"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 11723.698063867228,
            "unit": "iter/sec",
            "range": "stddev: 0.000020355954374713953",
            "extra": "mean: 85.29731783881645 usec\nrounds: 4905"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8ebda956160b658a2569a109248cbcdb54c995e",
          "message": "Fix error in license files (#1881)\n\nFixes #1880",
          "timestamp": "2021-05-28T09:17:54-07:00",
          "tree_id": "0578e40918bfdba5b3aa7b43f101e9e53c8eda0e",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/c8ebda956160b658a2569a109248cbcdb54c995e"
        },
        "date": 1622444889779,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 13811.48089552018,
            "unit": "iter/sec",
            "range": "stddev: 0.00003010635793390375",
            "extra": "mean: 72.40353207340385 usec\nrounds: 1746"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 9584.44185150545,
            "unit": "iter/sec",
            "range": "stddev: 0.00005992903697773295",
            "extra": "mean: 104.33575741741579 usec\nrounds: 5932"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ea4cdfe42435dda7c39a264612e89dae09eac620",
          "message": "[chore] update main after 1.3.0 release (#1886)",
          "timestamp": "2021-06-02T09:16:22-07:00",
          "tree_id": "3293645575148c7d8ac6924017255c1f605f0dff",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/ea4cdfe42435dda7c39a264612e89dae09eac620"
        },
        "date": 1622652115746,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 18932.08105859221,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014114478099656826",
            "extra": "mean: 52.82039501654024 usec\nrounds: 1886"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 13519.148148527212,
            "unit": "iter/sec",
            "range": "stddev: 0.000001664686499919825",
            "extra": "mean: 73.96915759880484 usec\nrounds: 4981"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7f7151572045281ba186ac3ccf8de3e0dd0d36bd",
          "message": "Add support for OTEL_EXPORTER_JAEGER_TIMEOUT (#1863)",
          "timestamp": "2021-06-04T11:06:57-07:00",
          "tree_id": "8a83e4d59043559f327a25258419eb1d65931bd3",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/7f7151572045281ba186ac3ccf8de3e0dd0d36bd"
        },
        "date": 1622939055350,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 12412.557291125737,
            "unit": "iter/sec",
            "range": "stddev: 0.000016699767394045506",
            "extra": "mean: 80.56357578425377 usec\nrounds: 1115"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 8758.126132881798,
            "unit": "iter/sec",
            "range": "stddev: 0.00004017286515109856",
            "extra": "mean: 114.1796755182101 usec\nrounds: 4971"
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
        "date": 1620925548199,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2114.870457838274,
            "unit": "iter/sec",
            "range": "stddev: 0.00006554240698019351",
            "extra": "mean: 472.8422000003515 usec\nrounds: 35"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3235.6428746335105,
            "unit": "iter/sec",
            "range": "stddev: 0.0009330536898137373",
            "extra": "mean: 309.05759341975164 usec\nrounds: 2553"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1470a8c1ad8b4f7138ab98f7d366cf0dc155e6b0",
          "message": "Add public symbols checker script (#1816)",
          "timestamp": "2021-05-25T13:15:27-07:00",
          "tree_id": "9ec37e978259a7da52692fe87a4b2ba6fe5064fa",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/1470a8c1ad8b4f7138ab98f7d366cf0dc155e6b0"
        },
        "date": 1621986438589,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2990.8614546502927,
            "unit": "iter/sec",
            "range": "stddev: 0.00001011176663977792",
            "extra": "mean: 334.3518297864203 usec\nrounds: 47"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4275.8387618036495,
            "unit": "iter/sec",
            "range": "stddev: 0.0008167252353769285",
            "extra": "mean: 233.87224254877574 usec\nrounds: 5368"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8ebda956160b658a2569a109248cbcdb54c995e",
          "message": "Fix error in license files (#1881)\n\nFixes #1880",
          "timestamp": "2021-05-28T09:17:54-07:00",
          "tree_id": "0578e40918bfdba5b3aa7b43f101e9e53c8eda0e",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/c8ebda956160b658a2569a109248cbcdb54c995e"
        },
        "date": 1622445091674,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2236.9083760025383,
            "unit": "iter/sec",
            "range": "stddev: 0.00007114596299945482",
            "extra": "mean: 447.0455789463526 usec\nrounds: 38"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3411.85743663039,
            "unit": "iter/sec",
            "range": "stddev: 0.000918978913892219",
            "extra": "mean: 293.0954820279998 usec\nrounds: 5286"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ea4cdfe42435dda7c39a264612e89dae09eac620",
          "message": "[chore] update main after 1.3.0 release (#1886)",
          "timestamp": "2021-06-02T09:16:22-07:00",
          "tree_id": "3293645575148c7d8ac6924017255c1f605f0dff",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/ea4cdfe42435dda7c39a264612e89dae09eac620"
        },
        "date": 1622652213538,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2081.9453697386175,
            "unit": "iter/sec",
            "range": "stddev: 0.00003399333178970963",
            "extra": "mean: 480.32000000343294 usec\nrounds: 35"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3213.1402290190226,
            "unit": "iter/sec",
            "range": "stddev: 0.000948377481261752",
            "extra": "mean: 311.2220222972658 usec\nrounds: 5023"
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
        "date": 1620925508099,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2199.555916775551,
            "unit": "iter/sec",
            "range": "stddev: 0.000019122642230613187",
            "extra": "mean: 454.63722580235856 usec\nrounds: 31"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3039.8784053961576,
            "unit": "iter/sec",
            "range": "stddev: 0.000940750398537831",
            "extra": "mean: 328.96052625818095 usec\nrounds: 3637"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1470a8c1ad8b4f7138ab98f7d366cf0dc155e6b0",
          "message": "Add public symbols checker script (#1816)",
          "timestamp": "2021-05-25T13:15:27-07:00",
          "tree_id": "9ec37e978259a7da52692fe87a4b2ba6fe5064fa",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/1470a8c1ad8b4f7138ab98f7d366cf0dc155e6b0"
        },
        "date": 1621986465869,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2247.3353242761173,
            "unit": "iter/sec",
            "range": "stddev: 0.00003670434539295248",
            "extra": "mean: 444.9714242453369 usec\nrounds: 33"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3291.5058256776147,
            "unit": "iter/sec",
            "range": "stddev: 0.0009157614877385626",
            "extra": "mean: 303.8123135614175 usec\nrounds: 3945"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8ebda956160b658a2569a109248cbcdb54c995e",
          "message": "Fix error in license files (#1881)\n\nFixes #1880",
          "timestamp": "2021-05-28T09:17:54-07:00",
          "tree_id": "0578e40918bfdba5b3aa7b43f101e9e53c8eda0e",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/c8ebda956160b658a2569a109248cbcdb54c995e"
        },
        "date": 1622444947515,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2457.474428966579,
            "unit": "iter/sec",
            "range": "stddev: 0.000014776076233164015",
            "extra": "mean: 406.9218333313529 usec\nrounds: 36"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3327.5330820701975,
            "unit": "iter/sec",
            "range": "stddev: 0.0008681788439880052",
            "extra": "mean: 300.52293255574733 usec\nrounds: 4285"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ea4cdfe42435dda7c39a264612e89dae09eac620",
          "message": "[chore] update main after 1.3.0 release (#1886)",
          "timestamp": "2021-06-02T09:16:22-07:00",
          "tree_id": "3293645575148c7d8ac6924017255c1f605f0dff",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/ea4cdfe42435dda7c39a264612e89dae09eac620"
        },
        "date": 1622652160224,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2517.027330318662,
            "unit": "iter/sec",
            "range": "stddev: 0.000013103513253832257",
            "extra": "mean: 397.29405714215966 usec\nrounds: 35"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3431.868782124185,
            "unit": "iter/sec",
            "range": "stddev: 0.0008473923240586944",
            "extra": "mean: 291.38643214122 usec\nrounds: 4362"
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
        "date": 1620925531565,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3093.2770984294484,
            "unit": "iter/sec",
            "range": "stddev: 0.0000114146287667865",
            "extra": "mean: 323.28173913282154 usec\nrounds: 46"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4277.478950637567,
            "unit": "iter/sec",
            "range": "stddev: 0.0008631072448237836",
            "extra": "mean: 233.78256480980414 usec\nrounds: 5547"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1470a8c1ad8b4f7138ab98f7d366cf0dc155e6b0",
          "message": "Add public symbols checker script (#1816)",
          "timestamp": "2021-05-25T13:15:27-07:00",
          "tree_id": "9ec37e978259a7da52692fe87a4b2ba6fe5064fa",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/1470a8c1ad8b4f7138ab98f7d366cf0dc155e6b0"
        },
        "date": 1621986496036,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2457.481010156539,
            "unit": "iter/sec",
            "range": "stddev: 0.000015148623940608596",
            "extra": "mean: 406.9207435854412 usec\nrounds: 39"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3453.5895218694322,
            "unit": "iter/sec",
            "range": "stddev: 0.000961626131415665",
            "extra": "mean: 289.55380877421084 usec\nrounds: 4513"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8ebda956160b658a2569a109248cbcdb54c995e",
          "message": "Fix error in license files (#1881)\n\nFixes #1880",
          "timestamp": "2021-05-28T09:17:54-07:00",
          "tree_id": "0578e40918bfdba5b3aa7b43f101e9e53c8eda0e",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/c8ebda956160b658a2569a109248cbcdb54c995e"
        },
        "date": 1622445148844,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2576.653072195268,
            "unit": "iter/sec",
            "range": "stddev: 0.000021093884980535756",
            "extra": "mean: 388.1003658548474 usec\nrounds: 41"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3630.592039281489,
            "unit": "iter/sec",
            "range": "stddev: 0.0009933234523662488",
            "extra": "mean: 275.43717090227096 usec\nrounds: 4722"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ea4cdfe42435dda7c39a264612e89dae09eac620",
          "message": "[chore] update main after 1.3.0 release (#1886)",
          "timestamp": "2021-06-02T09:16:22-07:00",
          "tree_id": "3293645575148c7d8ac6924017255c1f605f0dff",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/ea4cdfe42435dda7c39a264612e89dae09eac620"
        },
        "date": 1622652200066,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3404.832859077247,
            "unit": "iter/sec",
            "range": "stddev: 0.0000094791350122645",
            "extra": "mean: 293.700173074285 usec\nrounds: 52"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4597.922835721587,
            "unit": "iter/sec",
            "range": "stddev: 0.0008517105006428556",
            "extra": "mean: 217.48951335827763 usec\nrounds: 5914"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7f7151572045281ba186ac3ccf8de3e0dd0d36bd",
          "message": "Add support for OTEL_EXPORTER_JAEGER_TIMEOUT (#1863)",
          "timestamp": "2021-06-04T11:06:57-07:00",
          "tree_id": "8a83e4d59043559f327a25258419eb1d65931bd3",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/7f7151572045281ba186ac3ccf8de3e0dd0d36bd"
        },
        "date": 1622939058050,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2793.210094882458,
            "unit": "iter/sec",
            "range": "stddev: 0.00003439995796881295",
            "extra": "mean: 358.01102173880025 usec\nrounds: 46"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4116.262319852175,
            "unit": "iter/sec",
            "range": "stddev: 0.0008792738081049175",
            "extra": "mean: 242.93884167127436 usec\nrounds: 5337"
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
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1470a8c1ad8b4f7138ab98f7d366cf0dc155e6b0",
          "message": "Add public symbols checker script (#1816)",
          "timestamp": "2021-05-25T13:15:27-07:00",
          "tree_id": "9ec37e978259a7da52692fe87a4b2ba6fe5064fa",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/1470a8c1ad8b4f7138ab98f7d366cf0dc155e6b0"
        },
        "date": 1621986421399,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 13672.245863211834,
            "unit": "iter/sec",
            "range": "stddev: 0.00011985973706726579",
            "extra": "mean: 73.14087312390414 usec\nrounds: 2798"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 11003.748714970026,
            "unit": "iter/sec",
            "range": "stddev: 0.00003187179401710643",
            "extra": "mean: 90.8781203481639 usec\nrounds: 7013"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8ebda956160b658a2569a109248cbcdb54c995e",
          "message": "Fix error in license files (#1881)\n\nFixes #1880",
          "timestamp": "2021-05-28T09:17:54-07:00",
          "tree_id": "0578e40918bfdba5b3aa7b43f101e9e53c8eda0e",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/c8ebda956160b658a2569a109248cbcdb54c995e"
        },
        "date": 1622444970037,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 15270.155117917053,
            "unit": "iter/sec",
            "range": "stddev: 0.00004505429136783568",
            "extra": "mean: 65.48721949960168 usec\nrounds: 4000"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 11433.092506697554,
            "unit": "iter/sec",
            "range": "stddev: 0.000055833177509392594",
            "extra": "mean: 87.4653991834839 usec\nrounds: 7593"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ea4cdfe42435dda7c39a264612e89dae09eac620",
          "message": "[chore] update main after 1.3.0 release (#1886)",
          "timestamp": "2021-06-02T09:16:22-07:00",
          "tree_id": "3293645575148c7d8ac6924017255c1f605f0dff",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/ea4cdfe42435dda7c39a264612e89dae09eac620"
        },
        "date": 1622652141051,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 16186.420456128284,
            "unit": "iter/sec",
            "range": "stddev: 0.000023111840313040162",
            "extra": "mean: 61.780181894471525 usec\nrounds: 3590"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 11893.824712317342,
            "unit": "iter/sec",
            "range": "stddev: 0.000023590657542300793",
            "extra": "mean: 84.0772437956305 usec\nrounds: 6850"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7f7151572045281ba186ac3ccf8de3e0dd0d36bd",
          "message": "Add support for OTEL_EXPORTER_JAEGER_TIMEOUT (#1863)",
          "timestamp": "2021-06-04T11:06:57-07:00",
          "tree_id": "8a83e4d59043559f327a25258419eb1d65931bd3",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/7f7151572045281ba186ac3ccf8de3e0dd0d36bd"
        },
        "date": 1622939047350,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 16210.843845250674,
            "unit": "iter/sec",
            "range": "stddev: 0.00009352084303670053",
            "extra": "mean: 61.68710337019082 usec\nrounds: 4421"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 11954.315139432105,
            "unit": "iter/sec",
            "range": "stddev: 0.00005113471090293823",
            "extra": "mean: 83.65180174156806 usec\nrounds: 6431"
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
        "date": 1620925492933,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20988.865203726662,
            "unit": "iter/sec",
            "range": "stddev: 0.000015440068990219036",
            "extra": "mean: 47.644309985012704 usec\nrounds: 4026"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14879.380619269938,
            "unit": "iter/sec",
            "range": "stddev: 0.00002871263482463083",
            "extra": "mean: 67.20709857404437 usec\nrounds: 8065"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1470a8c1ad8b4f7138ab98f7d366cf0dc155e6b0",
          "message": "Add public symbols checker script (#1816)",
          "timestamp": "2021-05-25T13:15:27-07:00",
          "tree_id": "9ec37e978259a7da52692fe87a4b2ba6fe5064fa",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/1470a8c1ad8b4f7138ab98f7d366cf0dc155e6b0"
        },
        "date": 1621986408654,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22668.36816720725,
            "unit": "iter/sec",
            "range": "stddev: 0.0000040258093443065155",
            "extra": "mean: 44.114335563273166 usec\nrounds: 4634"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17315.229408529336,
            "unit": "iter/sec",
            "range": "stddev: 0.000005230115981707045",
            "extra": "mean: 57.75262784028772 usec\nrounds: 6293"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8ebda956160b658a2569a109248cbcdb54c995e",
          "message": "Fix error in license files (#1881)\n\nFixes #1880",
          "timestamp": "2021-05-28T09:17:54-07:00",
          "tree_id": "0578e40918bfdba5b3aa7b43f101e9e53c8eda0e",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/c8ebda956160b658a2569a109248cbcdb54c995e"
        },
        "date": 1622445057814,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22926.670976740494,
            "unit": "iter/sec",
            "range": "stddev: 0.000008378463483071599",
            "extra": "mean: 43.61732241957488 usec\nrounds: 4398"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17890.35594392229,
            "unit": "iter/sec",
            "range": "stddev: 0.000012948602692578104",
            "extra": "mean: 55.89603712382927 usec\nrounds: 7246"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ea4cdfe42435dda7c39a264612e89dae09eac620",
          "message": "[chore] update main after 1.3.0 release (#1886)",
          "timestamp": "2021-06-02T09:16:22-07:00",
          "tree_id": "3293645575148c7d8ac6924017255c1f605f0dff",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/ea4cdfe42435dda7c39a264612e89dae09eac620"
        },
        "date": 1622652173364,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26271.528509860647,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010181118090698393",
            "extra": "mean: 38.06402050891953 usec\nrounds: 5266"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 19556.98181895563,
            "unit": "iter/sec",
            "range": "stddev: 0.000001465221722380879",
            "extra": "mean: 51.13263433270407 usec\nrounds: 7474"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7f7151572045281ba186ac3ccf8de3e0dd0d36bd",
          "message": "Add support for OTEL_EXPORTER_JAEGER_TIMEOUT (#1863)",
          "timestamp": "2021-06-04T11:06:57-07:00",
          "tree_id": "8a83e4d59043559f327a25258419eb1d65931bd3",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/7f7151572045281ba186ac3ccf8de3e0dd0d36bd"
        },
        "date": 1622939050300,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23917.5581527249,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015364403841006305",
            "extra": "mean: 41.81028822484837 usec\nrounds: 4552"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17464.655267781625,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022102178626661374",
            "extra": "mean: 57.25850208133085 usec\nrounds: 6246"
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
        "date": 1620925484854,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 28356.603234481685,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010500372557513704",
            "extra": "mean: 35.26515470597685 usec\nrounds: 4919"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20791.055856065534,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012262646259141695",
            "extra": "mean: 48.097605380068394 usec\nrounds: 2714"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1470a8c1ad8b4f7138ab98f7d366cf0dc155e6b0",
          "message": "Add public symbols checker script (#1816)",
          "timestamp": "2021-05-25T13:15:27-07:00",
          "tree_id": "9ec37e978259a7da52692fe87a4b2ba6fe5064fa",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/1470a8c1ad8b4f7138ab98f7d366cf0dc155e6b0"
        },
        "date": 1621986427884,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 28937.41294965221,
            "unit": "iter/sec",
            "range": "stddev: 0.000005800488534871645",
            "extra": "mean: 34.55733937722373 usec\nrounds: 5074"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 22301.307683781804,
            "unit": "iter/sec",
            "range": "stddev: 0.000006551818943133646",
            "extra": "mean: 44.84041986144295 usec\nrounds: 8217"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8ebda956160b658a2569a109248cbcdb54c995e",
          "message": "Fix error in license files (#1881)\n\nFixes #1880",
          "timestamp": "2021-05-28T09:17:54-07:00",
          "tree_id": "0578e40918bfdba5b3aa7b43f101e9e53c8eda0e",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/c8ebda956160b658a2569a109248cbcdb54c995e"
        },
        "date": 1622445112373,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 24057.8299921143,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031254897716741944",
            "extra": "mean: 41.56650871370282 usec\nrounds: 4820"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 18380.29784631646,
            "unit": "iter/sec",
            "range": "stddev: 0.000001417451789847561",
            "extra": "mean: 54.40608244552505 usec\nrounds: 6477"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ea4cdfe42435dda7c39a264612e89dae09eac620",
          "message": "[chore] update main after 1.3.0 release (#1886)",
          "timestamp": "2021-06-02T09:16:22-07:00",
          "tree_id": "3293645575148c7d8ac6924017255c1f605f0dff",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/ea4cdfe42435dda7c39a264612e89dae09eac620"
        },
        "date": 1622652178853,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26131.957484372288,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013312453641005912",
            "extra": "mean: 38.26732079286562 usec\nrounds: 4944"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 19295.95693167292,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032072365263800824",
            "extra": "mean: 51.82432794294706 usec\nrounds: 6864"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7f7151572045281ba186ac3ccf8de3e0dd0d36bd",
          "message": "Add support for OTEL_EXPORTER_JAEGER_TIMEOUT (#1863)",
          "timestamp": "2021-06-04T11:06:57-07:00",
          "tree_id": "8a83e4d59043559f327a25258419eb1d65931bd3",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/7f7151572045281ba186ac3ccf8de3e0dd0d36bd"
        },
        "date": 1622939037154,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 29706.136165623553,
            "unit": "iter/sec",
            "range": "stddev: 0.000001048882828547909",
            "extra": "mean: 33.66307871291646 usec\nrounds: 5501"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 21814.61531261617,
            "unit": "iter/sec",
            "range": "stddev: 0.000002913210658092045",
            "extra": "mean: 45.840826696662596 usec\nrounds: 7559"
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
        "date": 1620925632323,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 198509.3967970659,
            "unit": "iter/sec",
            "range": "stddev: 0.000014268682992397162",
            "extra": "mean: 5.037544902835454 usec\nrounds: 151516"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 186940.09967588406,
            "unit": "iter/sec",
            "range": "stddev: 0.000004874414231456373",
            "extra": "mean: 5.34930708678232 usec\nrounds: 103093"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1470a8c1ad8b4f7138ab98f7d366cf0dc155e6b0",
          "message": "Add public symbols checker script (#1816)",
          "timestamp": "2021-05-25T13:15:27-07:00",
          "tree_id": "9ec37e978259a7da52692fe87a4b2ba6fe5064fa",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/1470a8c1ad8b4f7138ab98f7d366cf0dc155e6b0"
        },
        "date": 1621986567869,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 200182.90681012388,
            "unit": "iter/sec",
            "range": "stddev: 0.00000840395494635947",
            "extra": "mean: 4.995431507788591 usec\nrounds: 144907"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 140860.96438370566,
            "unit": "iter/sec",
            "range": "stddev: 0.000005483832357027582",
            "extra": "mean: 7.0991988758219575 usec\nrounds: 102031"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8ebda956160b658a2569a109248cbcdb54c995e",
          "message": "Fix error in license files (#1881)\n\nFixes #1880",
          "timestamp": "2021-05-28T09:17:54-07:00",
          "tree_id": "0578e40918bfdba5b3aa7b43f101e9e53c8eda0e",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/c8ebda956160b658a2569a109248cbcdb54c995e"
        },
        "date": 1622445243169,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 159658.95218191284,
            "unit": "iter/sec",
            "range": "stddev: 0.00005489381713881104",
            "extra": "mean: 6.263350637931133 usec\nrounds: 121952"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 126586.39462250886,
            "unit": "iter/sec",
            "range": "stddev: 0.00004729074828986094",
            "extra": "mean: 7.899743119962323 usec\nrounds: 100000"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ea4cdfe42435dda7c39a264612e89dae09eac620",
          "message": "[chore] update main after 1.3.0 release (#1886)",
          "timestamp": "2021-06-02T09:16:22-07:00",
          "tree_id": "3293645575148c7d8ac6924017255c1f605f0dff",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/ea4cdfe42435dda7c39a264612e89dae09eac620"
        },
        "date": 1622652301894,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 177002.68174437972,
            "unit": "iter/sec",
            "range": "stddev: 0.000052578070666277765",
            "extra": "mean: 5.649631915996395 usec\nrounds: 125000"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 122681.60104880547,
            "unit": "iter/sec",
            "range": "stddev: 0.00006939469648658692",
            "extra": "mean: 8.15118152559957 usec\nrounds: 185186"
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
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1470a8c1ad8b4f7138ab98f7d366cf0dc155e6b0",
          "message": "Add public symbols checker script (#1816)",
          "timestamp": "2021-05-25T13:15:27-07:00",
          "tree_id": "9ec37e978259a7da52692fe87a4b2ba6fe5064fa",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/1470a8c1ad8b4f7138ab98f7d366cf0dc155e6b0"
        },
        "date": 1621986372981,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 75894.6076875408,
            "unit": "iter/sec",
            "range": "stddev: 0.000020379511018344925",
            "extra": "mean: 13.176166666767877 usec\nrounds: 12210"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 129373.02519724434,
            "unit": "iter/sec",
            "range": "stddev: 0.000016840899286231244",
            "extra": "mean: 7.7295865848029965 usec\nrounds: 48542"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8ebda956160b658a2569a109248cbcdb54c995e",
          "message": "Fix error in license files (#1881)\n\nFixes #1880",
          "timestamp": "2021-05-28T09:17:54-07:00",
          "tree_id": "0578e40918bfdba5b3aa7b43f101e9e53c8eda0e",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/c8ebda956160b658a2569a109248cbcdb54c995e"
        },
        "date": 1622444985812,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 94214.32531109445,
            "unit": "iter/sec",
            "range": "stddev: 0.000005282518372074101",
            "extra": "mean: 10.614097131174196 usec\nrounds: 13281"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 142233.101088777,
            "unit": "iter/sec",
            "range": "stddev: 0.000005994051696163735",
            "extra": "mean: 7.030712206547719 usec\nrounds: 7078"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ea4cdfe42435dda7c39a264612e89dae09eac620",
          "message": "[chore] update main after 1.3.0 release (#1886)",
          "timestamp": "2021-06-02T09:16:22-07:00",
          "tree_id": "3293645575148c7d8ac6924017255c1f605f0dff",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/ea4cdfe42435dda7c39a264612e89dae09eac620"
        },
        "date": 1622652134873,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 96316.99422820157,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016032535632988455",
            "extra": "mean: 10.382383794397942 usec\nrounds: 13773"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 157003.2228605882,
            "unit": "iter/sec",
            "range": "stddev: 0.000001188354050293271",
            "extra": "mean: 6.3692960041205975 usec\nrounds: 52354"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7f7151572045281ba186ac3ccf8de3e0dd0d36bd",
          "message": "Add support for OTEL_EXPORTER_JAEGER_TIMEOUT (#1863)",
          "timestamp": "2021-06-04T11:06:57-07:00",
          "tree_id": "8a83e4d59043559f327a25258419eb1d65931bd3",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/7f7151572045281ba186ac3ccf8de3e0dd0d36bd"
        },
        "date": 1622939010184,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 81046.86888618341,
            "unit": "iter/sec",
            "range": "stddev: 0.000005678459072766555",
            "extra": "mean: 12.3385395850928 usec\nrounds: 11709"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 131896.67455298494,
            "unit": "iter/sec",
            "range": "stddev: 0.00003059513052944731",
            "extra": "mean: 7.581692285943755 usec\nrounds: 53189"
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
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1470a8c1ad8b4f7138ab98f7d366cf0dc155e6b0",
          "message": "Add public symbols checker script (#1816)",
          "timestamp": "2021-05-25T13:15:27-07:00",
          "tree_id": "9ec37e978259a7da52692fe87a4b2ba6fe5064fa",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/1470a8c1ad8b4f7138ab98f7d366cf0dc155e6b0"
        },
        "date": 1621986392830,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 96581.24603620106,
            "unit": "iter/sec",
            "range": "stddev: 0.000003153044975121315",
            "extra": "mean: 10.353976999066411 usec\nrounds: 13869"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 175308.08783377934,
            "unit": "iter/sec",
            "range": "stddev: 8.272348688924161e-7",
            "extra": "mean: 5.7042433829303025 usec\nrounds: 57465"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8ebda956160b658a2569a109248cbcdb54c995e",
          "message": "Fix error in license files (#1881)\n\nFixes #1880",
          "timestamp": "2021-05-28T09:17:54-07:00",
          "tree_id": "0578e40918bfdba5b3aa7b43f101e9e53c8eda0e",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/c8ebda956160b658a2569a109248cbcdb54c995e"
        },
        "date": 1622445042829,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 103139.21517398383,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015473995965449291",
            "extra": "mean: 9.695633211025667 usec\nrounds: 13869"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 179258.72829292776,
            "unit": "iter/sec",
            "range": "stddev: 0.000001359540381414757",
            "extra": "mean: 5.578528920309498 usec\nrounds: 57797"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ea4cdfe42435dda7c39a264612e89dae09eac620",
          "message": "[chore] update main after 1.3.0 release (#1886)",
          "timestamp": "2021-06-02T09:16:22-07:00",
          "tree_id": "3293645575148c7d8ac6924017255c1f605f0dff",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/ea4cdfe42435dda7c39a264612e89dae09eac620"
        },
        "date": 1622652149022,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 97734.91416382883,
            "unit": "iter/sec",
            "range": "stddev: 4.885340289384957e-7",
            "extra": "mean: 10.231758103595846 usec\nrounds: 13605"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 153641.67574479515,
            "unit": "iter/sec",
            "range": "stddev: 0.000012305034967361978",
            "extra": "mean: 6.508650697490694 usec\nrounds: 58133"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7f7151572045281ba186ac3ccf8de3e0dd0d36bd",
          "message": "Add support for OTEL_EXPORTER_JAEGER_TIMEOUT (#1863)",
          "timestamp": "2021-06-04T11:06:57-07:00",
          "tree_id": "8a83e4d59043559f327a25258419eb1d65931bd3",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/7f7151572045281ba186ac3ccf8de3e0dd0d36bd"
        },
        "date": 1622939013415,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 99774.45293197437,
            "unit": "iter/sec",
            "range": "stddev: 0.000005973140921830984",
            "extra": "mean: 10.022605693280966 usec\nrounds: 12787"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 170968.1557701765,
            "unit": "iter/sec",
            "range": "stddev: 0.000004554012857692468",
            "extra": "mean: 5.849042445917516 usec\nrounds: 55553"
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
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1470a8c1ad8b4f7138ab98f7d366cf0dc155e6b0",
          "message": "Add public symbols checker script (#1816)",
          "timestamp": "2021-05-25T13:15:27-07:00",
          "tree_id": "9ec37e978259a7da52692fe87a4b2ba6fe5064fa",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/1470a8c1ad8b4f7138ab98f7d366cf0dc155e6b0"
        },
        "date": 1621986368524,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 74183.72704897406,
            "unit": "iter/sec",
            "range": "stddev: 0.00000159463047631842",
            "extra": "mean: 13.480045284592233 usec\nrounds: 12300"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 119004.64046451193,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010451520733494647",
            "extra": "mean: 8.403033664037727 usec\nrounds: 48776"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8ebda956160b658a2569a109248cbcdb54c995e",
          "message": "Fix error in license files (#1881)\n\nFixes #1880",
          "timestamp": "2021-05-28T09:17:54-07:00",
          "tree_id": "0578e40918bfdba5b3aa7b43f101e9e53c8eda0e",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/c8ebda956160b658a2569a109248cbcdb54c995e"
        },
        "date": 1622444936574,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 75933.01795658414,
            "unit": "iter/sec",
            "range": "stddev: 9.97645408519246e-7",
            "extra": "mean: 13.169501580613655 usec\nrounds: 12020"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 127288.85993971713,
            "unit": "iter/sec",
            "range": "stddev: 3.162772549575738e-7",
            "extra": "mean: 7.856147038111513 usec\nrounds: 53476"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ea4cdfe42435dda7c39a264612e89dae09eac620",
          "message": "[chore] update main after 1.3.0 release (#1886)",
          "timestamp": "2021-06-02T09:16:22-07:00",
          "tree_id": "3293645575148c7d8ac6924017255c1f605f0dff",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/ea4cdfe42435dda7c39a264612e89dae09eac620"
        },
        "date": 1622652121274,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 56472.77443203693,
            "unit": "iter/sec",
            "range": "stddev: 0.000008249767451150732",
            "extra": "mean: 17.70764780121554 usec\nrounds: 10142"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 96149.33767672526,
            "unit": "iter/sec",
            "range": "stddev: 0.000005588016104913321",
            "extra": "mean: 10.400487659750866 usec\nrounds: 42017"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7f7151572045281ba186ac3ccf8de3e0dd0d36bd",
          "message": "Add support for OTEL_EXPORTER_JAEGER_TIMEOUT (#1863)",
          "timestamp": "2021-06-04T11:06:57-07:00",
          "tree_id": "8a83e4d59043559f327a25258419eb1d65931bd3",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/7f7151572045281ba186ac3ccf8de3e0dd0d36bd"
        },
        "date": 1622939008694,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 74937.26810946886,
            "unit": "iter/sec",
            "range": "stddev: 9.82667550051898e-7",
            "extra": "mean: 13.344495005331572 usec\nrounds: 19121"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 124514.06329268945,
            "unit": "iter/sec",
            "range": "stddev: 8.016211365222967e-7",
            "extra": "mean: 8.031221321959002 usec\nrounds: 57143"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.9 - propagator": [
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
        "date": 1620925469475,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 122278.45804783114,
            "unit": "iter/sec",
            "range": "stddev: 0.000006545987866029064",
            "extra": "mean: 8.17805536612863 usec\nrounds: 16129"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 204867.42649915963,
            "unit": "iter/sec",
            "range": "stddev: 5.854288054481339e-7",
            "extra": "mean: 4.881205456076259 usec\nrounds: 62500"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1470a8c1ad8b4f7138ab98f7d366cf0dc155e6b0",
          "message": "Add public symbols checker script (#1816)",
          "timestamp": "2021-05-25T13:15:27-07:00",
          "tree_id": "9ec37e978259a7da52692fe87a4b2ba6fe5064fa",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/1470a8c1ad8b4f7138ab98f7d366cf0dc155e6b0"
        },
        "date": 1621986411257,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 107135.32253637128,
            "unit": "iter/sec",
            "range": "stddev: 6.463065555805588e-7",
            "extra": "mean: 9.333989727435698 usec\nrounds: 11779"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 174164.49842622248,
            "unit": "iter/sec",
            "range": "stddev: 5.668792144071954e-7",
            "extra": "mean: 5.7416982739660245 usec\nrounds: 53764"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8ebda956160b658a2569a109248cbcdb54c995e",
          "message": "Fix error in license files (#1881)\n\nFixes #1880",
          "timestamp": "2021-05-28T09:17:54-07:00",
          "tree_id": "0578e40918bfdba5b3aa7b43f101e9e53c8eda0e",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/c8ebda956160b658a2569a109248cbcdb54c995e"
        },
        "date": 1622445120598,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 94972.61474541895,
            "unit": "iter/sec",
            "range": "stddev: 0.000005726023638863301",
            "extra": "mean: 10.529351041672099 usec\nrounds: 11087"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 163409.31557672116,
            "unit": "iter/sec",
            "range": "stddev: 0.000004260591866521276",
            "extra": "mean: 6.119602156527589 usec\nrounds: 54348"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ea4cdfe42435dda7c39a264612e89dae09eac620",
          "message": "[chore] update main after 1.3.0 release (#1886)",
          "timestamp": "2021-06-02T09:16:22-07:00",
          "tree_id": "3293645575148c7d8ac6924017255c1f605f0dff",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/ea4cdfe42435dda7c39a264612e89dae09eac620"
        },
        "date": 1622652170493,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 99030.16660125562,
            "unit": "iter/sec",
            "range": "stddev: 0.000016932602554241684",
            "extra": "mean: 10.097933128058786 usec\nrounds: 13967"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 150907.7551522486,
            "unit": "iter/sec",
            "range": "stddev: 0.000018942825442292476",
            "extra": "mean: 6.626564678476032 usec\nrounds: 54052"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7f7151572045281ba186ac3ccf8de3e0dd0d36bd",
          "message": "Add support for OTEL_EXPORTER_JAEGER_TIMEOUT (#1863)",
          "timestamp": "2021-06-04T11:06:57-07:00",
          "tree_id": "8a83e4d59043559f327a25258419eb1d65931bd3",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/7f7151572045281ba186ac3ccf8de3e0dd0d36bd"
        },
        "date": 1622939011333,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 116888.32397465254,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014783494433414388",
            "extra": "mean: 8.555174426291304 usec\nrounds: 14992"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 180446.16310163174,
            "unit": "iter/sec",
            "range": "stddev: 0.000001156879017577033",
            "extra": "mean: 5.54181913769358 usec\nrounds: 61721"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python pypy3 - propagator": [
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
        "date": 1620925540173,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 591710.0657839173,
            "unit": "iter/sec",
            "range": "stddev: 2.494167811459052e-7",
            "extra": "mean: 1.6900168812831855 usec\nrounds: 68028"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 773030.6149087714,
            "unit": "iter/sec",
            "range": "stddev: 1.3894411132084402e-7",
            "extra": "mean: 1.2936098269769167 usec\nrounds: 84034"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1470a8c1ad8b4f7138ab98f7d366cf0dc155e6b0",
          "message": "Add public symbols checker script (#1816)",
          "timestamp": "2021-05-25T13:15:27-07:00",
          "tree_id": "9ec37e978259a7da52692fe87a4b2ba6fe5064fa",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/1470a8c1ad8b4f7138ab98f7d366cf0dc155e6b0"
        },
        "date": 1621986459884,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 598608.6021487127,
            "unit": "iter/sec",
            "range": "stddev: 1.929659444894186e-7",
            "extra": "mean: 1.6705406444386062 usec\nrounds: 68494"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 975009.7708017145,
            "unit": "iter/sec",
            "range": "stddev: 3.865857319693694e-7",
            "extra": "mean: 1.0256307474517334 usec\nrounds: 105264"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8ebda956160b658a2569a109248cbcdb54c995e",
          "message": "Fix error in license files (#1881)\n\nFixes #1880",
          "timestamp": "2021-05-28T09:17:54-07:00",
          "tree_id": "0578e40918bfdba5b3aa7b43f101e9e53c8eda0e",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/c8ebda956160b658a2569a109248cbcdb54c995e"
        },
        "date": 1622445174788,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 467609.2156511452,
            "unit": "iter/sec",
            "range": "stddev: 2.966556693044451e-7",
            "extra": "mean: 2.138537835717173 usec\nrounds: 55556"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 718796.8561540355,
            "unit": "iter/sec",
            "range": "stddev: 6.4096981250029e-7",
            "extra": "mean: 1.3912136529791232 usec\nrounds: 81301"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ea4cdfe42435dda7c39a264612e89dae09eac620",
          "message": "[chore] update main after 1.3.0 release (#1886)",
          "timestamp": "2021-06-02T09:16:22-07:00",
          "tree_id": "3293645575148c7d8ac6924017255c1f605f0dff",
          "url": "https://github.com/open-o11y/opentelemetry-python/commit/ea4cdfe42435dda7c39a264612e89dae09eac620"
        },
        "date": 1622652232323,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 633833.6671209189,
            "unit": "iter/sec",
            "range": "stddev: 1.717444785314713e-7",
            "extra": "mean: 1.5777009835124571 usec\nrounds: 69445"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 969015.2994385349,
            "unit": "iter/sec",
            "range": "stddev: 2.88074677820675e-7",
            "extra": "mean: 1.0319754503148924 usec\nrounds: 103093"
          }
        ]
      }
    ]
  }
}