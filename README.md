# WaveSurferSumToMonoPlugin

[WaveSurfer.js](https://wavesurfer-js.org/) sum to mono plugin

### Usage

```js
import SumToMonoPlugin from "wavesurfer-sum-to-mono-plugin";
const wavesurfer = WaveSurfer.create({
  container: document.getElementById("wavesurfer"),
  backend: "MediaElement", // All backends supported.
  ...
  plugins: [
      ...
      SumToMonoPlugin.create(),
      ...
  ],
});

wavesurfer.on("toggle-mono", (isMono) => {
  console.log(isMono); // true, false
});
```

### Methods

- `sumToMono()` Transform sound to mono
- `revertMonoToOriginal()` Revert sound to original form
- `isMono()` Is mono

### Events
- `toggle-mono` Fires when toggle mono.

### Installation

```sh
$ npm i wavesurfer-sum-to-mono-plugin
```

### Todos

- Write tests

## License

MIT

**Free Software, Hell Yeah!**

[git-repo-url]: https://github.com/whthT/wavesurfer-sum-to-mono-plugin
[wavesurfer.js]: https://wavesurfer-js.org
[whtht]: https://github.com/whthT
[node.js]: http://nodejs.org
