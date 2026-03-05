((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
aSl(d,e,f){var x,w,v,u,t
if(f<=C.b.gaa(e))return C.b.gaa(d)
if(f>=C.b.gaq(e))return C.b.gaq(d)
x=C.b.auN(e,new A.aFI(f))
w=d[x]
v=x+1
u=d[v]
t=e[x]
t=B.I(w,u,(f-t)/(e[v]-t))
t.toString
return t},
b6a(d,e,f,g,h){var x,w,v=E.Sy(null,null,y.i)
v.N(0,e)
v.N(0,g)
x=B.a5(v,v.$ti.c)
x.$flags=1
w=x
x=B.a_(w).h("a0<1,G>")
x=B.a5(new B.a0(w,new A.aFa(d,e,f,g,h),x),x.h("az.E"))
x.$flags=1
return new A.auE(x,w)},
aO5(d,e,f){var x,w,v,u,t
if(d==e)return d
if(d==null)return e.aQ(f)
if(e==null)return d.aQ(1-f)
x=A.b6a(d.a,d.Gc(),e.a,e.Gc(),f)
w=B.qg(d.d,e.d,f)
w.toString
v=B.qg(d.e,e.e,f)
v.toString
u=f<0.5
t=u?d.f:e.f
u=u?d.c:e.c
return new A.j6(w,v,t,x.a,x.b,u)},
auE:function auE(d,e){this.a=d
this.b=e},
aFI:function aFI(d){this.a=d},
aFa:function aFa(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aaD:function aaD(){},
j6:function j6(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.a=g
_.b=h
_.c=i},
acD:function acD(d){this.a=d},
nY:function nY(d,e){this.a=d
this.b=e},
LC(d,e,f,g,h,i,j,k,l,m){var x,w,v=null
if(h==null)x=f!=null?new B.bI(f,v,v,v,v,v,C.J):v
else x=h
if(m!=null||k!=null){w=g==null?v:g.xk(k,m)
if(w==null)w=B.md(k,m)}else w=g
return new A.zi(e,d,l,x,j,w,C.w,i,v,v)},
qr:function qr(d,e){this.a=d
this.b=e},
ok:function ok(d,e){this.a=d
this.b=e},
rC:function rC(d,e){this.a=d
this.b=e},
zi:function zi(d,e,f,g,h,i,j,k,l,m){var _=this
_.r=d
_.w=e
_.x=f
_.y=g
_.z=h
_.Q=i
_.c=j
_.d=k
_.e=l
_.a=m},
U2:function U2(d,e){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=null
_.e=_.d=$
_.dW$=d
_.bm$=e
_.c=_.a=null},
asR:function asR(){},
asS:function asS(){},
asT:function asT(){},
asU:function asU(){},
asV:function asV(){},
asW:function asW(){},
asX:function asX(){},
asY:function asY(){},
aP3(){var x=new Float64Array(4)
x[3]=1
return new A.n3(x)},
n3:function n3(d){this.a=d}},D,E
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[41],A)
D=c[80]
E=c[53]
A.auE.prototype={}
A.aaD.prototype={
Gc(){var x,w,v,u=this.b
if(u!=null)return u
u=this.a.length
x=1/(u-1)
w=J.aNQ(u,y.i)
for(v=0;v<u;++v)w[v]=v*x
return w}}
A.j6.prototype={
XA(d,e){var x=this,w=x.d.S(e).a11(d),v=x.e.S(e).a11(d),u=x.Gc()
return B.aIC(w,v,x.a,u,x.f,null)},
aQ(d){var x=this,w=x.a,v=B.a_(w).h("a0<1,G>")
w=B.a5(new B.a0(w,new A.acD(d),v),v.h("az.E"))
return new A.j6(x.d,x.e,x.f,w,x.b,null)},
d5(d,e){var x=A.aO5(d,this,e)
return x},
d6(d,e){var x=A.aO5(this,d,e)
return x},
j(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.T(e)!==B.z(x))return!1
return e instanceof A.j6&&e.d.j(0,x.d)&&e.e.j(0,x.e)&&e.f===x.f&&B.cK(e.a,x.a)&&B.cK(e.b,x.b)},
gv(d){var x=this,w=B.bM(x.a),v=x.b
v=v==null?null:B.bM(v)
return B.R(x.d,x.e,x.f,x.c,w,v,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
k(d){var x=this,w=B.b(["begin: "+x.d.k(0),"end: "+x.e.k(0),"colors: "+B.k(x.a)],y.s),v=x.b
if(v!=null)w.push("stops: "+B.k(v))
w.push("tileMode: "+x.f.k(0))
return"LinearGradient("+C.b.b9(w,", ")+")"}}
A.nY.prototype={
eD(d){return B.qg(this.a,this.b,d)}}
A.qr.prototype={
eD(d){var x=B.ij(this.a,this.b,d)
x.toString
return x}}
A.ok.prototype={
eD(d){var x=B.d7(this.a,this.b,d)
x.toString
return x}}
A.rC.prototype={
eD(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.eZ(new Float64Array(3)),a3=new B.eZ(new Float64Array(3)),a4=A.aP3(),a5=A.aP3(),a6=new B.eZ(new Float64Array(3)),a7=new B.eZ(new Float64Array(3))
this.a.XJ(a2,a4,a6)
this.b.XJ(a3,a5,a7)
x=1-a8
w=a2.ms(x).W(0,a3.ms(a8))
v=a4.ms(x).W(0,a5.ms(a8))
u=new Float64Array(4)
t=new A.n3(u)
t.cn(v)
t.wS()
s=a6.ms(x).W(0,a7.ms(a8))
x=new Float64Array(16)
v=new B.aZ(x)
r=u[0]
q=u[1]
p=u[2]
o=u[3]
n=r+r
m=q+q
l=p+p
k=r*n
j=r*m
i=r*l
h=q*m
g=q*l
f=p*l
e=o*n
d=o*m
a0=o*l
a1=w.a
x[0]=1-(h+f)
x[1]=j+a0
x[2]=i-d
x[3]=0
x[4]=j-a0
x[5]=1-(k+f)
x[6]=g+e
x[7]=0
x[8]=i+d
x[9]=g-e
x[10]=1-(k+h)
x[11]=0
x[12]=a1[0]
x[13]=a1[1]
x[14]=a1[2]
x[15]=1
x=s.a
v.mr(x[0],x[1],x[2],1)
return v}}
A.zi.prototype={
ac(){return new A.U2(null,null)}}
A.U2.prototype={
lX(d){var x,w,v=this,u=y.K
v.CW=u.a(d.$3(v.CW,v.a.w,new A.asR()))
x=y.Z
v.cx=x.a(d.$3(v.cx,v.a.x,new A.asS()))
w=y.h
v.cy=w.a(d.$3(v.cy,v.a.y,new A.asT()))
v.db=w.a(d.$3(v.db,v.a.z,new A.asU()))
v.dx=y.E.a(d.$3(v.dx,v.a.Q,new A.asV()))
w=v.dy
v.a.toString
v.dy=x.a(d.$3(w,null,new A.asW()))
w=v.fr
v.a.toString
v.fr=y.e.a(d.$3(w,null,new A.asX()))
w=v.fx
v.a.toString
v.fx=u.a(d.$3(w,null,new A.asY()))},
J(d){var x,w,v,u,t,s,r,q=this,p=null,o=q.geh(),n=q.CW
n=n==null?p:n.a4(o.gq())
x=q.cx
x=x==null?p:x.a4(o.gq())
w=q.cy
w=w==null?p:w.a4(o.gq())
v=q.db
v=v==null?p:v.a4(o.gq())
u=q.dx
u=u==null?p:u.a4(o.gq())
t=q.dy
t=t==null?p:t.a4(o.gq())
s=q.fr
s=s==null?p:s.a4(o.gq())
r=q.fx
r=r==null?p:r.a4(o.gq())
return B.b8(n,q.a.r,C.l,p,u,w,v,p,t,x,s,r,p)}}
A.n3.prototype={
cn(d){var x=d.a,w=this.a,v=x[0]
w.$flags&2&&B.aH(w)
w[0]=v
w[1]=x[1]
w[2]=x[2]
w[3]=x[3]},
a2s(d){var x,w,v,u,t,s=d.a,r=s[0],q=s[4],p=s[8],o=0+r+q+p
if(o>0){x=Math.sqrt(o+1)
r=this.a
r.$flags&2&&B.aH(r)
r[3]=x*0.5
x=0.5/x
r[0]=(s[5]-s[7])*x
r[1]=(s[6]-s[2])*x
r[2]=(s[1]-s[3])*x}else{if(r<q)w=q<p?2:1
else w=r<p?2:0
v=(w+1)%3
u=(w+2)%3
r=w*3
q=v*3
p=u*3
x=Math.sqrt(s[r+w]-s[q+v]-s[p+u]+1)
t=this.a
t.$flags&2&&B.aH(t)
t[w]=x*0.5
x=0.5/x
t[3]=(s[q+u]-s[p+v])*x
t[v]=(s[r+v]+s[q+w])*x
t[u]=(s[r+u]+s[p+w])*x}},
wS(){var x,w,v,u=Math.sqrt(this.gwE())
if(u===0)return 0
x=1/u
w=this.a
v=w[0]
w.$flags&2&&B.aH(w)
w[0]=v*x
w[1]=w[1]*x
w[2]=w[2]*x
w[3]=w[3]*x
return u},
gwE(){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return w*w+v*v+u*u+t*t},
gF(d){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return Math.sqrt(w*w+v*v+u*u+t*t)},
ms(d){var x=new Float64Array(4),w=new A.n3(x)
w.cn(this)
x[3]=x[3]*d
x[2]=x[2]*d
x[1]=x[1]*d
x[0]=x[0]*d
return w},
ab(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=h[3],f=h[2],e=h[1],d=h[0],a0=a6.gazg(),a1=a0[3],a2=a0[2],a3=a0[1],a4=a0[0]
h=C.d.ab(g,a4)
x=C.d.ab(d,a1)
w=C.d.ab(e,a2)
v=C.d.ab(f,a3)
u=C.d.ab(g,a3)
t=C.d.ab(e,a1)
s=C.d.ab(f,a4)
r=C.d.ab(d,a2)
q=C.d.ab(g,a2)
p=C.d.ab(f,a1)
o=C.d.ab(d,a3)
n=C.d.ab(e,a4)
m=C.d.ab(g,a1)
l=C.d.ab(d,a4)
k=C.d.ab(e,a3)
j=C.d.ab(f,a2)
i=new Float64Array(4)
i[0]=h+x+w-v
i[1]=u+t+s-r
i[2]=q+p+o-n
i[3]=m-l-k-j
return new A.n3(i)},
j(d,e){var x,w,v
if(e==null)return!1
if(e instanceof A.n3){x=this.a
w=x[3]
v=e.a
x=w===v[3]&&x[2]===v[2]&&x[1]===v[1]&&x[0]===v[0]}else x=!1
return x},
gv(d){return B.bM(this.a)},
W(d,e){var x,w=new Float64Array(4),v=new A.n3(w)
v.cn(this)
x=e.a
w[0]=w[0]+x[0]
w[1]=w[1]+x[1]
w[2]=w[2]+x[2]
w[3]=w[3]+x[3]
return v},
Z(d,e){var x,w=new Float64Array(4),v=new A.n3(w)
v.cn(this)
x=e.a
w[0]=w[0]-x[0]
w[1]=w[1]-x[1]
w[2]=w[2]-x[2]
w[3]=w[3]-x[3]
return v},
k(d){var x=this.a
return B.k(x[0])+", "+B.k(x[1])+", "+B.k(x[2])+" @ "+B.k(x[3])}}
var z=a.updateTypes(["nY(@)","ok(@)","qr(@)","rC(@)"])
A.aFI.prototype={
$1(d){return d<=this.a},
$S:537}
A.aFa.prototype={
$1(d){var x=this,w=B.I(A.aSl(x.a,x.b,d),A.aSl(x.c,x.d,d),x.e)
w.toString
return w},
$S:538}
A.acD.prototype={
$1(d){var x=B.I(null,d,this.a)
x.toString
return x},
$S:68}
A.asR.prototype={
$1(d){return new A.nY(y.D.a(d),null)},
$S:z+0}
A.asS.prototype={
$1(d){return new A.ok(y.W.a(d),null)},
$S:z+1}
A.asT.prototype={
$1(d){return new B.mm(y.S.a(d),null)},
$S:209}
A.asU.prototype={
$1(d){return new B.mm(y.S.a(d),null)},
$S:209}
A.asV.prototype={
$1(d){return new A.qr(y.k.a(d),null)},
$S:z+2}
A.asW.prototype={
$1(d){return new A.ok(y.W.a(d),null)},
$S:z+1}
A.asX.prototype={
$1(d){return new A.rC(y.w.a(d),null)},
$S:z+3}
A.asY.prototype={
$1(d){return new A.nY(y.D.a(d),null)},
$S:z+0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.o,[A.auE,A.aaD,A.n3])
x(B.bZ,[A.aFI,A.aFa,A.acD,A.asR,A.asS,A.asT,A.asU,A.asV,A.asW,A.asX,A.asY])
w(A.j6,A.aaD)
x(B.ae,[A.nY,A.qr,A.ok,A.rC])
w(A.zi,B.ow)
w(A.U2,B.kJ)})()
B.cf(b.typeUniverse,JSON.parse('{"nY":{"ae":["h6?"],"ar":["h6?"],"ar.T":"h6?","ae.T":"h6?"},"qr":{"ae":["ad"],"ar":["ad"],"ar.T":"ad","ae.T":"ad"},"ok":{"ae":["cN"],"ar":["cN"],"ar.T":"cN","ae.T":"cN"},"rC":{"ae":["aZ"],"ar":["aZ"],"ar.T":"aZ","ae.T":"aZ"},"zi":{"S":[],"f":[]},"U2":{"X":["zi"]}}'))
var y=(function rtii(){var x=B.O
return{D:x("h6"),k:x("ad"),S:x("il"),W:x("cN"),s:x("n<j>"),w:x("aZ"),i:x("y"),K:x("nY?"),E:x("qr?"),h:x("mm?"),Z:x("ok?"),e:x("rC?")}})();(function constants(){D.ev=new B.bA(16,null,null,null)})()};
(a=>{a["YHZz3qXqa/TMKsnMD+6QxMoVkjg="]=a.current})($__dart_deferred_initializers__);