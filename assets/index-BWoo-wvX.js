function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-BDELe-h8.js","assets/index-CeWv_Stg.js","assets/index-BQ9Wko1R.css","assets/ValueWithRandom-VBtKHHFo.js","assets/AnimationOptions-Bf5G6pNP.js","assets/OptionsColor-BLuKcSgx.js","assets/OptionsUtils-HEfGGQHn.js","assets/AnimatableColor-D2pdztkS.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-CeWv_Stg.js";async function _(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-BDELe-h8.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(t,a)},r)}export{_ as loadDestroyUpdater};
