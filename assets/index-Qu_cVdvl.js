function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-hGHZnY2z.js","assets/index-QiRLXXJ-.js","assets/index-BQ9Wko1R.css","assets/index-D_n6L3cJ.js","assets/index-DmONp3zl.js","assets/index-BmmmIeJ-.js","assets/index-C69ir4cU.js","assets/index-BFfL-HdW.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-QiRLXXJ-.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-hGHZnY2z.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-D_n6L3cJ.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-DmONp3zl.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BmmmIeJ-.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-C69ir4cU.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BFfL-HdW.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
