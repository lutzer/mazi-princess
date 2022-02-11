'use strict';

/*
* @Author: Lutz Reiter, Design Research Lab, Universität der Künste Berlin
* @Date:   2016-05-04 11:38:41
* @Last Modified by:   lutzer
* @Last Modified time: 2016-07-08 00:40:26
*/

import Marionette from 'marionette'
import _ from 'underscore'
import mime from 'mime-types'

import template from 'text!templates/audiorecorder_tmpl.html';

async function getMediaRecorder() {
  let stream = await navigator.mediaDevices.getUserMedia ({ audio: true })
  return new MediaRecorder(stream);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class AudioRecorderView extends Marionette.ItemView {

	  /* properties */
    get template() { return _.template(template) }

    get className() { return 'audio-recorder' }

    events() {
      return {
        'click #recorder-recordButton' : 'onRecordButtonClicked',
        'click #recorder-stopButton' : 'onStopButtonClicked',
        'click #recorder-deleteButton' : 'onDeleteButtonClicked',
        'click #recorder-saveButton' : 'onSaveButtonClicked',

      }
    }

    /* methods */
    initialize(options) {
      this.recorder = null;
      this.blob = null;
    }

    async onRecordButtonClicked() {
      if (this.recorder)
        return;

      this.recorder = await getMediaRecorder();
      this.recorder.start();

      let audioChunks = [];
      this.recorder.ondataavailable = (e) => {
        audioChunks.push(e.data);
      }

      this.recorder.onstop = () => {
        this.blob = new Blob(audioChunks, { 'type' : 'audio/ogg; codecs=opus' });
        const audioUrl = window.URL.createObjectURL(this.blob);
        this.$("#recorder-audio-player")[0].src = audioUrl;
      }
    }

    onStopButtonClicked() {
      if (this.recorder)
        this.recorder.stop();
    }

    onDeleteButtonClicked() {
      this.blob = null;
      this.recorder = null;
      this.$("#recorder-audio-player")[0].src = null;
    }

    onSaveButtonClicked() {
      var filename = `audio.${mime.extension(this.recorder.mimeType)}`;
      let file = new File([this.blob], filename, { type: this.recorder.mimeType });
      this.triggerMethod('saveRecording', file);
      this.recorder = null;
    }
    
}

export default AudioRecorderView