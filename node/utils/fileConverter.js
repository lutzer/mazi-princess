const path = require('path')
const { exec } = require('child_process')
const { promisify } = require('util')
const fs = require('fs')
const _ = require('underscore');

const execCommand = promisify(exec)
const deleteFile = promisify(fs.unlink)
const existsFile = promisify(fs.existsSync)
const copyFile = promisify(fs.copyFile)

/** function converts a wav or ogg file to mp3 and return its path
  * @param srcPath file to be converted
  * @param options.outPath the output file path (optional)
  * @param options.delete delete file after conversion
  * @param options.allowedExtensions array with a list of allowed extensions, i.e ['.wav','.ogg','.webm']
  */
const convertToMp3 = async function(srcPath, options = {}) {
  const fileData = path.parse(srcPath)
  const outPath = options.outPath || fileData.dir + '/' + fileData.name + '_c.mp3'
  extension = fileData.ext

  if ( options.allowedExtensions && !_.includes(options.allowedExtensions, extension))
      throw new Error("Extension not supported")

  await execCommand(`ffmpeg -f ${extension.substr(1)} -i ${srcPath} -acodec libmp3lame -y ${outPath}`)
  if (options.delete) {
    await deleteFile(srcPath);
  }
  return outPath
}


module.exports = { convertToMp3, deleteFile, existsFile, copyFile }