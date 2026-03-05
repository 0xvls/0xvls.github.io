((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
aNk(d){var x,w,v=new A.aZ(new Float64Array(16))
v.dn()
for(x=d.length-1;x>0;--x){w=d[x]
if(w!=null)w.rh(d[x-1],v)}return v},
a9D(d,e,f,g){var x,w
if(d==null||e==null)return null
if(d===e)return d
x=d.z
w=e.z
if(x<w){g.push(e.r)
return B.a9D(d,e.r,f,g)}else if(x>w){f.push(d.r)
return B.a9D(d.r,e,f,g)}f.push(d.r)
g.push(e.r)
return B.a9D(d.r,e.r,f,g)},
vM:function vM(){this.d=this.a=null},
Bj:function Bj(d,e,f,g,h,i){var _=this
_.k3=d
_.k4=e
_.ok=f
_.p1=g
_.p4=_.p3=_.p2=null
_.R8=!0
_.ay=_.ax=null
_.a=h
_.b=0
_.e=i
_.f=0
_.r=null
_.w=!0
_.y=_.x=null
_.z=0
_.as=_.Q=null},
R0:function R0(d,e,f,g){var _=this
_.m=d
_.R=null
_.m$=e
_.dy=f
_.b=_.fy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=g
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},
QX:function QX(d,e,f,g,h,i,j,k){var _=this
_.m=d
_.R=e
_.ai=f
_.bJ=g
_.a9=h
_.m$=i
_.dy=j
_.b=_.fy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=k
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},
akF:function akF(d){this.a=d},
aI1(d,e,f,g){return new B.MJ(e,g,f,d,null)},
qC:function qC(d,e,f){this.e=d
this.c=e
this.a=f},
MJ:function MJ(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.x=f
_.c=g
_.a=h},
jO(d,e,f,g,h){return new B.zk(d,h,e,f,g,null)},
zk:function zk(d,e,f,g,h,i){var _=this
_.r=d
_.w=e
_.c=f
_.d=g
_.e=h
_.a=i},
U5:function U5(d,e){var _=this
_.z=null
_.e=_.d=_.Q=$
_.dW$=d
_.bm$=e
_.c=_.a=null},
at0:function at0(){},
vb(d){var x=d.G(y.D),w=x==null?null:x.w.c
return(w==null?C.ck:w).cw(d)},
aaJ(){var x=0,w=A.v(y.H)
var $async$aaJ=A.q(function(d,e){if(d===1)return A.r(e,w)
for(;;)switch(x){case 0:x=2
return A.C(C.aV.cE("HapticFeedback.vibrate","HapticFeedbackType.selectionClick",y.H),$async$aaJ)
case 2:return A.t(null,w)}})
return A.u($async$aaJ,w)}},D,E
A=c[0]
C=c[2]
B=a.updateHolder(c[42],B)
D=c[97]
E=c[83]
B.vM.prototype={
Ti(d){this.a=d},
V7(d){if(this.a===d)this.a=null},
k(d){var x=A.bF(this),w=this.a!=null?"<linked>":"<dangling>"
return"<optimized out>#"+x+"("+w+")"}}
B.Bj.prototype={
Hv(d){var x,w,v,u,t=this
if(t.R8){x=t.MP()
x.toString
t.p4=A.rD(x)
t.R8=!1}if(t.p4==null)return null
w=new A.ky(new Float64Array(4))
w.y0(d.a,d.b,0,1)
x=t.p4.a4(w).a
v=x[0]
u=t.p1
return new A.d(v-u.a,x[1]-u.b)},
eo(d,e,f){var x,w=this
if(w.k3.a==null){if(w.k4)return w.oj(d,e.Z(0,w.ok),!0)
return!1}x=w.Hv(e)
if(x==null)return!1
return w.oj(d,x,!0)},
k_(d,e,f){return this.eo(d,e,f,y.K)},
MP(){var x,w
if(this.p3==null)return null
x=this.p2
w=A.oN(-x.a,-x.b,0)
x=this.p3
x.toString
w.dz(x)
return w},
abr(){var x,w,v,u,t,s,r=this
r.p3=null
x=r.k3.a
if(x==null)return
w=y.U
v=A.b([x],w)
u=A.b([r],w)
B.a9D(x,r,v,u)
t=B.aNk(v)
x.rh(null,t)
w=r.p1
t.dk(w.a,w.b,0,1)
s=B.aNk(u)
if(s.hV(s)===0)return
s.dz(t)
r.p3=s
r.R8=!0},
grf(){return!0},
hT(d){var x,w,v=this
if(v.k3.a==null&&!v.k4){v.p2=v.p3=null
v.R8=!0
v.sfS(null)
return}v.abr()
x=v.p3
w=y.q
if(x!=null){v.p2=v.ok
v.sfS(d.x9(x.a,w.a(v.x)))
v.j0(d)
d.eq()}else{v.p2=null
x=v.ok
v.sfS(d.x9(A.oN(x.a,x.b,0).a,w.a(v.x)))
v.j0(d)
d.eq()}v.R8=!0},
rh(d,e){var x=this.p3
if(x!=null)e.dz(x)
else{x=this.ok
e.dz(A.oN(x.a,x.b,0))}}}
B.R0.prototype={
spC(d){var x=this,w=x.m
if(w===d)return
w.d=null
x.m=d
w=x.R
if(w!=null)d.d=w
x.aw()},
gkH(){return!0},
bt(){var x=this
x.qu()
x.R=x.gu()
x.m.d=x.gu()},
aH(d,e){var x=this.ch,w=x.a,v=this.m
if(w==null)x.saD(A.acC(v,e))
else{y.A.a(w)
w.spC(v)
w.sjm(e)}x=x.a
x.toString
d.nN(x,A.fb.prototype.geF.call(this),C.h)}}
B.QX.prototype={
spC(d){if(this.m===d)return
this.m=d
this.aw()},
sa2S(d){if(this.R===d)return
this.R=d
this.aw()},
sjm(d){if(this.ai.j(0,d))return
this.ai=d
this.aw()},
sauR(d){if(this.bJ.j(0,d))return
this.bJ=d
this.aw()},
sasj(d){if(this.a9.j(0,d))return
this.a9=d
this.aw()},
ad(){this.ch.saD(null)
this.mC()},
gkH(){return!0},
MK(){var x=y.S.a(A.B.prototype.gaD.call(this))
x=x==null?null:x.MP()
if(x==null){x=new A.aZ(new Float64Array(16))
x.dn()}return x},
cd(d,e){if(this.m.a==null&&!this.R)return!1
return this.cD(d,e)},
cD(d,e){return d.vo(new B.akF(this),e,this.MK())},
aH(d,e){var x,w=this,v=w.m.d,u=v==null?w.ai:w.bJ.Ai(v).Z(0,w.a9.Ai(w.gu())).W(0,w.ai),t=y.S
if(t.a(A.B.prototype.gaD.call(w))==null)w.ch.saD(new B.Bj(w.m,w.R,e,u,A.E(y.p,y.M),A.ai()))
else{x=t.a(A.B.prototype.gaD.call(w))
if(x!=null){x.k3=w.m
x.k4=w.R
x.p1=u
x.ok=e}}t=t.a(A.B.prototype.gaD.call(w))
t.toString
d.tn(t,A.fb.prototype.geF.call(w),C.h,D.Ur)},
cJ(d,e){e.dz(this.MK())}}
B.qC.prototype={
aJ(d){var x=new B.R0(this.e,null,new A.aP(),A.ai())
x.aI()
x.saT(null)
return x},
aP(d,e){e.spC(this.e)}}
B.MJ.prototype={
aJ(d){var x=new B.QX(this.e,this.f,this.x,E.dP,E.dP,null,new A.aP(),A.ai())
x.aI()
x.saT(null)
return x},
aP(d,e){e.spC(this.e)
e.sa2S(this.f)
e.sjm(this.x)
e.sauR(E.dP)
e.sasj(E.dP)}}
B.zk.prototype={
ac(){return new B.U5(null,null)}}
B.U5.prototype={
lX(d){this.z=y.b.a(d.$3(this.z,this.a.w,new B.at0()))},
Jw(){var x=this.geh(),w=this.z
w.toString
this.Q=new A.aA(y.m.a(x),w,A.m(w).h("aA<ar.T>"))},
J(d){var x=this.Q
x===$&&A.a()
return new A.dk(x,!1,this.a.r,null)}}
var z=a.updateTypes([])
B.akF.prototype={
$2(d,e){return this.a.ud(d,e)},
$S:16}
B.at0.prototype={
$1(d){return new A.ae(A.cp(d),null,y.t)},
$S:33};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.vM,A.o)
x(B.Bj,A.fw)
w(A.kf,[B.R0,B.QX])
x(B.akF,A.dE)
w(A.aN,[B.qC,B.MJ])
x(B.zk,A.ow)
x(B.U5,A.rc)
x(B.at0,A.bZ)})()
A.cf(b.typeUniverse,JSON.parse('{"Bj":{"fw":[],"eO":[]},"R0":{"H":[],"aF":["H"],"B":[],"ah":[]},"QX":{"H":[],"aF":["H"],"B":[],"ah":[]},"qC":{"aN":[],"aj":[],"f":[]},"MJ":{"aN":[],"aj":[],"f":[]},"zk":{"S":[],"f":[]},"U5":{"X":["zk"]}}'))
var y=(function rtii(){var x=A.O
return{m:x("bg<y>"),D:x("rd"),U:x("n<fw>"),A:x("C9"),K:x("o"),t:x("ae<y>"),p:x("l"),S:x("Bj?"),q:x("aqy?"),b:x("ae<y>?"),H:x("~"),M:x("~()")}})();(function constants(){D.h7=new A.l9(A.aT8(),A.O("l9<y>"))
D.Wv=new A.J(48,48)
D.Ur=new A.A(-1/0,-1/0,1/0,1/0)})()};
(a=>{a["Ah4foxkj/lkedCFbxaWqHDhN780="]=a.current})($__dart_deferred_initializers__);