function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinksPlugin-DVfH7UeH.js","assets/index-CXpWA_7N.js","assets/index-BQ9Wko1R.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-CXpWA_7N.js";async function r(i,n=!0){const{LinksPlugin:t}=await o(()=>import("./LinksPlugin-DVfH7UeH.js"),__vite__mapDeps([0,1,2])),a=new t;await i.addPlugin(a,n)}export{r as loadLinksPlugin};