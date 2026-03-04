((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
aNv(d){var x,w,v=new A.aZ(new Float64Array(16))
v.dq()
for(x=d.length-1;x>0;--x){w=d[x]
if(w!=null)w.rl(d[x-1],v)}return v},
a9G(d,e,f,g){var x,w
if(d==null||e==null)return null
if(d===e)return d
x=d.z
w=e.z
if(x<w){g.push(e.r)
return B.a9G(d,e.r,f,g)}else if(x>w){f.push(d.r)
return B.a9G(d.r,e,f,g)}f.push(d.r)
g.push(e.r)
return B.a9G(d.r,e.r,f,g)},
vS:function vS(){this.d=this.a=null},
Br:function Br(d,e,f,g,h,i){var _=this
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
R3:function R3(d,e,f,g){var _=this
_.m=d
_.P=null
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
R_:function R_(d,e,f,g,h,i,j,k){var _=this
_.m=d
_.P=e
_.aj=f
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
akI:function akI(d){this.a=d},
aIb(d,e,f,g){return new B.MQ(e,g,f,d,null)},
qH:function qH(d,e,f){this.e=d
this.c=e
this.a=f},
MQ:function MQ(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.x=f
_.c=g
_.a=h},
jO(d,e,f,g,h){return new B.zr(d,h,e,f,g,null)},
zr:function zr(d,e,f,g,h,i){var _=this
_.r=d
_.w=e
_.c=f
_.d=g
_.e=h
_.a=i},
U8:function U8(d,e){var _=this
_.z=null
_.e=_.d=_.Q=$
_.dY$=d
_.bm$=e
_.c=_.a=null},
atb:function atb(){},
vh(d){var x=d.G(y.D),w=x==null?null:x.w.c
return(w==null?C.cl:w).cz(d)},
aaM(){var x=0,w=A.v(y.H)
var $async$aaM=A.q(function(d,e){if(d===1)return A.r(e,w)
for(;;)switch(x){case 0:x=2
return A.D(C.aV.cF("HapticFeedback.vibrate","HapticFeedbackType.selectionClick",y.H),$async$aaM)
case 2:return A.t(null,w)}})
return A.u($async$aaM,w)}},D,E
A=c[0]
C=c[2]
B=a.updateHolder(c[42],B)
D=c[96]
E=c[83]
B.vS.prototype={
Tp(d){this.a=d},
Ve(d){if(this.a===d)this.a=null},
k(d){var x=A.bG(this),w=this.a!=null?"<linked>":"<dangling>"
return"<optimized out>#"+x+"("+w+")"}}
B.Br.prototype={
Hv(d){var x,w,v,u,t=this
if(t.R8){x=t.MV()
x.toString
t.p4=A.rJ(x)
t.R8=!1}if(t.p4==null)return null
w=new A.ky(new Float64Array(4))
w.y5(d.a,d.b,0,1)
x=t.p4.a4(w).a
v=x[0]
u=t.p1
return new A.d(v-u.a,x[1]-u.b)},
eo(d,e,f){var x,w=this
if(w.k3.a==null){if(w.k4)return w.ol(d,e.a_(0,w.ok),!0)
return!1}x=w.Hv(e)
if(x==null)return!1
return w.ol(d,x,!0)},
k_(d,e,f){return this.eo(d,e,f,y.K)},
MV(){var x,w
if(this.p3==null)return null
x=this.p2
w=A.oR(-x.a,-x.b,0)
x=this.p3
x.toString
w.dz(x)
return w},
abx(){var x,w,v,u,t,s,r=this
r.p3=null
x=r.k3.a
if(x==null)return
w=y.U
v=A.b([x],w)
u=A.b([r],w)
B.a9G(x,r,v,u)
t=B.aNv(v)
x.rl(null,t)
w=r.p1
t.dd(w.a,w.b,0,1)
s=B.aNv(u)
if(s.hX(s)===0)return
s.dz(t)
r.p3=s
r.R8=!0},
gri(){return!0},
hV(d){var x,w,v=this
if(v.k3.a==null&&!v.k4){v.p2=v.p3=null
v.R8=!0
v.sfU(null)
return}v.abx()
x=v.p3
w=y.q
if(x!=null){v.p2=v.ok
v.sfU(d.xc(x.a,w.a(v.x)))
v.j2(d)
d.eq()}else{v.p2=null
x=v.ok
v.sfU(d.xc(A.oR(x.a,x.b,0).a,w.a(v.x)))
v.j2(d)
d.eq()}v.R8=!0},
rl(d,e){var x=this.p3
if(x!=null)e.dz(x)
else{x=this.ok
e.dz(A.oR(x.a,x.b,0))}}}
B.R3.prototype={
spF(d){var x=this,w=x.m
if(w===d)return
w.d=null
x.m=d
w=x.P
if(w!=null)d.d=w
x.aw()},
gkH(){return!0},
bt(){var x=this
x.qx()
x.P=x.gu()
x.m.d=x.gu()},
aH(d,e){var x=this.ch,w=x.a,v=this.m
if(w==null)x.saD(A.acF(v,e))
else{y.A.a(w)
w.spF(v)
w.siK(e)}x=x.a
x.toString
d.nO(x,A.fe.prototype.geF.call(this),C.i)}}
B.R_.prototype={
spF(d){if(this.m===d)return
this.m=d
this.aw()},
sa2Y(d){if(this.P===d)return
this.P=d
this.aw()},
siK(d){if(this.aj.j(0,d))return
this.aj=d
this.aw()},
sauV(d){if(this.bJ.j(0,d))return
this.bJ=d
this.aw()},
sasm(d){if(this.a9.j(0,d))return
this.a9=d
this.aw()},
ae(){this.ch.saD(null)
this.mC()},
gkH(){return!0},
MQ(){var x=y.S.a(A.A.prototype.gaD.call(this))
x=x==null?null:x.MV()
if(x==null){x=new A.aZ(new Float64Array(16))
x.dq()}return x},
cf(d,e){if(this.m.a==null&&!this.P)return!1
return this.cE(d,e)},
cE(d,e){return d.vs(new B.akI(this),e,this.MQ())},
aH(d,e){var x,w=this,v=w.m.d,u=v==null?w.aj:w.bJ.Al(v).a_(0,w.a9.Al(w.gu())).X(0,w.aj),t=y.S
if(t.a(A.A.prototype.gaD.call(w))==null)w.ch.saD(new B.Br(w.m,w.P,e,u,A.F(y.p,y.M),A.af()))
else{x=t.a(A.A.prototype.gaD.call(w))
if(x!=null){x.k3=w.m
x.k4=w.P
x.p1=u
x.ok=e}}t=t.a(A.A.prototype.gaD.call(w))
t.toString
d.tr(t,A.fe.prototype.geF.call(w),C.i,D.Uy)},
cK(d,e){e.dz(this.MQ())}}
B.qH.prototype={
aK(d){var x=new B.R3(this.e,null,new A.aN(),A.af())
x.aJ()
x.saV(null)
return x},
aO(d,e){e.spF(this.e)}}
B.MQ.prototype={
aK(d){var x=new B.R_(this.e,this.f,this.x,E.dN,E.dN,null,new A.aN(),A.af())
x.aJ()
x.saV(null)
return x},
aO(d,e){e.spF(this.e)
e.sa2Y(this.f)
e.siK(this.x)
e.sauV(E.dN)
e.sasm(E.dN)}}
B.zr.prototype={
ac(){return new B.U8(null,null)}}
B.U8.prototype={
lX(d){this.z=y.b.a(d.$3(this.z,this.a.w,new B.atb()))},
Jy(){var x=this.gei(),w=this.z
w.toString
this.Q=new A.au(y.m.a(x),w,A.m(w).h("au<ar.T>"))},
J(d){var x=this.Q
x===$&&A.a()
return new A.cU(x,!1,this.a.r,null)}}
var z=a.updateTypes([])
B.akI.prototype={
$2(d,e){return this.a.uh(d,e)},
$S:16}
B.atb.prototype={
$1(d){return new A.ad(A.cp(d),null,y.t)},
$S:32};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.vS,A.o)
x(B.Br,A.fz)
w(A.kf,[B.R3,B.R_])
x(B.akI,A.dF)
w(A.aP,[B.qH,B.MQ])
x(B.zr,A.oz)
x(B.U8,A.ri)
x(B.atb,A.bZ)})()
A.cf(b.typeUniverse,JSON.parse('{"Br":{"fz":[],"eP":[]},"R3":{"H":[],"aH":["H"],"A":[],"ai":[]},"R_":{"H":[],"aH":["H"],"A":[],"ai":[]},"qH":{"aP":[],"aj":[],"f":[]},"MQ":{"aP":[],"aj":[],"f":[]},"zr":{"R":[],"f":[]},"U8":{"X":["zr"]}}'))
var y=(function rtii(){var x=A.O
return{m:x("bd<y>"),D:x("rj"),U:x("n<fz>"),A:x("Ci"),K:x("o"),t:x("ad<y>"),p:x("l"),S:x("Br?"),q:x("aqG?"),b:x("ad<y>?"),H:x("~"),M:x("~()")}})();(function constants(){D.h4=new A.la(A.aTg(),A.O("la<y>"))
D.WC=new A.I(48,48)
D.Uy=new A.B(-1/0,-1/0,1/0,1/0)})()};
(a=>{a["NJYg2h4ry9nXodcNNCO4fDALZr0="]=a.current})($__dart_deferred_initializers__);