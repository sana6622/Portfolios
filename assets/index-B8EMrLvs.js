function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-DiusnQ82.js","assets/index-QiRLXXJ-.js","assets/index-BQ9Wko1R.css","assets/ValueWithRandom-DRelwDTH.js","assets/AnimationOptions-D_wDIiEE.js","assets/OptionsColor-CNb7EK3Y.js","assets/OptionsUtils-D43ZH0ar.js","assets/AnimatableColor-DF4IIas9.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-QiRLXXJ-.js";async function _(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-DiusnQ82.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(t,a)},r)}export{_ as loadDestroyUpdater};
