function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorbersPlugin-CYv6nFGl.js","assets/index-CXpWA_7N.js","assets/index-BQ9Wko1R.css","assets/ValueWithRandom-D_sNsxuv.js","assets/AnimationOptions-C-EgldGs.js","assets/OptionsColor-mqvAts0K.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-CXpWA_7N.js";async function n(o,r=!0){const{AbsorbersPlugin:t}=await i(()=>import("./AbsorbersPlugin-CYv6nFGl.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5]));await o.addPlugin(new t,r)}export{n as loadAbsorbersPlugin};
