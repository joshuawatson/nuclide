'use babel';
/* @flow */

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import featureConfig from '../../nuclide-feature-config';

const DEBUGGER_LOGGER_CATEGORY = 'nuclide-lldb-client-debugger';
export default require('../../nuclide-logging').getCategoryLogger(DEBUGGER_LOGGER_CATEGORY);

export function getConfig(): any {
  return (featureConfig.get('nuclide-debugger-lldb-client'): any);
}
