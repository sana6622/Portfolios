function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-DZRx0wvO.js","assets/index-DtFTGxm0.js","assets/index-BQ9Wko1R.css","assets/ValueWithRandom-BFqC3dxx.js","assets/AnimationOptions-K5lBsLnL.js","assets/OptionsColor-B2B_fHHj.js","assets/OptionsUtils-M9lDsICP.js","assets/AnimatableColor-CLdmbLEh.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-DtFTGxm0.js";async function _(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-DZRx0wvO.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(t,a)},r)}export{_ as loadDestroyUpdater};
