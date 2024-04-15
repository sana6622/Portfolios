function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CircleDrawer-DDuo9ooJ.js","assets/index-CeWv_Stg.js","assets/index-BQ9Wko1R.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-CeWv_Stg.js";async function o(a,e=!0){const{CircleDrawer:r}=await i(()=>import("./CircleDrawer-DDuo9ooJ.js"),__vite__mapDeps([0,1,2]));await a.addShape("circle",new r,e)}export{o as loadCircleShape};
