'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _build_processor_function = require('../build_processor_function');

var _build_processor_function2 = _interopRequireDefault(_build_processor_function);

var _table = require('../request_processors/table');

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function buildRequestBody(req, panel, esQueryConfig, indexPattern) {
  const processor = (0, _build_processor_function2.default)(_table2.default, req, panel, esQueryConfig, indexPattern);
  const doc = processor({});
  return doc;
}

exports.default = buildRequestBody;
module.exports = exports['default'];