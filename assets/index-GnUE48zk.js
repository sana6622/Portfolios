function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-BFk_qnG4.js","assets/index-c8Qy6z6c.js","assets/index-BQ9Wko1R.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-c8Qy6z6c.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-BFk_qnG4.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};