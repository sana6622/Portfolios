function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorbersPlugin-DLiWYb8O.js","assets/index-DtFTGxm0.js","assets/index-BQ9Wko1R.css","assets/ValueWithRandom-BFqC3dxx.js","assets/AnimationOptions-K5lBsLnL.js","assets/OptionsColor-B2B_fHHj.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-DtFTGxm0.js";async function n(o,r=!0){const{AbsorbersPlugin:t}=await i(()=>import("./AbsorbersPlugin-DLiWYb8O.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5]));await o.addPlugin(new t,r)}export{n as loadAbsorbersPlugin};
