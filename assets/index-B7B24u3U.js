function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-CLWgOC8e.js","assets/index-QiRLXXJ-.js","assets/index-BQ9Wko1R.css","assets/OptionsColor-CNb7EK3Y.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-QiRLXXJ-.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-CLWgOC8e.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};
