function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-EM4N1_Sa.js","assets/index-CborTfG7.js","assets/index-BQ9Wko1R.css","assets/ValueWithRandom-D3mHgS92.js","assets/AnimationOptions-7WZ6vsn2.js","assets/OptionsColor-tb3XzzSE.js","assets/OptionsUtils-sTsE5NRe.js","assets/AnimatableColor-DvbEp4mb.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-CborTfG7.js";async function _(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-EM4N1_Sa.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(t,a)},r)}export{_ as loadDestroyUpdater};
