function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-Cpx3OqGZ.js","assets/index-CXpWA_7N.js","assets/index-BQ9Wko1R.css","assets/ValueWithRandom-D_sNsxuv.js","assets/AnimationOptions-C-EgldGs.js","assets/OptionsColor-mqvAts0K.js","assets/OptionsUtils-Bse0MmBG.js","assets/AnimatableColor-CzAy6ZSP.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-CXpWA_7N.js";async function _(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-Cpx3OqGZ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(t,a)},r)}export{_ as loadDestroyUpdater};
