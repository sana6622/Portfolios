function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorbersPlugin-taNCFJaP.js","assets/index-c8Qy6z6c.js","assets/index-BQ9Wko1R.css","assets/ValueWithRandom-XAkvIG3w.js","assets/AnimationOptions-BrVRRadV.js","assets/OptionsColor-BU9RmFOG.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-c8Qy6z6c.js";async function n(o,r=!0){const{AbsorbersPlugin:t}=await i(()=>import("./AbsorbersPlugin-taNCFJaP.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5]));await o.addPlugin(new t,r)}export{n as loadAbsorbersPlugin};
