"use strict";(self.webpackChunkmy_strapi_project=self.webpackChunkmy_strapi_project||[]).push([[8317],{48317:(N,O,s)=>{s.d(O,{ProtectedEditPage:()=>ts});var a=s(92132),e=s(21272),m=s(38413),P=s(55356),i=s(85963),c=s(4198),g=s(94061),A=s(83997),D=s(30893),h=s(90151),L=s(68074),p=s(21610),t=s(2129),U=s(54514),B=s(46270),R=s(61535),r=s(79275),_=s(54894),d=s(17703),I=s(71389),v=s(12083),l=s(93236),n=s(1927),T=s(27551),Y=s(97146),J=s(15126),X=s(63299),E=s(67014),ds=s(59080),ls=s(14718),Es=s(82437),Ms=s(5790),ms=s(35223),Ps=s(5409),cs=s(74930),Ds=s(2600),Os=s(48940),gs=s(41286),As=s(56336),hs=s(13426),Ls=s(84624),vs=s(77965),fs=s(54257),Cs=s(71210),ps=s(51187),Us=s(39404),Is=s(58692),us=s(501),Ws=s(57646),Bs=s(23120),Rs=s(44414),Ts=s(25962),Ks=s(14664),js=s(42588),xs=s(90325),ys=s(62785),Ss=s(87443),zs=s(41032),Ns=s(22957),Ys=s(93179),Fs=s(73055),Vs=s(15747),$s=s(85306),Hs=s(26509),Qs=s(32058),Zs=s(81185),Gs=s(82261),Js=s(72810),Xs=s(18022),bs=s(17493);const q=v.Ik().shape({...Y.C,isActive:v.lc(),roles:v.YO().min(1,t.iW.required).required(t.iW.required)}),b=["email","firstname","lastname","username","isActive","roles"],ss=()=>{const{formatMessage:o}=(0,_.A)(),u=(0,d.W5)("/settings/users/:id")?.params?.id??"",{push:W}=(0,d.W6)(),M=(0,t.hN)(),{lockApp:V,unlockApp:$}=(0,t.MA)(),w=(0,l.p)(T.M,async()=>(await s.e(9616).then(s.bind(s,79616))).MagicLinkEE),{_unstableFormatAPIError:H,_unstableFormatValidationErrors:es}=(0,t.wq)(),k=(0,l.j)(n.s),{isLoading:os,allowedActions:{canUpdate:Q}}=(0,t.ec)({read:k.settings?.users.read??[],update:k.settings?.users.update??[]}),[ns]=(0,l.M)();(0,t.L4)();const{data:is,error:y,isLoading:rs}=(0,l.k)({id:u},{refetchOnMountOrArgChange:!0}),[S]=is?.users??[];if(e.useEffect(()=>{y&&(y.name==="UnauthorizedError"?(M({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}}),W("/")):M({type:"warning",message:{id:"notification.error",defaultMessage:H(y)}}))},[y,H,W,M]),rs||!w||os)return(0,a.jsxs)(m.g,{"aria-busy":"true",children:[(0,a.jsx)(t.x7,{name:"Users"}),(0,a.jsx)(P.Q,{primaryAction:(0,a.jsx)(i.$,{disabled:!0,startIcon:(0,a.jsx)(U.A,{}),type:"button",size:"L",children:o({id:"global.save",defaultMessage:"Save"})}),title:o({id:"app.containers.Users.EditPage.header.label-loading",defaultMessage:"Edit user"}),navigationAction:(0,a.jsx)(p.N,{as:I.k2,startIcon:(0,a.jsx)(B.A,{}),to:"/settings/users?pageSize=10&page=1&sort=firstname",children:o({id:"global.back",defaultMessage:"Back"})})}),(0,a.jsx)(c.s,{children:(0,a.jsx)(t.Bl,{})})]});const z={...r(S,b),roles:S.roles.map(({id:f})=>f),password:"",confirmPassword:""},_s=async(f,K)=>{V?.();const{confirmPassword:Z,password:j,...G}=f,C=await ns({id:u,...G,password:j===""?void 0:j});"error"in C&&(0,l.x)(C.error)?(C.error.name==="ValidationError"&&K.setErrors(es(C.error)),M({type:"warning",message:H(C.error)})):(M({type:"success",message:o({id:"notification.success.saved",defaultMessage:"Saved"})}),K.setValues({...r(f,b),password:"",confirmPassword:""})),$?.()};return(0,a.jsxs)(m.g,{children:[(0,a.jsx)(t.x7,{name:"Users"}),(0,a.jsx)(R.l1,{onSubmit:_s,initialValues:z,validateOnChange:!1,validationSchema:q,children:({errors:f,values:K,handleChange:Z,isSubmitting:j,dirty:G})=>(0,a.jsxs)(t.lV,{children:[(0,a.jsx)(P.Q,{primaryAction:(0,a.jsx)(i.$,{disabled:j||!Q?!0:!G,startIcon:(0,a.jsx)(U.A,{}),loading:j,type:"submit",size:"L",children:o({id:"global.save",defaultMessage:"Save"})}),title:o({id:"app.containers.Users.EditPage.header.label",defaultMessage:"Edit {name}"},{name:z.username||(0,n.g)(z?.firstname??"",z.lastname)}),navigationAction:(0,a.jsx)(p.N,{as:I.k2,startIcon:(0,a.jsx)(B.A,{}),to:"/settings/users?pageSize=10&page=1&sort=firstname",children:o({id:"global.back",defaultMessage:"Back"})})}),(0,a.jsxs)(c.s,{children:[S?.registrationToken&&(0,a.jsx)(g.a,{paddingBottom:6,children:(0,a.jsx)(w,{registrationToken:S.registrationToken})}),(0,a.jsxs)(A.s,{direction:"column",alignItems:"stretch",gap:7,children:[(0,a.jsx)(g.a,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,a.jsxs)(A.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,a.jsx)(D.o,{variant:"delta",as:"h2",children:o({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"Details"})}),(0,a.jsx)(h.x,{gap:5,children:as.map(C=>C.map(x=>(0,a.jsx)(L.E,{...x.size,children:(0,a.jsx)(t.ah,{...x,disabled:!Q,error:f[x.name],onChange:Z,value:K[x.name]})},x.name)))})]})}),(0,a.jsx)(g.a,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,a.jsxs)(A.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,a.jsx)(D.o,{variant:"delta",as:"h2",children:o({id:"global.roles",defaultMessage:"User's role"})}),(0,a.jsx)(h.x,{gap:5,children:(0,a.jsx)(L.E,{col:6,xs:12,children:(0,a.jsx)(T.S,{disabled:!Q,error:f.roles,onChange:Z,value:K.roles})})})]})})]})]})]})})]})},as=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.username.label",defaultMessage:"Username"},name:"username",placeholder:{id:"Auth.form.username.placeholder",defaultMessage:"e.g. Kai_Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"global.password",defaultMessage:"Password"},name:"password",type:"password",size:{col:6,xs:12},autoComplete:"new-password"},{intlLabel:{id:"Auth.form.confirmPassword.label",defaultMessage:"Password confirmation"},name:"confirmPassword",type:"password",size:{col:6,xs:12},autoComplete:"new-password"}],[{intlLabel:{id:"Auth.form.active.label",defaultMessage:"Active"},name:"isActive",type:"bool",size:{col:6,xs:12}}]],ts=()=>{const o=(0,t.hN)(),F=(0,l.j)(n.s),{isLoading:u,allowedActions:{canRead:W,canUpdate:M}}=(0,t.ec)({read:F.settings?.users.read??[],update:F.settings?.users.update??[]}),{state:V}=(0,d.zy)(),$=V?.from??"/";return e.useEffect(()=>{u||!W&&!M&&o({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}})},[u,W,M,o]),u?(0,a.jsx)(t.Bl,{}):!W&&!M?(0,a.jsx)(d.rd,{to:$}):(0,a.jsx)(ss,{})}},27551:(N,O,s)=>{s.d(O,{M:()=>p,S:()=>t,a:()=>L});var a=s(92132),e=s(54894),m=s(93236),P=s(88353),i=s(56654),c=s(2129),g=s(90625),A=s(84795),D=s(79793),h=s(17493);const L=({children:r,target:_})=>{const d=(0,c.hN)(),{formatMessage:I}=(0,e.A)(),{copy:v}=(0,c.iD)(),l=I({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),n=async()=>{await v(_)&&d({type:"info",message:{id:"notification.link-copied"}})};return(0,a.jsx)(c.bQ,{endAction:(0,a.jsx)(P.K,{label:l,noBorder:!0,icon:(0,a.jsx)(g.A,{}),onClick:n}),title:_,titleEllipsis:!0,subtitle:r,icon:(0,a.jsx)("span",{style:{fontSize:32},children:"\u2709\uFE0F"}),iconBackground:"neutral100"})},p=({registrationToken:r})=>{const{formatMessage:_}=(0,e.A)(),d=`${window.location.origin}${(0,m.K)()}/auth/register?registrationToken=${r}`;return(0,a.jsx)(L,{target:d,children:_({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})})},t=({disabled:r,error:_,onChange:d,value:I})=>{const{isLoading:v,roles:l}=(0,h.u)(),{formatMessage:n}=(0,e.A)(),T=_?n({id:_,defaultMessage:_}):"",Y=n({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),J=n({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),X=n({id:"app.components.Select.placeholder",defaultMessage:"Select"});return(0,a.jsx)(i.KF,{id:"roles",disabled:r,error:T,hint:J,label:Y,name:"roles",onChange:E=>{d({target:{name:"roles",value:E}})},placeholder:X,startIcon:v?(0,a.jsx)(R,{}):void 0,value:I.map(E=>E.toString()),withTags:!0,required:!0,children:l.map(E=>(0,a.jsx)(i.fe,{value:E.id.toString(),children:n({id:`global.${E.code}`,defaultMessage:E.name})},E.id))})},U=(0,D.i7)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,B=D.Ay.div`
  animation: ${U} 2s infinite linear;
`,R=()=>(0,a.jsx)(B,{children:(0,a.jsx)(A.A,{})})},17493:(N,O,s)=>{s.d(O,{u:()=>i});var a=s(21272),e=s(2129),m=s(54894),P=s(93236);const i=(c={},g)=>{const{locale:A}=(0,m.A)(),D=(0,e.QM)(A,{sensitivity:"base"}),{data:h,error:L,isError:p,isLoading:t,refetch:U}=(0,P.z)(c,g);return{roles:a.useMemo(()=>[...h??[]].sort((R,r)=>D.compare(R.name,r.name)),[h,D]),error:L,isError:p,isLoading:t,refetch:U}}},97146:(N,O,s)=>{s.d(O,{C:()=>m});var a=s(2129),e=s(12083);const m={firstname:e.Yj().trim().required(a.iW.required),lastname:e.Yj(),email:e.Yj().email(a.iW.email).lowercase().required(a.iW.required),username:e.Yj().nullable(),password:e.Yj().min(8,a.iW.minLength).matches(/[a-z]/,"components.Input.error.contain.lowercase").matches(/[A-Z]/,"components.Input.error.contain.uppercase").matches(/\d/,"components.Input.error.contain.number"),confirmPassword:e.Yj().min(8,a.iW.minLength).oneOf([e.KR("password"),null],"components.Input.error.password.noMatch").when("password",(P,i)=>P?i.required(a.iW.required):i)}}}]);
