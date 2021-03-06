// Copyright (c) 2019, Oracle and/or its affiliates. All rights reserved.
// Licensed under the Universal Permissive License v 1.0 as shown at http://oss.oracle.com/licenses/upl.

define('Testimonials.Model'
, [
    'Backbone'
  , 'underscore'
  , 'Utils'
  ]
, function TestimonialsModel(
    Backbone
  , _
  , Utils
  )
{
  'use strict';

  return Backbone.Model.extend({

    urlRoot: Utils.getAbsoluteUrl('services/Testimonials.Service.ss')

  , validation: {
      writerName: {
        required: true
      , rangeLength: [2, 50]
      }
    , title: {
        required: true
      , rangeLength: [2, 200]
      }
    , text: {
        required: true
      , rangeLength: [2, 999]
      }
    , rating: function rating(value) {
        var intValue = parseInt(value, 10);
        var isValid = intValue > 0 && intValue < 6;

        if (!isValid) {
          return _('Rating is required').translate();
        }
      }
    }

  });
});