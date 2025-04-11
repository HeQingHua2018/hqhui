"use strict";(self.webpackChunkhqhui=self.webpackChunkhqhui||[]).push([[232],{35609:function(f,a,t){var r;t.r(a),t.d(a,{demos:function(){return M}});var u=t(17061),h=t.n(u),p=t(17156),I=t.n(p),m=t(67294),x=t(710),D=t(2313),M={"src-utils-format-time-demo-base":{component:m.memo(m.lazy(function(){return t.e(433).then(t.bind(t,18406))})),asset:{type:"BLOCK",id:"src-utils-format-time-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t(87512).Z},react:{type:"NPM",value:"18.3.1"},hqhui:{type:"NPM",value:"0.0.1"}},entry:"index.tsx",title:"\u57FA\u7840\u7528\u6CD5"},context:{react:r||(r=t.t(m,2)),hqhui:D},renderOpts:{compile:function(){var E=I()(h()().mark(function g(){var v,S=arguments;return h()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,t.e(335).then(t.bind(t,37335));case 2:return c.abrupt("return",(v=c.sent).default.apply(v,S));case 3:case"end":return c.stop()}},g)}));function Y(){return E.apply(this,arguments)}return Y}()}}}},2313:function(f,a,t){t.r(a),t.d(a,{BaseEchart:function(){return c},Button:function(){return p},Foo:function(){return m},StructureChart:function(){return v},formatTime:function(){return T}});var r=t(67294),u=t(85893),h=function(n){var e=n.type,s=e===void 0?"default":e,o=n.children,i=n.onClick;return(0,u.jsx)("button",{type:"button",className:"dumi-btn ".concat(s?"dumi-btn-"+s:""),onClick:i,children:o})},p=(0,r.memo)(h),I=function(n){return(0,u.jsx)("h4",{children:n.title})},m=I,x=t(42122),D=t.n(x),M=t(27424),E=t.n(M),Y=t(14336),g=function(){var n=r.useState(),e=E()(n,2),s=e[0],o=e[1];(0,r.useEffect)(function(){fetch("https://assets.antv.antgroup.com/g6/organization-chart.json").then(function(d){return d.json()}).then(o)},[]);var i={data:s};return(0,u.jsx)(Y.OE,D()({},i))},v=g,S=t(64389),y=function(n){var e=n.option,s=e===void 0?{}:e,o=(0,r.useRef)(null);return(0,r.useEffect)(function(){if(o.current){var i=S.S1(o.current);i.setOption(s);var d=function(){return i.resize()};return window.addEventListener("resize",d),function(){return window.removeEventListener("resize",d)}}},[s]),(0,u.jsx)("div",{ref:o,style:{width:"100%",height:400}})},c=y;function C(l){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"YYYY-MM-DD hh:mm:ss",e=new Date(l),s=e.getFullYear(),o=("0"+(e.getMonth()+1)).slice(-2),i=("0"+e.getDate()).slice(-2),d=("0"+e.getHours()).slice(-2),P=("0"+e.getMinutes()).slice(-2),O=("0"+e.getSeconds()).slice(-2),R={YYYY:String(s),MM:o,DD:i,hh:d,mm:P,ss:O};return n.replace(/YYYY|MM|DD|hh|mm|ss/g,function(j){return R[j]})}var T=C},42677:function(f,a,t){t.r(a),t.d(a,{texts:function(){return u}});var r=t(710);const u=[{value:"\u5C06\u65F6\u95F4\u6233\u683C\u5F0F\u5316\u6210\u6307\u5B9A\u7684\u65E5\u671F\u65F6\u95F4\u683C\u5F0F\u3002",paraId:0,tocIndex:0},{value:"\u53C2\u6570\u540D",paraId:1,tocIndex:3},{value:"\u7C7B\u578B",paraId:1,tocIndex:3},{value:"\u662F\u5426\u5FC5\u586B",paraId:1,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:3},{value:"\u8BF4\u660E",paraId:1,tocIndex:3},{value:"timestamp",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"\u662F",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"\u8981\u683C\u5F0F\u5316\u7684\u65F6\u95F4\u6233\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2",paraId:1,tocIndex:3},{value:"format",paraId:1,tocIndex:3},{value:"string",paraId:1,tocIndex:3},{value:"\u5426",paraId:1,tocIndex:3},{value:"'YYYY-MM-DD hh:mm:ss'",paraId:1,tocIndex:3},{value:"\u8981\u683C\u5F0F\u5316\u6210\u7684\u65E5\u671F\u65F6\u95F4\u683C\u5F0F\uFF0C\u9ED8\u8BA4\u4E3A ",paraId:1,tocIndex:3},{value:"'YYYY-MM-DD hh:mm:ss'",paraId:1,tocIndex:3},{value:"\u3002",paraId:1,tocIndex:3},{value:`\u7C7B\u578B\uFF1Astring
\u683C\u5F0F\u5316\u540E\u7684\u65E5\u671F\u65F6\u95F4\u5B57\u7B26\u4E32\u3002`,paraId:2,tocIndex:4}]},87512:function(f,a){a.Z=`import React, { useEffect, useState } from 'react';
import { formatTime } from 'hqhui';

const App: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(formatTime(Date.now(), 'YYYY\u5E74MM\u6708DD\u65E5 hh:mm:ss'));
  const [siteDate, setSiteDate] = useState<string>();

  useEffect(() => {
    // \u6307\u5B9A\u65F6\u95F4\u6233\u65F6\u95F4
    const timestamp=1673850986000 //2023-01-16 14:36:26
    const siteStr: string = formatTime(timestamp);
    setSiteDate(siteStr);
  }, []);

  useEffect(() => {
    // \u6BCF\u79D2\u66F4\u65B0\u4E00\u6B21\u65F6\u95F4
    const timer = setInterval(() => {
      const date = Date.now();
      const dateStr = formatTime(date, 'YYYY\u5E74MM\u6708DD\u65E5 hh:mm:ss');
      setCurrentDate(dateStr);
    }, 1000);
    return () => {
      clearInterval(timer);
    }
  }, []);

  const inputRef = React.createRef<HTMLInputElement>();
  const onFormatData = () => {
    const value = inputRef.current?.value;
    if (value) {
      const dateStr = formatTime(Number(value), 'YYYY\u5E74MM\u6708DD\u65E5 hh:mm:ss');
      setSiteDate(dateStr);
    }
  };

  return (
    <>
      \u5F53\u524D\u65F6\u95F4\uFF1A{currentDate}
      <hr />
      \u6307\u5B9A\u65F6\u95F4\u8F6C\u6362\uFF1A
      <input type="number" ref={inputRef} defaultValue={1673850986000} />
      &nbsp;<button type='button' onClick={onFormatData}>\u8F6C\u6362</button>&nbsp;
      {siteDate}
    </>
  );
};

export default App;
`}}]);
