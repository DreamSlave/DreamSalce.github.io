import{a as s,b as m,r as t,u as l,j as r}from"./index-b730de93.js";const p=()=>{const n={partyNo:s(e=>e.order.partyNo),userId:s(e=>e.order.userId),name:s(e=>e.order.name),team:s(e=>e.order.team),rank:s(e=>e.order.rank)},{encodedMenuNm:a}=m(),[o,d]=t.useState(""),i=l();t.useEffect(()=>{a&&a!==""&&d(decodeURIComponent(a))},[a]);const c=()=>{i("/order/test")};return r.jsxs("div",{id:"order",className:"element",children:[r.jsxs("div",{className:"person-info bg_sub point",children:[n.name," ",n.rank,"(",n.team,")"]}),r.jsx("div",{className:"person-info bg_sub point",children:o}),r.jsx("div",{className:"btn-area",children:r.jsx("ul",{children:r.jsx("li",{children:r.jsx("div",{className:"large-btn",onClick:c,children:"확인"})})})})]})};export{p as default};
