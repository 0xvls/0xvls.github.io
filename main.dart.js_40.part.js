((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
abm(d,e){return new B.vF(e,d,null)},
vF:function vF(d,e,f){this.w=d
this.b=e
this.a=f},
aPC(d){var x,w,v
switch(d.w.a){case 1:x=d.c
w=x!=null?new A.e8(0,x.gMg()):C.nJ
break
case 0:x=d.d
w=d.c
if(x!=null){v=w==null?null:w.gMg()
w=new A.dz(x,v==null?C.x:v)}else if(w==null)w=D.na
break
default:w=null}return new B.iC(d.a,d.f,d.b,d.e,w)},
anD(d,e,f){var x,w,v,u,t,s,r=null
if(d==e)return d
x=d==null
if(!x&&e!=null){if(f===0)return d
if(f===1)return e}w=x?r:d.a
v=e==null
w=A.J(w,v?r:e.a,f)
u=x?r:d.b
u=A.aNF(u,v?r:e.b,f)
t=x?r:d.c
t=A.aIk(t,v?r:e.c,f)
s=x?r:d.d
s=A.aI0(s,v?r:e.d,f)
x=x?r:d.e
x=A.dW(x,v?r:e.e,f)
x.toString
return new B.iC(w,u,t,s,x)},
b4D(d,e){return new B.a_9(d,e)},
iC:function iC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a_9:function a_9(d,e){var _=this
_.b=d
_.d=_.c=null
_.e=$
_.w=_.r=_.f=null
_.z=_.y=_.x=$
_.Q=null
_.a=e},
aCz:function aCz(){},
aCA:function aCA(d){this.a=d},
aCB:function aCB(d,e,f){this.a=d
this.b=e
this.c=f},
x0:function x0(){},
i0:function i0(){},
lz:function lz(){},
EG:function EG(d,e,f,g,h){var _=this
_.p1=d
_.p2=e
_.c=_.b=_.a=_.CW=_.ay=null
_.d=$
_.e=f
_.r=_.f=null
_.w=g
_.z=_.y=null
_.Q=!1
_.as=!0
_.at=!1
_.$ti=h},
Jl:function Jl(){},
aNH(d){var x,w,v,u=(d.B()>>>16&255)/255,t=(d.B()>>>8&255)/255,s=(d.B()&255)/255,r=Math.max(u,Math.max(t,s)),q=Math.min(u,Math.min(t,s)),p=r-q,o=d.B(),n=A.ce()
if(r===0)n.b=0
else if(r===u)n.b=60*C.d.bq((t-s)/p,6)
else if(r===t)n.b=60*((s-u)/p+2)
else if(r===s)n.b=60*((u-t)/p+4)
n.b=isNaN(n.aY())?0:n.aY()
x=n.aY()
w=(r+q)/2
v=q===r?0:A.C(p/(1-Math.abs(2*w-1)),0,1)
return new A.vD((o>>>24&255)/255,x,v,w)},
aJ1(d,e,f){var x,w=null,v=E.aPK(d,!0,!0,!0),u=d.length
if(f==null)x=G.h_
else x=f
return new F.oL(v,e,C.az,!1,w,w,x,!1,w,u,C.M,w,w,C.G,C.at,w)}},D,F,G
J=c[1]
A=c[0]
C=c[2]
E=c[37]
B=a.updateHolder(c[34],B)
D=c[85]
F=c[48]
G=c[81]
B.vF.prototype={
o3(d,e){return B.abm(e,this.w)},
ck(d){return!this.w.j(0,d.w)}}
B.iC.prototype={
Dw(d,e){return this.e.eI(d,e)},
gbV(){return this.e.gjU()},
gC7(){return this.d!=null},
d8(d,e){var x
$label0$0:{if(d instanceof A.bJ){x=B.anD(B.aPC(d),this,e)
break $label0$0}if(y.m.b(d)){x=B.anD(d,this,e)
break $label0$0}x=this.NT(d,e)
break $label0$0}return x},
d9(d,e){var x
$label0$0:{if(d instanceof A.bJ){x=B.anD(this,B.aPC(d),e)
break $label0$0}if(y.m.b(d)){x=B.anD(this,d,e)
break $label0$0}x=this.NU(d,e)
break $label0$0}return x},
j(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.U(e)!==A.z(x))return!1
return e instanceof B.iC&&J.e(e.a,x.a)&&J.e(e.b,x.b)&&J.e(e.c,x.c)&&A.cK(e.d,x.d)&&e.e.j(0,x.e)},
gv(d){var x=this,w=x.d
w=w==null?null:A.bN(w)
return A.S(x.a,x.b,x.c,x.e,w,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
Kz(d,e,f){var x=this.e.eI(new A.B(0,0,0+d.a,0+d.b),f).geP().a
x===$&&A.a()
return x.a.contains(e.a,e.b)},
AQ(d){return new B.a_9(this,d)}}
B.a_9.prototype={
ajy(d,e){var x,w,v,u=this
if(d.j(0,u.c)&&e==u.d)return
if(u.r==null){x=u.b
x=x.a!=null||x.b!=null}else x=!1
if(x){$.a4()
x=A.b_()
u.r=x
w=u.b.a
if(w!=null)x.r=w.gq()}x=u.b
w=x.b
if(w!=null){v=u.r
v.toString
v.sE4(w.XG(d,e))}w=x.d
if(w!=null){if(u.w==null){u.w=w.length
v=A.a3(new A.a0(w,new B.aCz(),A.a_(w).h("a0<1,Q3>")),y.C)
u.z=v}if(x.e.gh4()){w=A.a3(new A.a0(w,new B.aCA(d),A.a_(w).h("a0<1,B>")),y.D)
u.x=w}else{w=A.a3(new A.a0(w,new B.aCB(u,d,e),A.a_(w).h("a0<1,lm>")),y.s)
u.y=w}}w=x.e
if(!w.gh4())v=u.r!=null||u.w!=null
else v=!1
if(v)u.e=w.eI(d,e)
if(x.c!=null)u.f=w.ih(d,e)
u.c=d
u.d=e},
aiQ(d,e,f){var x,w,v,u,t,s,r=this
if(r.w!=null){x=r.b.e
if(x.gh4()){w=0
for(;;){v=r.w
v.toString
if(!(w<v))break
v=r.x
v===$&&A.a()
v=v[w]
u=r.z
u===$&&A.a()
x.i7(d,v,u[w],f);++w}}else{x=d.a
v=y.u
w=0
for(;;){u=r.w
u.toString
if(!(w<u))break
u=r.y
u===$&&A.a()
u=u[w]
t=r.z
t===$&&A.a()
s=t[w].e1()
u=v.a(u).geP().a
u===$&&A.a()
u=u.a
u.toString
x.drawPath(u,s)
s.delete();++w}}}},
a8G(d){var x,w=this.b,v=w.e
if(v instanceof A.dx&&w.a!=null){x=v.a
if(x.a.geO()===255&&x.c===C.D)return d.cv(-(x.gdJ()/2))}return d},
aiM(d,e){var x,w=this,v=w.b.c
if(v==null)return
x=w.Q
if(x==null){x=w.a
x.toString
x=w.Q=v.vR(x)
v=x}else v=x
x=w.c
x.toString
v.ma(d,x,w.f,e)},
l(){var x=this.Q
if(x!=null)x.l()
this.NQ()},
jo(d,e,f){var x,w=this,v=f.e,u=e.a,t=e.b,s=new A.B(u,t,u+v.a,t+v.b),r=f.d
w.ajy(s,r)
w.aiQ(d,s,r)
if(w.r!=null){v=w.b.e
if(v.gh4()){x=w.a8G(s)
u=w.r
u.toString
v.i7(d,x,u,r)}else{v=w.e
v===$&&A.a()
u=w.r
u.toString
d.jW(v,u)}}w.aiM(d,f)
w.b.e.i6(d,s,r)}}
B.x0.prototype={}
B.i0.prototype={
bI(){var x=A.m(this),w=y.b
return new B.EG(A.F(x.h("i0.0"),w),A.F(y.l,w),this,C.a7,x.h("EG<i0.0,i0.1>"))}}
B.lz.prototype={
giA(){var x=this.dk$
return new A.bh(x,A.m(x).h("bh<2>"))},
fB(){J.m2(this.giA(),this.gLZ())},
bk(d){J.m2(this.giA(),d)},
zF(d,e){var x=this.dk$,w=x.i(0,e)
if(w!=null){this.ni(w)
x.D(0,e)}if(d!=null){x.n(0,e,d)
this.iw(d)}}}
B.EG.prototype={
gV(){return this.$ti.h("lz<1,2>").a(A.aW.prototype.gV.call(this))},
bk(d){var x=this.p1
new A.bh(x,A.m(x).h("bh<2>")).ap(0,d)},
iG(d){this.p1.D(0,d.c)
this.jE(d)},
eX(d,e){this.op(d,e)
this.Vn()},
cj(d){this.mB(d)
this.Vn()},
Vn(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.e
j.toString
x=k.$ti
x.h("i0<1,2>").a(j)
w=k.p2
v=y.b
k.p2=A.F(y.l,v)
u=k.p1
x=x.c
k.p1=A.F(x,v)
for(v=j.gNI(),t=v.length,s=0;s<t;++s){r=v[s]
q=j.X7(r)
p=q==null?null:q.a
o=u.i(0,r)
n=w.i(0,p)
if(n!=null)m=u.D(0,x.a(n.c))
else m=(o==null?null:o.e.a)==null?u.D(0,r):null
l=k.dH(m,q,r)
if(l!=null){k.p1.n(0,r,l)
if(p!=null)k.p2.n(0,p,l)}}new A.bh(u,A.m(u).h("bh<2>")).ap(0,k.gaqU())},
jf(d,e){this.$ti.h("lz<1,2>").a(A.aW.prototype.gV.call(this)).zF(d,e)},
kl(d,e){var x=this.$ti.h("lz<1,2>")
if(x.a(A.aW.prototype.gV.call(this)).dk$.i(0,e)===d)x.a(A.aW.prototype.gV.call(this)).zF(null,e)},
jl(d,e,f){var x=this.$ti.h("lz<1,2>").a(A.aW.prototype.gV.call(this))
if(x.dk$.i(0,e)===d)x.zF(null,e)
x.zF(d,f)}}
B.Jl.prototype={
aO(d,e){return this.Ot(d,e)}}
var z=a.updateTypes([])
B.aCz.prototype={
$1(d){return d.h6()},
$S:529}
B.aCA.prototype={
$1(d){return this.a.dh(d.b).cv(d.d)},
$S:530}
B.aCB.prototype={
$1(d){return this.a.b.e.eI(this.b.dh(d.b).cv(d.d),this.c)},
$S:531};(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(B.vF,A.db)
w(B.iC,A.im)
w(B.a_9,A.zT)
v(A.bZ,[B.aCz,B.aCA,B.aCB])
w(B.Jl,A.aj)
w(B.x0,B.Jl)
v(A.o,[B.i0,B.lz])
w(B.EG,A.aW)
x(B.Jl,B.i0)})()
A.cf(b.typeUniverse,JSON.parse('{"vF":{"db":[],"b2":[],"aR":[],"f":[]},"iC":{"im":[]},"x0":{"i0":["1","2"],"aj":[],"f":[]},"EG":{"aW":[],"b4":[],"T":[]}}'))
A.iP(b.typeUniverse,JSON.parse('{"x0":2,"Jl":2}'))
var y={b:A.O("b4"),l:A.O("e_"),u:A.O("oH"),C:A.O("Q3"),s:A.O("lm"),D:A.O("B"),m:A.O("iC?")};(function constants(){D.na=new A.eM(C.x,C.x,C.x,C.x)
D.p_=new A.ax(4,0,4,0)
D.Dm=new A.Mb(2,"outer")
D.P5=new A.d(0,2)
D.Tb=new A.Q9(1,"evenOdd")
D.P8=new A.d(0,4)})()};
(a=>{a["D9CqmDVB2hk/U+oOBgktByVlJUo="]=a.current})($__dart_deferred_initializers__);