function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorbersPlugin-CfQUdPpX.js","assets/index-CborTfG7.js","assets/index-BQ9Wko1R.css","assets/ValueWithRandom-D3mHgS92.js","assets/AnimationOptions-7WZ6vsn2.js","assets/OptionsColor-tb3XzzSE.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-CborTfG7.js";async function n(o,r=!0){const{AbsorbersPlugin:t}=await i(()=>import("./AbsorbersPlugin-CfQUdPpX.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5]));await o.addPlugin(new t,r)}export{n as loadAbsorbersPlugin};
