/*
 * Copyright (c) 2011-2018, Zingaya, Inc. All rights reserved.
 */

import {
  requireNativeComponent,
  View
} from 'react-native'
import React from 'react'
import PropTypes from 'prop-types';

var createReactClass = require('create-react-class');

/**
 * @class VoxImplantPreview
 * @classdesc Create and setup local preview for video calls
 * 
 * @param {string} callId - The call id
 * @deprecated Use {@link Voximplant.VideoView} instead
 * @memberOf Legacy
 */
var VoxImplantPreview = createReactClass({
  propTypes: {
    callId: PropTypes.string,
    ...View.propTypes,
  },
  render() {
    var style = this.props.style;
  	return (
      <VoxImplantRendererView 
        style={this.props.style} 
        previewProperty={true} />
    );
  },
});

/**
 * @class VoxImplantRemoteView
 * @classdesc Create and setup remote video view
 * 
 * @param {string} callId - The call id
 * @deprecated Use {@link Voximplant.VideoView} instead
 * @memberOf Legacy
 */
var VoxImplantRemoteView = createReactClass({
  propTypes: {
    callId: PropTypes.string,
    ...View.propTypes,
  },
  render() {
    var style = this.props.style;
  	return (
      <VoxImplantRendererView 
        style={this.props.style} 
        previewProperty={false}/>
    );
  },
});

const VoxImplantRendererView = requireNativeComponent('VoxImplantRendererView', VoxImplantRendererView, {
  nativeOnly: {
    previewProperty: true
  }
});

export const Preview = VoxImplantPreview;
export const RemoteView = VoxImplantRemoteView;