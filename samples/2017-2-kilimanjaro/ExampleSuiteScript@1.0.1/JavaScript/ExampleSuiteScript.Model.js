// Copyright (c) 2019, Oracle and/or its affiliates. All rights reserved.
// Licensed under the Universal Permissive License v 1.0 as shown at http://oss.oracle.com/licenses/upl.

define('ExampleSuiteScript.Model'
, [
    'Backbone'

  , 'Utils'
  ]
, function
  (
    Backbone

  , Utils
  )
{
  'use strict';

  return Backbone.Model.extend({
    urlRoot: Utils.getAbsoluteUrl('services/ExampleSuiteScript.Service.ss')
  })
});