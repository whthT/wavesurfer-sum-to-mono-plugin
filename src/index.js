import WaveSurfer from "wavesurfer.js";
import SumToMonoPlugin from "./lib/WaveSurferSumToMono";

window.addEventListener("DOMContentLoaded", () => {
  const wavesurfer = WaveSurfer.create({
    container: document.getElementById("wavesurfer"),
    backend: "WebAudio",
    splitChannels: true,
    plugins: [SumToMonoPlugin.create()],
  });
  wavesurfer.load("/untitled_stereo.wav");

  document.getElementById("playPause").onclick = () => {
    wavesurfer.playPause();
  };

  Array.from(document.querySelectorAll(".controls button")).forEach((el) => {
    el.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const isStereo = el.classList.contains("stereo");
      if (isStereo) {
        wavesurfer.revertMonoToOriginal();
      } else {
        wavesurfer.sumToMono();
      }
    };
  });

  wavesurfer.on("toggle-mono", (isMono) => {
    console.log(isMono);
    if (isMono) {
      document.querySelector(".stereo").classList.remove("Active");
      document.querySelector(".mono").classList.add("Active");
    } else {
      document.querySelector(".mono").classList.remove("Active");
      document.querySelector(".stereo").classList.add("Active");
    }
  });

  Array.from(document.querySelectorAll(".links > a")).forEach((el) => {
    el.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      wavesurfer.load(el.getAttribute("href"));
    };
  });
  window.wavesurfer = wavesurfer;
});
