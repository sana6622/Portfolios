function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-BnlmCjuk.js","assets/index-c8Qy6z6c.js","assets/index-BQ9Wko1R.css","assets/ValueWithRandom-XAkvIG3w.js","assets/AnimationOptions-BrVRRadV.js","assets/OptionsColor-BU9RmFOG.js","assets/OptionsUtils-DyzjqaMg.js","assets/AnimatableColor-DyJS0PYA.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-c8Qy6z6c.js";async function _(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-BnlmCjuk.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(t,a)},r)}export{_ as loadDestroyUpdater};
