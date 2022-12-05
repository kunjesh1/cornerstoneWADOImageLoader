function isMobile() {
  // credit to Timothy Huang for this regex test:
  // https://dev.to/timhuang/a-simple-way-to-detect-if-browser-is-on-a-mobile-device-with-javascript-44j3
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return true;
  } else {
    return false;
  }
}

let options = {
  // callback allowing customization of the xhr (e.g. adding custom auth headers, cors, etc)
  beforeSend(/* xhr, imageId */) {},
  // callback allowing modification of the xhr response before creating image objects
  beforeProcessing(xhr) {
    return Promise.resolve(xhr.response);
  },
  // callback allowing modification of newly created image objects
  imageCreated(/* image */) {},
  strict: false,
  useWebWorkers: true,
  decodeConfig: {
    convertFloatPixelDataToInt: true,
    usePDFJS: false,
    isDownscaleImage: isMobile() ? true : false,
  },
};

export function setOptions(newOptions) {
  options = Object.assign(options, newOptions);
}

export function getOptions() {
  return options;
}
