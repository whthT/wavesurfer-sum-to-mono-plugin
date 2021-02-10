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
