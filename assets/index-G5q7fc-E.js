function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorbersPlugin-hRWR3AWR.js","assets/index-C1UtQB3h.js","assets/index-BQ9Wko1R.css","assets/ValueWithRandom-Bm8LB-xb.js","assets/AnimationOptions-CoAXxAG4.js","assets/OptionsColor-CwisL_aV.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-C1UtQB3h.js";async function n(o,r=!0){const{AbsorbersPlugin:t}=await i(()=>import("./AbsorbersPlugin-hRWR3AWR.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5]));await o.addPlugin(new t,r)}export{n as loadAbsorbersPlugin};
