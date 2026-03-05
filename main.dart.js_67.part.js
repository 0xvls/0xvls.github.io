((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,D,A={anW:function anW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},anX:function anX(){},anY:function anY(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},anV:function anV(){},Sr:function Sr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},wU:function wU(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.rT$=d
_.cK$=e
_.aL$=f
_.a=null},Rb:function Rb(d,e,f,g,h,i,j){var _=this
_.dX=d
_.y1=e
_.y2=f
_.ea$=g
_.ar$=h
_.di$=i
_.b=_.dy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=j
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},
aPB(d,e){return new A.Sq(e,d,null)},
Sq:function Sq(d,e,f){this.f=d
this.d=e
this.a=f}}
B=c[0]
C=c[2]
D=c[49]
A=a.updateHolder(c[14],A)
A.anW.prototype={
a1u(d){var x=this.c
return d.An(this.d,x,x)},
k(d){var x=this
return"SliverGridGeometry("+C.b.b9(B.b(["scrollOffset: "+B.k(x.a),"crossAxisOffset: "+B.k(x.b),"mainAxisExtent: "+B.k(x.c),"crossAxisExtent: "+B.k(x.d)],y.x),", ")+")"}}
A.anX.prototype={}
A.anY.prototype={
a1C(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.d.kO(d/x)-1)
return 0},
acs(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
Dy(d){var x=this,w=x.a,v=C.e.bp(d,w)
return new A.anW(C.e.iT(d,w)*x.b,x.acs(v*x.c),x.d,x.e)},
Xd(d){var x
if(d===0)return 0
x=this.b
return x*(C.e.iT(d-1,this.a)+1)-(x-this.d)}}
A.anV.prototype={}
A.Sr.prototype={
MQ(d){var x=this,w=x.c,v=x.a,u=Math.max(0,d.w-w*(v-1))/v,t=u/x.d
return new A.anY(v,t+x.b,u+w,t,u,B.z6(d.x))}}
A.wU.prototype={
k(d){return"crossAxisOffset="+B.k(this.w)+"; "+this.a5n(0)}}
A.Rb.prototype={
eK(d){if(!(d.b instanceof A.wU))d.b=new A.wU(!1,null,null)},
sa1T(d){var x,w,v=this
if(v.dX===d)return
x=!0
if(B.z(d)===B.z(v.dX)){w=v.dX
if(w.a===d.a)if(w.b===d.b)if(w.c===d.c)x=w.d!==d.d}if(x)v.a5()
v.dX=d},
rr(d){var x=d.b
x.toString
x=y.t.a(x).w
x.toString
return x},
bt(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=null,a8=y.z.a(B.B.prototype.gX.call(a6)),a9=a6.y1
a9.R8=!1
x=a8.d
w=x+a8.z
v=w+a8.Q
u=a6.dX.MQ(a8)
t=u.b
s=t>1e-10?u.a*C.d.iT(w,t):0
r=isFinite(v)?u.a1C(v):a7
if(a6.ar$!=null){q=a6.aoN(s)
a6.vy(q,r!=null?a6.aoO(r):0)}else a6.vy(0,0)
p=u.Dy(s)
if(a6.ar$==null)if(!a6.Wd(s,p.a)){o=u.Xd(a9.gvx())
a6.dy=D.lx(a7,!1,a7,a7,o,0,0,o,a7)
a9.vW()
return}n=p.a
m=n+p.c
t=a6.ar$
t.toString
t=t.b
t.toString
l=y.c
t=l.a(t).b
t.toString
k=t-1
t=y.t
j=a7
for(;k>=s;--k){i=u.Dy(k)
h=i.c
g=a6.au3(a8.An(i.d,h,h))
f=g.b
f.toString
t.a(f)
e=i.a
f.a=e
f.w=i.b
if(j==null)j=g
m=Math.max(m,e+h)}if(j==null){h=a6.ar$
h.toString
h.h0(p.a1u(a8))
j=a6.ar$
h=j.b
h.toString
t.a(h)
h.a=n
h.w=p.b}h=j.b
h.toString
h=l.a(h).b
h.toString
k=h+1
h=B.m(a6).h("au.1")
f=r!=null
for(;;){if(!(!f||k<=r)){d=!1
break}i=u.Dy(k)
e=i.c
a0=a8.An(i.d,e,e)
a1=j.b
a1.toString
g=h.a(a1).aL$
if(g!=null){a1=g.b
a1.toString
a1=l.a(a1).b
a1.toString
a1=a1!==k}else a1=!0
if(a1){g=a6.au2(a0,j)
if(g==null){d=!0
break}}else g.h0(a0)
a1=g.b
a1.toString
t.a(a1)
a2=i.a
a1.a=a2
a1.w=i.b
m=Math.max(m,a2+e);++k
j=g}t=a6.di$
t.toString
t=t.b
t.toString
t=l.a(t).b
t.toString
a3=d?m:a9.Yi(a8,s,t,n,m)
a4=a6.vu(a8,Math.min(x,n),m)
a5=a6.Az(a8,n,m)
a6.dy=D.lx(a5,a3>a4||x>0||a8.f!==0,a7,a7,a3,a4,0,a3,a7)
if(a3===m)a9.R8=!0
a9.vW()}}
A.Sq.prototype={
aJ(d){var x=new A.Rb(this.f,y.v.a(d),B.E(y.e,y.g),0,null,null,B.ai())
x.aI()
return x},
aP(d,e){e.sa1T(this.f)},
JP(d,e,f,g,h){var x
this.a5o(d,e,f,g,h)
x=this.f.MQ(d).Xd(this.d.grJ())
return x}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.o,[A.anW,A.anX,A.anV])
w(A.anY,A.anX)
w(A.Sr,A.anV)
w(A.wU,D.fE)
w(A.Rb,D.p2)
w(A.Sq,D.ng)})()
B.cf(b.typeUniverse,JSON.parse('{"wU":{"fE":[],"eK":["H"],"k6":[],"cU":[]},"Rb":{"p2":[],"dc":[],"au":["H","fE"],"B":[],"ah":[],"au.1":"fE","au.0":"H"},"Sq":{"ng":[],"aj":[],"f":[]}}'))
var y={x:B.O("n<j>"),g:B.O("H"),z:B.O("jr"),t:B.O("wU"),v:B.O("tq"),c:B.O("fE"),e:B.O("l")}};
(a=>{a["swH3EqHxqJjjflJ30LSea0joy0I="]=a.current})($__dart_deferred_initializers__);