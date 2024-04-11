function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/EmittersSquareShapeGenerator-CZkQubmb.js","assets/EmitterShapeBase-4KcS34Iy.js","assets/index-QiRLXXJ-.js","assets/index-BQ9Wko1R.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-QiRLXXJ-.js";async function p(a,t=!0){var r;const e=a,{EmittersSquareShapeGenerator:o}=await i(()=>import("./EmittersSquareShapeGenerator-CZkQubmb.js"),__vite__mapDeps([0,1,2,3]));(r=e.addEmitterShapeGenerator)==null||r.call(e,"square",new o),await e.refresh(t)}export{p as loadEmittersShapeSquare};
