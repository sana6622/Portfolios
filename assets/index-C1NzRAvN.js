function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-szJ6wXRF.js","assets/index-C1UtQB3h.js","assets/index-BQ9Wko1R.css","assets/index-CTi0eWvy.js","assets/index-CJt-JNgD.js","assets/index-BIq6T9tV.js","assets/index-BHjadI2e.js","assets/index-VEoJu7p9.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-C1UtQB3h.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-szJ6wXRF.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CTi0eWvy.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-CJt-JNgD.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BIq6T9tV.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BHjadI2e.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-VEoJu7p9.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
