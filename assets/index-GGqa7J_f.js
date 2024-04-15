function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-RcarzO91.js","assets/index-CeWv_Stg.js","assets/index-BQ9Wko1R.css","assets/index-C1zypnm6.js","assets/index-D_nWHp1-.js","assets/index-CZtdPYnC.js","assets/index-CQVsxQlB.js","assets/index-oPzBO7xB.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CeWv_Stg.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-RcarzO91.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-C1zypnm6.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-D_nWHp1-.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CZtdPYnC.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CQVsxQlB.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-oPzBO7xB.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
