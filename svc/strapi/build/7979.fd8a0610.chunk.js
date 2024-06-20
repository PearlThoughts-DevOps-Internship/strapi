"use strict";(self.webpackChunkmy_strapi_project=self.webpackChunkmy_strapi_project||[]).push([[7979],{87979:(_s,Y,s)=>{s.d(Y,{ReviewWorkflowsCreatePage:()=>Q});var t=s(92132),l=s(21272),N=s(85963),h=s(83997),V=s(43064),A=s(30893),P=s(2129),k=s(54514),c=s(61535),z=s(54894),i=s(82437),H=s(17703),G=s(17493),$=s(82529),o=s(24491),I=s(93236),D=s(11266),r=s(45084),O=s(25524),J=s(17866),ls=s(35658),rs=s(56336),is=s(48940),Es=s(12083),ds=s(15126),Ms=s(63299),Ps=s(67014),Ds=s(59080),Os=s(79275),gs=s(14718),ms=s(5790),fs=s(35223),vs=s(5409),hs=s(74930),cs=s(2600),Ls=s(41286),Cs=s(13426),Ws=s(84624),Ts=s(77965),Rs=s(54257),As=s(71210),Is=s(51187),Bs=s(39404),Ks=s(58692),Us=s(501),ys=s(57646),ws=s(23120),us=s(44414),js=s(25962),xs=s(14664),ps=s(42588),Ss=s(90325),Fs=s(62785),Ys=s(87443),Ns=s(41032),Vs=s(22957),ks=s(93179),zs=s(73055),Hs=s(15747),Gs=s(85306),$s=s(26509),Js=s(32058),Qs=s(81185),Zs=s(82261),Xs=s(45865);const Q=()=>{const{formatMessage:a}=(0,z.A)(),{push:Z}=(0,H.W6)(),{_unstableFormatAPIError:X,_unstableFormatValidationErrors:b}=(0,P.wq)(),_=(0,i.wA)(),E=(0,P.hN)(),{collectionTypes:B,singleTypes:K,isLoading:L}=(0,$.u)(),{isLoading:g,meta:U,workflows:m,createWorkflow:q}=(0,J.u)(),{isLoading:C,roles:y}=(0,G.u)(),f=(0,i.d4)(o.s),ss=(0,i.d4)(o.a),n=(0,i.d4)(o.b),w=(0,i.d4)(o.c),[u,d]=l.useState(null),{isLoading:j,getFeature:ts}=(0,I.m)(),[os,es]=l.useState(),[x,W]=l.useState({}),v=ts("review-workflows"),p=v?.[O.C],M=v?.[O.a],S=m?.flatMap(e=>e.contentTypes),F=async()=>{W({});try{const e=await q({data:n});if("error"in e){(0,I.x)(e.error)&&e.error.name==="ValidationError"&&es(b(e.error)),E({type:"warning",message:X(e.error)});return}E({type:"success",message:{id:"Settings.review-workflows.create.page.notification.success",defaultMessage:"Workflow successfully created"}}),Z(`/settings/review-workflows/${e.data.id}`)}catch{E({type:"warning",message:{id:"Settings.review-workflows.create.page.notification.error",defaultMessage:"An error occurred"}})}},as=async()=>{await F()},ns=()=>{W({})},T=(0,c.Wx)({enableReinitialize:!0,initialErrors:os,initialValues:n,async onSubmit(){const e=n.contentTypes?.some(R=>S?.includes(R));U&&p&&U?.workflowCount>=parseInt(p,10)?d("workflow"):n.stages&&M&&n.stages.length>=parseInt(M,10)?d("stage"):e?W(R=>({...R,hasReassignedContentTypes:!0})):F()},validate(e){return(0,o.v)({values:e,formatMessage:a})}});return(0,o.u)(O.R,o.i),l.useEffect(()=>{_((0,o.r)()),!g&&m&&_((0,o.d)({workflows:m})),L||_((0,o.e)({collectionTypes:B,singleTypes:K})),C||_((0,o.f)(y)),_((0,o.g)(L||C)),_((0,o.h)({name:""}))},[B,_,L,C,g,y,K,m]),l.useEffect(()=>{!g&&!j&&n.stages&&v?.[O.a]&&M&&n.stages.length>=parseInt(M,10)&&d("stage")},[j,g,v,n.stages,M]),l.useEffect(()=>{!f&&w?.length===0&&E({blockTransition:!0,type:"warning",message:a({id:"Settings.review-workflows.stage.permissions.noPermissions.description",defaultMessage:"You don\u2019t have the permission to see roles"})})},[a,f,w,E]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(D.D,{}),(0,t.jsx)(c.QI,{value:T,children:(0,t.jsxs)(c.lV,{onSubmit:T.handleSubmit,children:[(0,t.jsx)(D.H,{navigationAction:(0,t.jsx)(D.B,{href:"/settings/review-workflows"}),primaryAction:(0,t.jsx)(N.$,{startIcon:(0,t.jsx)(k.A,{}),type:"submit",size:"M",disabled:!ss,children:a({id:"global.save",defaultMessage:"Save"})}),title:a({id:"Settings.review-workflows.create.page.title",defaultMessage:"Create Review Workflow"}),subtitle:a({id:"Settings.review-workflows.page.subtitle",defaultMessage:"{count, plural, one {# stage} other {# stages}}"},{count:n?.stages?.length??0})}),(0,t.jsx)(D.R,{children:(0,t.jsx)(h.s,{alignItems:"stretch",direction:"column",gap:7,children:f?(0,t.jsx)(V.a,{children:a({id:"Settings.review-workflows.page.isLoading",defaultMessage:"Workflow is loading"})}):(0,t.jsxs)(h.s,{alignItems:"stretch",direction:"column",gap:7,children:[(0,t.jsx)(o.W,{}),(0,t.jsx)(o.S,{stages:T.values?.stages})]})})})]})}),(0,t.jsx)(P.TM.Root,{isConfirmButtonLoading:f,isOpen:Object.keys(x).length>0,onToggleDialog:ns,onConfirm:as,children:(0,t.jsx)(P.TM.Body,{children:(0,t.jsxs)(h.s,{direction:"column",gap:5,children:[x.hasReassignedContentTypes&&(0,t.jsx)(A.o,{textAlign:"center",variant:"omega",children:a({id:"Settings.review-workflows.page.delete.confirm.contentType.body",defaultMessage:"{count} {count, plural, one {content-type} other {content-types}} {count, plural, one {is} other {are}} already mapped to {count, plural, one {another workflow} other {other workflows}}. If you save changes, {count, plural, one {this} other {these}} {count, plural, one {content-type} other {{count} content-types}} will no more be mapped to the {count, plural, one {another workflow} other {other workflows}} and all corresponding information will be removed."},{count:S?.filter(e=>n.contentTypes?.includes(e)).length})}),(0,t.jsx)(A.o,{textAlign:"center",variant:"omega",children:a({id:"Settings.review-workflows.page.delete.confirm.confirm",defaultMessage:"Are you sure you want to save?"})})]})})}),(0,t.jsxs)(r.L.Root,{isOpen:u==="workflow",onClose:()=>d(null),children:[(0,t.jsx)(r.L.Title,{children:a({id:"Settings.review-workflows.create.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})}),(0,t.jsx)(r.L.Body,{children:a({id:"Settings.review-workflows.create.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]}),(0,t.jsxs)(r.L.Root,{isOpen:u==="stage",onClose:()=>d(null),children:[(0,t.jsx)(r.L.Title,{children:a({id:"Settings.review-workflows.create.page.stages.limit.title",defaultMessage:"You have reached the limit of stages for this workflow in your plan"})}),(0,t.jsx)(r.L.Body,{children:a({id:"Settings.review-workflows.create.page.stages.limit.body",defaultMessage:"Try deleting some stages or contact Sales to enable more stages."})})]})]})}}}]);
