((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
b_b(d,e,f,g){var w,v,u=new B.aa4(g,null,e,f)
if(d instanceof A.a6){w=$.a2
v=new A.a6(w,f.h("a6<0>"))
if(w!==C.a6)u=w.D0(u,f.h("0/"),x.K,x.j)
d.qA(new A.jB(v,2,null,u,d.$ti.h("@<1>").be(f).h("jB<1,2>")))
return v}return d.eu(new B.aa3(f),u,f)},
aa4:function aa4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aa3:function aa3(d){this.a=d},
aQH(){return new B.TW(A.b([],x.v),A.b([],x.l),A.b([],x.u))},
hU:function hU(){},
abL:function abL(d,e,f){this.a=d
this.b=e
this.c=f},
abM:function abM(d,e){this.a=d
this.b=e},
abI:function abI(d,e){this.a=d
this.b=e},
abH:function abH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abJ:function abJ(d){this.a=d},
abK:function abK(d,e){this.a=d
this.b=e},
TW:function TW(d,e,f){var _=this
_.a=d
_.b=e
_.e=_.d=_.c=null
_.f=!1
_.r=0
_.w=!1
_.x=f},
avZ:function avZ(d,e,f){var _=this
_.a=d
_.b=e
_.e=_.d=_.c=null
_.f=!1
_.r=0
_.w=!1
_.x=f},
hd:function hd(d,e,f){this.a=d
this.b=e
this.c=f},
abP:function abP(){this.b=this.a=null},
abQ:function abQ(d){this.a=d},
mE:function mE(){},
abR:function abR(){},
abS:function abS(){},
WS:function WS(){},
WR:function WR(){}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[39],B)
B.hU.prototype={
S(d){var w=new B.abP()
this.aar(d,new B.abL(this,d,w),new B.abM(this,w))
return w},
aar(d,e,f){var w,v,u,t,s,r={}
r.a=null
r.b=!1
w=new B.abI(r,f)
v=null
try{v=this.Cl(d)}catch(s){u=A.a5(s)
t=A.al(s)
w.$2(u,t)
return}v.bd(new B.abH(r,this,e,w),x.H).jR(w)},
xg(d,e,f,g){var w,v
if(e.a!=null){w=$.h_.nq$
w===$&&A.a()
w.a05(f,new B.abJ(e),g)
return}w=$.h_.nq$
w===$&&A.a()
v=w.a05(f,new B.abK(this,f),g)
if(v!=null)e.Nn(v)},
wJ(d,e){return B.aQH()},
wK(d,e){return B.aQH()},
k(d){return"ImageConfiguration()"}}
B.TW.prototype={}
B.avZ.prototype={}
B.hd.prototype={
apa(){var w=this.a,v=w.b
v===$&&A.a()
return new B.hd(A.Mz(v,w.c),this.b,this.c)},
C6(d){var w
if(d.a.C6(this.a)){w=this.b
w=w===w&&d.c==this.c}else w=!1
return w},
ga32(){var w=this.a,v=w.b
v===$&&A.a()
v=v.a
v===$&&A.a()
v=J.an(v.a.height())
w=w.b.a
w===$&&A.a()
return v*J.an(w.a.width())*4},
l(){this.a.l()},
k(d){var w=this.c
w=w!=null?w+" ":""
return w+this.a.k(0)+" @ "+A.jK(this.b)+"x"},
gv(d){return A.S(this.a,this.b,this.c,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d,e){var w=this
if(e==null)return!1
if(J.U(e)!==A.z(w))return!1
return e instanceof B.hd&&e.a===w.a&&e.b===w.b&&e.c==w.c}}
B.abP.prototype={
Nn(d){var w,v=this
v.a=d
w=v.b
if(w!=null){v.b=null
d.f=!0
C.b.ap(w,d.gvo())
v.a.f=!1}},
U(d){var w=this.a
if(w!=null)return w.U(d)
w=this.b;(w==null?this.b=A.b([],x.v):w).push(d)},
I(d){var w,v=this.a
if(v!=null)return v.I(d)
for(w=0;v=this.b,w<v.length;++w)if(v[w].j(0,d)){v=this.b
v.toString
C.b.i9(v,w)
break}},
gnz(){var w=this.a
return w==null?this:w}}
B.abQ.prototype={
l(){var w=this.a;--w.r
w.zf()
this.a=null}}
B.mE.prototype={
U(d){var w,v,u,t,s,r,q=this
if(q.w)A.a8(A.aF(y.a))
q.a.push(d)
s=q.c
if(s!=null)try{d.a.$2(s.apa(),!q.f)}catch(r){w=A.a5(r)
v=A.al(r)
q.a0t(A.bm("by a synchronously-called image listener"),w,v)}s=q.d
if(s!=null&&d.c!=null)try{d.c.$2(s.a,s.b)}catch(w){u=A.a5(w)
t=A.al(w)
if(!J.e(u,q.d.a))A.dl(new A.bX(u,t,"image resource service",A.bm(y.d),null,!1))}},
ao2(d){var w,v,u,t,s=this
if(s.w)A.a8(A.aF(y.a))
u=s.d
if(u!=null)try{d.$2(u.a,u.b)}catch(t){w=A.a5(t)
v=A.al(t)
if(!J.e(w,s.d.a))A.dl(new A.bX(w,v,"image resource service",A.bm(y.d),null,!1))}else if(s.c==null)s.b.push(d)},
ta(){if(this.w)A.a8(A.aF(y.a));++this.r
return new B.abQ(this)},
I(d){var w,v,u,t,s,r=this
if(r.w)A.a8(A.aF(y.a))
for(w=r.a,v=0;v<w.length;++v)if(w[v].j(0,d)){C.b.i9(w,v)
break}if(w.length===0){w=r.x
u=A.b(w.slice(0),A.a_(w))
for(t=u.length,s=0;s<u.length;u.length===t||(0,A.L)(u),++s)u[s].$0()
C.b.R(w)
r.zf()}},
zf(){var w,v=this
if(v.w||v.a.length!==0||v.r!==0)return
C.b.R(v.b)
w=v.c
if(w!=null)w.a.l()
v.c=null
v.w=!0},
ao7(d){if(this.w)A.a8(A.aF(y.a))
this.x.push(d)},
a0l(d){if(this.w)A.a8(A.aF(y.a))
C.b.D(this.x,d)},
Nr(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
if(j.w)A.a8(A.aF(y.a))
t=j.c
if(t!=null)t.a.l()
j.c=d
C.b.R(j.b)
t=j.a
if(t.length===0)return
s=A.a3(t,x.J)
for(t=s.length,r=d.a,q=r.c,p=d.b,o=d.c,n=0;n<s.length;s.length===t||(0,A.L)(s),++n){w=s[n]
try{m=r.b
m===$&&A.a()
l=new A.oa(m,q)
l.a7H(m,q)
w.aw8(new B.hd(l,p,o),!1)}catch(k){v=A.a5(k)
u=A.al(k)
j.a0t(A.bm("by an image listener"),v,u)}}},
pV(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this,l="image resource service"
m.d=new A.bX(e,h,l,d,f,g)
s=m.a
s=A.a3(new A.ch(new A.a0(s,new B.abR(),A.a_(s).h("a0<1,~(o,bi?)?>")),x.I),x.d)
r=m.b
C.b.N(s,r)
C.b.R(r)
w=!1
for(r=s.length,q=0;q<s.length;s.length===r||(0,A.L)(s),++q){v=s[q]
try{v.$2(e,h)
w=!0}catch(p){u=A.a5(p)
t=A.al(p)
if(!J.e(u,e)){o=A.bm("when reporting an error to an image listener")
n=$.l0
if(n!=null)n.$1(new A.bX(u,t,l,o,null,!1))}}}if(!w){s=m.d
s.toString
A.dl(s)}},
a0t(d,e,f){return this.pV(d,e,null,!1,f)},
ay0(d){var w,v,u,t
if(this.w)A.a8(A.aF(y.a))
w=this.a
if(w.length!==0){v=x.s
u=A.a3(new A.ch(new A.a0(w,new B.abS(),A.a_(w).h("a0<1,~(k2)?>")),v),v.h("E.E"))
for(w=u.length,t=0;t<u.length;u.length===w||(0,A.L)(u),++t)u[t].$1(d)}}}
B.WS.prototype={}
B.WR.prototype={}
var z=a.updateTypes(["~(en)","~(k2)"])
B.aa4.prototype={
$2(d,e){if(!this.a.b(d))throw A.i(d)
return this.c.$2(d,e)},
$S(){return this.d.h("0/(o,bi)")}}
B.aa3.prototype={
$1(d){return d},
$S(){return this.a.h("0(0)")}}
B.abL.prototype={
$2(d,e){this.a.xg(this.b,this.c,d,e)},
$S(){return A.m(this.a).h("~(hU.T,~(o,bi?))")}}
B.abM.prototype={
$3(d,e,f){return this.a1n(d,e,f)},
a1n(d,e,f){var w=0,v=A.v(x.H),u=this,t
var $async$$3=A.q(function(g,h){if(g===1)return A.r(h,v)
for(;;)switch(w){case 0:t=A.fp(null,x.P)
w=2
return A.D(t,$async$$3)
case 2:t=u.b
if(t.a==null)t.Nn(new B.avZ(A.b([],x.v),A.b([],x.l),A.b([],x.u)))
t=t.a
t.toString
t.pV(A.bm("while resolving an image"),e,null,!0,f)
return A.t(null,v)}})
return A.u($async$$3,v)},
$S(){return A.m(this.a).h("a1<~>(hU.T?,o,bi?)")}}
B.abI.prototype={
a1m(d,e){var w=0,v=A.v(x.H),u,t=this,s
var $async$$2=A.q(function(f,g){if(f===1)return A.r(g,v)
for(;;)switch(w){case 0:s=t.a
if(s.b){w=1
break}s.b=!0
t.b.$3(s.a,d,e)
case 1:return A.t(u,v)}})
return A.u($async$$2,v)},
$2(d,e){return this.a1m(d,e)},
$S:470}
B.abH.prototype={
$1(d){var w,v,u,t=this
t.a.a=d
try{t.c.$2(d,t.d)}catch(u){w=A.a5(u)
v=A.al(u)
t.d.$2(w,v)}},
$S(){return A.m(this.b).h("at(hU.T)")}}
B.abJ.prototype={
$0(){var w=this.a.a
w.toString
return w},
$S:153}
B.abK.prototype={
$0(){var w=this.a,v=this.b,u=w.wK(v,$.h_.gauc())
return u instanceof B.TW?w.wJ(v,$.h_.gaua()):u},
$S:153}
B.abR.prototype={
$1(d){return d.c},
$S:472}
B.abS.prototype={
$1(d){return d.b},
$S:473};(function aliases(){var w=B.mE.prototype
w.O1=w.U
w.a3X=w.ta
w.O2=w.I
w.a3W=w.zf})();(function installTearOffs(){var w=a._instance_1u
var v
w(v=B.mE.prototype,"gvo","U",0)
w(v,"gay_","ay0",1)})();(function inheritance(){var w=a.mixin,v=a.inheritMany,u=a.inherit
v(A.dF,[B.aa4,B.abL,B.abI])
v(A.bZ,[B.aa3,B.abM,B.abH,B.abR,B.abS])
v(A.o,[B.hU,B.WR,B.hd,B.WS,B.abQ])
v(A.dk,[B.abJ,B.abK])
u(B.mE,B.WR)
v(B.mE,[B.TW,B.avZ])
u(B.abP,B.WS)
w(B.WS,A.a7)
w(B.WR,A.a7)})()
var y={a:"Stream has been disposed.\nAn ImageStream is considered disposed once at least one listener has been added and subsequently all listeners have been removed and no handles are outstanding from the keepAlive method.\nTo resolve this error, maintain at least one listener on the stream, or create an ImageStreamCompleterHandle from the keepAlive method, or create a new stream for the image.",d:"by a synchronously-called image error listener"}
var x=(function rtii(){var w=A.O
return{J:w("en"),v:w("n<en>"),u:w("n<~()>"),l:w("n<~(o,bi?)>"),P:w("at"),K:w("o"),j:w("bi"),I:w("ch<~(o,bi?)>"),s:w("ch<~(k2)>"),H:w("~"),d:w("~(o,bi?)")}})()};
(a=>{a["Lb+7Hb1AZIjmpMSGQ7lbsjuc76M="]=a.current})($__dart_deferred_initializers__);