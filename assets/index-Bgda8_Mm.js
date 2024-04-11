function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BkFkwXke.js","assets/index-CborTfG7.js","assets/index-BQ9Wko1R.css","assets/index-BLjRU3bH.js","assets/index-DsLmVeHH.js","assets/index-dDMq7QKW.js","assets/index-DOkbLjUj.js","assets/index-C4vuMdux.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CborTfG7.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BkFkwXke.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BLjRU3bH.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-DsLmVeHH.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-dDMq7QKW.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DOkbLjUj.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-C4vuMdux.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
