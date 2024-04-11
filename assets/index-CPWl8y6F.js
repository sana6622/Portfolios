function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-SQEhHPT_.js","assets/index-DtFTGxm0.js","assets/index-BQ9Wko1R.css","assets/index-DZr96rMu.js","assets/index-D-G2Q_2J.js","assets/index-BUaPKHed.js","assets/index-DUQWSU2u.js","assets/index-CT9DqLG9.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DtFTGxm0.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-SQEhHPT_.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DZr96rMu.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-D-G2Q_2J.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BUaPKHed.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DUQWSU2u.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CT9DqLG9.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
