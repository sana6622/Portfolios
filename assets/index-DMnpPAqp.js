function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-B8gMVzKo.js","assets/index-CXpWA_7N.js","assets/index-BQ9Wko1R.css","assets/index-CRKE0nW-.js","assets/index-BrtG1Rxo.js","assets/index-BC0bA3P8.js","assets/index-BL9YXcYd.js","assets/index-NMZk9IXm.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CXpWA_7N.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-B8gMVzKo.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CRKE0nW-.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BrtG1Rxo.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BC0bA3P8.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BL9YXcYd.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-NMZk9IXm.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
