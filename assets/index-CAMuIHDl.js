function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BrgnD0as.js","assets/index-c8Qy6z6c.js","assets/index-BQ9Wko1R.css","assets/index-2HJ7HqUx.js","assets/index--Cg_Vp4O.js","assets/index-C-jNgI2J.js","assets/index-x2FBcKt5.js","assets/index-CVqqEDNc.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-c8Qy6z6c.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BrgnD0as.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-2HJ7HqUx.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index--Cg_Vp4O.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-C-jNgI2J.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-x2FBcKt5.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CVqqEDNc.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
