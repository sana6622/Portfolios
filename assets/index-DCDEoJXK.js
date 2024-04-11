function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-9AwohhbJ.js","assets/index-C1UtQB3h.js","assets/index-BQ9Wko1R.css","assets/ValueWithRandom-Bm8LB-xb.js","assets/AnimationOptions-CoAXxAG4.js","assets/OptionsColor-CwisL_aV.js","assets/OptionsUtils-FWlHBqqF.js","assets/AnimatableColor-BR_MJn3T.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-C1UtQB3h.js";async function _(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-9AwohhbJ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(t,a)},r)}export{_ as loadDestroyUpdater};
