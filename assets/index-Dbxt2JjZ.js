function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-BEys98ko.js","assets/index-DtFTGxm0.js","assets/index-BQ9Wko1R.css","assets/OptionsColor-B2B_fHHj.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-DtFTGxm0.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-BEys98ko.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};
