function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Remover-CsJb_E2C.js","assets/ExternalInteractorBase-CIi3zRdK.js","assets/index-c8Qy6z6c.js","assets/index-BQ9Wko1R.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{u as o,_ as r}from"./index-c8Qy6z6c.js";class u{constructor(){this.quantity=2}load(t){if(!t)return;const e=t.quantity;e!==void 0&&(this.quantity=o(e))}}async function s(n,t=!0){await n.addInteractor("externalRemove",async e=>{const{Remover:a}=await r(()=>import("./Remover-CsJb_E2C.js"),__vite__mapDeps([0,1,2,3]));return new a(e)},t)}export{u as Remove,s as loadExternalRemoveInteraction};
