function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-CXEQbPPc.js","assets/index-CXpWA_7N.js","assets/index-BQ9Wko1R.css","assets/OptionsColor-mqvAts0K.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-CXpWA_7N.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-CXEQbPPc.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};
