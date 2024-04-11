function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-4Gw2FTwf.js","assets/index-CborTfG7.js","assets/index-BQ9Wko1R.css","assets/OptionsColor-tb3XzzSE.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-CborTfG7.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-4Gw2FTwf.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};
