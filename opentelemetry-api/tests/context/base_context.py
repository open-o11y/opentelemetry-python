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
from logging import ERROR

from opentelemetry import context
from opentelemetry.context.context import Key


def do_work() -> Key:
    key = context.create_key("say")
    context.attach(context.set_value(key, "bar"))
    return key


class ContextTestCases:
    class BaseTest(unittest.TestCase):
        def setUp(self) -> None:
            self.previous_context = context.get_current()

        def tearDown(self) -> None:
            context.attach(self.previous_context)

        def test_context(self):
            key = context.create_key("say")
            self.assertIsNone(context.get_value(key))
            empty = context.get_current()
            second = context.set_value(key, "foo")

            self.assertEqual(context.get_value(key, context=second), "foo")

            key2 = do_work()
            self.assertEqual(context.get_value(key2), "bar")
            third = context.get_current()

            self.assertIsNone(context.get_value(key, context=empty))
            self.assertEqual(context.get_value(key, context=second), "foo")
            self.assertEqual(context.get_value(key2, context=third), "bar")

        def test_set_value(self):
            key = context.create_key("a")
            first = context.set_value(key, "yyy")
            second = context.set_value(key, "zzz")
            third = context.set_value(key, "---", first)
            self.assertEqual("yyy", context.get_value(key, context=first))
            self.assertEqual("zzz", context.get_value(key, context=second))
            self.assertEqual("---", context.get_value(key, context=third))
            self.assertEqual(None, context.get_value(key))

        def test_attach(self):
            key = context.create_key("a")
            context.attach(context.set_value(key, "yyy"))

            token = context.attach(context.set_value(key, "zzz"))
            self.assertEqual("zzz", context.get_value(key))

            context.detach(token)
            self.assertEqual("yyy", context.get_value(key))

            with self.assertLogs(level=ERROR):
                context.detach("some garbage")

        def test_detach_out_of_order(self):
            key = context.create_key("c")
            t1 = context.attach(context.set_value(key, 1))
            self.assertEqual(context.get_current(), {key: 1})
            t2 = context.attach(context.set_value(key, 2))
            self.assertEqual(context.get_current(), {key: 2})
            context.detach(t1)
            self.assertEqual(context.get_current(), {})
            context.detach(t2)
            self.assertEqual(context.get_current(), {key: 1})
