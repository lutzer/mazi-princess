'use strict';

const _ = require('underscore');
const assert = require('assert');

const { convertToMp3, deleteFile, existsFile, copyFile } = require('./../utils/fileConverter');

var TEST_AUDIO_FILE = ["tests/files/audio2.wav", "tests/files/audio3.mp3"]

describe('fileConverter tests', function(){

    // sets thest timeout to 500 ms
    this.timeout(2000);


    it("should convert a wav file to mp3", async function() {
      let newFile = await convertToMp3(TEST_AUDIO_FILE[0]);
      assert(existsFile(newFile))
      deleteFile(newFile);
    });

    it("should convert a mp3 file to mp3", async function() {
      let newFile = await convertToMp3(TEST_AUDIO_FILE[0]);
      assert(existsFile(newFile))
      deleteFile(newFile);
    });

    it("should delete a file after conversion", async function() {
      const copyPath = "tests/files/audio2-copy.wav"
      await copyFile(TEST_AUDIO_FILE[0], copyPath);
      let newFile = await convertToMp3(copyPath, { delete: true });
      try {
        existsFile(copyPath)
        assert(false);
      } catch (err) {
        assert(true);
      }
      deleteFile(newFile);
    });

    it("should only allow conversion of accepted files", async function() {
      try {
        let newFile = await convertToMp3(TEST_AUDIO_FILE[1], { allowedExtensions: ['.wav'] });
        assert(false);
      } catch (err) {
        assert(true);
      }
      
      let newFile = await convertToMp3(TEST_AUDIO_FILE[0], { allowedExtensions: ['.wav'] });
      deleteFile(newFile);
    });

    it("should output file to specidifed path", async function() {
      let newFile = await convertToMp3(TEST_AUDIO_FILE[0], { outPath: "tests/files/audio2-output.wav" });
      deleteFile(newFile);
    });

})
