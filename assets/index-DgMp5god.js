function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorbersPlugin-DZy6PZIz.js","assets/index-QiRLXXJ-.js","assets/index-BQ9Wko1R.css","assets/ValueWithRandom-DRelwDTH.js","assets/AnimationOptions-D_wDIiEE.js","assets/OptionsColor-CNb7EK3Y.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-QiRLXXJ-.js";async function n(o,r=!0){const{AbsorbersPlugin:t}=await i(()=>import("./AbsorbersPlugin-DZy6PZIz.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5]));await o.addPlugin(new t,r)}export{n as loadAbsorbersPlugin};
