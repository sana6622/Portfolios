function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-Bl_jwXax.js","assets/index-C1UtQB3h.js","assets/index-BQ9Wko1R.css","assets/OptionsColor-CwisL_aV.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-C1UtQB3h.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-Bl_jwXax.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};
