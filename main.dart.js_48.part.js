((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
abj(d,e){return new B.vz(e,d,null)},
vz:function vz(d,e,f){this.w=d
this.b=e
this.a=f},
aPs(d){var x,w,v
switch(d.w.a){case 1:x=d.c
w=x!=null?new A.e7(0,x.gMb()):C.nJ
break
case 0:x=d.d
w=d.c
if(x!=null){v=w==null?null:w.gMb()
w=new A.dy(x,v==null?C.x:v)}else if(w==null)w=D.n9
break
default:w=null}return new B.iB(d.a,d.f,d.b,d.e,w)},
anz(d,e,f){var x,w,v,u,t,s,r=null
if(d==e)return d
x=d==null
if(!x&&e!=null){if(f===0)return d
if(f===1)return e}w=x?r:d.a
v=e==null
w=A.I(w,v?r:e.a,f)
u=x?r:d.b
u=A.aNu(u,v?r:e.b,f)
t=x?r:d.c
t=A.aIa(t,v?r:e.c,f)
s=x?r:d.d
s=A.aHQ(s,v?r:e.d,f)
x=x?r:d.e
x=A.dV(x,v?r:e.e,f)
x.toString
return new B.iB(w,u,t,s,x)},
b4u(d,e){return new B.a_8(d,e)},
iB:function iB(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a_8:function a_8(d,e){var _=this
_.b=d
_.d=_.c=null
_.e=$
_.w=_.r=_.f=null
_.z=_.y=_.x=$
_.Q=null
_.a=e},
aCo:function aCo(){},
aCp:function aCp(d){this.a=d},
aCq:function aCq(d,e,f){this.a=d
this.b=e
this.c=f},
wW:function wW(){},
i_:function i_(){},
lz:function lz(){},
Ey:function Ey(d,e,f,g,h){var _=this
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
Je:function Je(){},
aNw(d){var x,w,v,u=(d.B()>>>16&255)/255,t=(d.B()>>>8&255)/255,s=(d.B()&255)/255,r=Math.max(u,Math.max(t,s)),q=Math.min(u,Math.min(t,s)),p=r-q,o=d.B(),n=A.ce()
if(r===0)n.b=0
else if(r===u)n.b=60*C.d.bp((t-s)/p,6)
else if(r===t)n.b=60*((s-u)/p+2)
else if(r===s)n.b=60*((u-t)/p+4)
n.b=isNaN(n.aY())?0:n.aY()
x=n.aY()
w=(r+q)/2
v=q===r?0:A.F(p/(1-Math.abs(2*w-1)),0,1)
return new A.vx((o>>>24&255)/255,x,v,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[35],B)
D=c[85]
B.vz.prototype={
o2(d,e){return B.abj(e,this.w)},
ci(d){return!this.w.j(0,d.w)}}
B.iB.prototype={
Dx(d,e){return this.e.eI(d,e)},
gbW(){return this.e.gjT()},
gC8(){return this.d!=null},
d5(d,e){var x
$label0$0:{if(d instanceof A.bI){x=B.anz(B.aPs(d),this,e)
break $label0$0}if(y.m.b(d)){x=B.anz(d,this,e)
break $label0$0}x=this.NM(d,e)
break $label0$0}return x},
d6(d,e){var x
$label0$0:{if(d instanceof A.bI){x=B.anz(this,B.aPs(d),e)
break $label0$0}if(y.m.b(d)){x=B.anz(this,d,e)
break $label0$0}x=this.NN(d,e)
break $label0$0}return x},
j(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.T(e)!==A.z(x))return!1
return e instanceof B.iB&&J.e(e.a,x.a)&&J.e(e.b,x.b)&&J.e(e.c,x.c)&&A.cK(e.d,x.d)&&e.e.j(0,x.e)},
gv(d){var x=this,w=x.d
w=w==null?null:A.bM(w)
return A.R(x.a,x.b,x.c,x.e,w,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
Kx(d,e,f){var x=this.e.eI(new A.A(0,0,0+d.a,0+d.b),f).geP().a
x===$&&A.a()
return x.a.contains(e.a,e.b)},
AQ(d){return new B.a_8(this,d)}}
B.a_8.prototype={
ajs(d,e){var x,w,v,u=this
if(d.j(0,u.c)&&e==u.d)return
if(u.r==null){x=u.b
x=x.a!=null||x.b!=null}else x=!1
if(x){$.a3()
x=A.b_()
u.r=x
w=u.b.a
if(w!=null)x.r=w.gq()}x=u.b
w=x.b
if(w!=null){v=u.r
v.toString
v.sE5(w.XA(d,e))}w=x.d
if(w!=null){if(u.w==null){u.w=w.length
v=A.a5(new A.a0(w,new B.aCo(),A.a_(w).h("a0<1,PZ>")),y.C)
u.z=v}if(x.e.gh1()){w=A.a5(new A.a0(w,new B.aCp(d),A.a_(w).h("a0<1,A>")),y.D)
u.x=w}else{w=A.a5(new A.a0(w,new B.aCq(u,d,e),A.a_(w).h("a0<1,ll>")),y.s)
u.y=w}}w=x.e
if(!w.gh1())v=u.r!=null||u.w!=null
else v=!1
if(v)u.e=w.eI(d,e)
if(x.c!=null)u.f=w.ie(d,e)
u.c=d
u.d=e},
aiK(d,e,f){var x,w,v,u,t,s,r=this
if(r.w!=null){x=r.b.e
if(x.gh1()){w=0
for(;;){v=r.w
v.toString
if(!(w<v))break
v=r.x
v===$&&A.a()
v=v[w]
u=r.z
u===$&&A.a()
x.i5(d,v,u[w],f);++w}}else{x=d.a
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
s=t[w].dZ()
u=v.a(u).geP().a
u===$&&A.a()
u=u.a
u.toString
x.drawPath(u,s)
s.delete();++w}}}},
a8z(d){var x,w=this.b,v=w.e
if(v instanceof A.dw&&w.a!=null){x=v.a
if(x.a.geO()===255&&x.c===C.D)return d.cu(-(x.gdJ()/2))}return d},
aiG(d,e){var x,w=this,v=w.b.c
if(v==null)return
x=w.Q
if(x==null){x=w.a
x.toString
x=w.Q=v.vN(x)
v=x}else v=x
x=w.c
x.toString
v.ma(d,x,w.f,e)},
l(){var x=this.Q
if(x!=null)x.l()
this.NJ()},
jn(d,e,f){var x,w=this,v=f.e,u=e.a,t=e.b,s=new A.A(u,t,u+v.a,t+v.b),r=f.d
w.ajs(s,r)
w.aiK(d,s,r)
if(w.r!=null){v=w.b.e
if(v.gh1()){x=w.a8z(s)
u=w.r
u.toString
v.i5(d,x,u,r)}else{v=w.e
v===$&&A.a()
u=w.r
u.toString
d.jV(v,u)}}w.aiG(d,f)
w.b.e.i4(d,s,r)}}
B.wW.prototype={}
B.i_.prototype={
bI(){var x=A.m(this),w=y.b
return new B.Ey(A.E(x.h("i_.0"),w),A.E(y.l,w),this,C.a7,x.h("Ey<i_.0,i_.1>"))}}
B.lz.prototype={
giy(){var x=this.dj$
return new A.bh(x,A.m(x).h("bh<2>"))},
fA(){J.m3(this.giy(),this.gLU())},
bk(d){J.m3(this.giy(),d)},
zC(d,e){var x=this.dj$,w=x.i(0,e)
if(w!=null){this.nh(w)
x.D(0,e)}if(d!=null){x.n(0,e,d)
this.iu(d)}}}
B.Ey.prototype={
gV(){return this.$ti.h("lz<1,2>").a(A.aW.prototype.gV.call(this))},
bk(d){var x=this.p1
new A.bh(x,A.m(x).h("bh<2>")).ap(0,d)},
iF(d){this.p1.D(0,d.c)
this.jD(d)},
eW(d,e){this.oo(d,e)
this.Vg()},
cg(d){this.mB(d)
this.Vg()},
Vg(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.e
j.toString
x=k.$ti
x.h("i_<1,2>").a(j)
w=k.p2
v=y.b
k.p2=A.E(y.l,v)
u=k.p1
x=x.c
k.p1=A.E(x,v)
for(v=j.gNB(),t=v.length,s=0;s<t;++s){r=v[s]
q=j.X3(r)
p=q==null?null:q.a
o=u.i(0,r)
n=w.i(0,p)
if(n!=null)m=u.D(0,x.a(n.c))
else m=(o==null?null:o.e.a)==null?u.D(0,r):null
l=k.dH(m,q,r)
if(l!=null){k.p1.n(0,r,l)
if(p!=null)k.p2.n(0,p,l)}}new A.bh(u,A.m(u).h("bh<2>")).ap(0,k.gaqR())},
jd(d,e){this.$ti.h("lz<1,2>").a(A.aW.prototype.gV.call(this)).zC(d,e)},
kl(d,e){var x=this.$ti.h("lz<1,2>")
if(x.a(A.aW.prototype.gV.call(this)).dj$.i(0,e)===d)x.a(A.aW.prototype.gV.call(this)).zC(null,e)},
jj(d,e,f){var x=this.$ti.h("lz<1,2>").a(A.aW.prototype.gV.call(this))
if(x.dj$.i(0,e)===d)x.zC(null,e)
x.zC(d,f)}}
B.Je.prototype={
aP(d,e){return this.On(d,e)}}
var z=a.updateTypes([])
B.aCo.prototype={
$1(d){return d.h3()},
$S:526}
B.aCp.prototype={
$1(d){return this.a.de(d.b).cu(d.d)},
$S:527}
B.aCq.prototype={
$1(d){return this.a.b.e.eI(this.b.de(d.b).cu(d.d),this.c)},
$S:528};(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(B.vz,A.da)
w(B.iB,A.il)
w(B.a_8,A.zM)
v(A.bZ,[B.aCo,B.aCp,B.aCq])
w(B.Je,A.aj)
w(B.wW,B.Je)
v(A.o,[B.i_,B.lz])
w(B.Ey,A.aW)
x(B.Je,B.i_)})()
A.cf(b.typeUniverse,JSON.parse('{"vz":{"da":[],"b2":[],"aR":[],"f":[]},"iB":{"il":[]},"wW":{"i_":["1","2"],"aj":[],"f":[]},"Ey":{"aW":[],"b4":[],"U":[]}}'))
A.iN(b.typeUniverse,JSON.parse('{"wW":2,"Je":2}'))
var y={b:A.O("b4"),l:A.O("eN"),u:A.O("oE"),C:A.O("PZ"),s:A.O("ll"),D:A.O("A"),m:A.O("iB?")};(function constants(){D.n9=new A.eJ(C.x,C.x,C.x,C.x)
D.oY=new A.aw(4,0,4,0)
D.Dh=new A.M3(2,"outer")
D.OZ=new A.d(0,2)
D.T4=new A.Q4(1,"evenOdd")
D.P1=new A.d(0,4)})()};
(a=>{a["p43P/l02aoaO/c13uOghtrt101w="]=a.current})($__dart_deferred_initializers__);