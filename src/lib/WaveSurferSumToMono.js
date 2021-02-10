const remix = require('audio-buffer-remix')
export default class SumToMonoPlugin {
  static create(params) {
    return {
      name: "sumToMonoPlugin",
      deferInit: params && params.deferInit ? params.deferInit : false,
      params: params,
      staticProps: {
        sumToMono() {
          this.sumToMonoPlugin.sumToMono();
        },
        revertMonoToOriginal() {
          this.sumToMonoPlugin.revertMonoToOriginal();
        },
        isMono() {
          return this.sumToMonoPlugin.isMono;
        },
      },
      instance: SumToMonoPlugin,
    };
  }

  constructor(params, ws) {
    this.params = params;
    this.wavesurfer = ws;
    this.util = ws.util;
    this.isMono = false;
  }

  sumToMono() {
    if (!this.wavesurfer.backend.originalBuffer) {
      this.wavesurfer.backend.originalBuffer = this.wavesurfer.backend.buffer;
    }

    const monoBuffer = remix(this.wavesurfer.backend.buffer, 1);
    this.wavesurfer.backend.buffer = monoBuffer;
    this.wavesurfer.drawer.fireEvent("redraw");
    this._setIsMono(true);
  }
  _setIsMono(bool) {
    this.isMono = bool;
    this.wavesurfer.fireEvent("toggle-mono", bool);
  }
  revertMonoToOriginal() {
    if (this.wavesurfer.backend.originalBuffer) {
      this.wavesurfer.backend.buffer = this.wavesurfer.backend.originalBuffer;
      this.wavesurfer.backend.originalBuffer = null;
      this.wavesurfer.drawer.fireEvent("redraw");
    }
    this._setIsMono(false);
  }

  init() {}
  destroy() {}
}
