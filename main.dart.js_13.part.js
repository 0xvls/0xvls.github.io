((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
aSt(d,e,f){var x,w,v,u,t
if(f<=C.b.gaa(e))return C.b.gaa(d)
if(f>=C.b.gar(e))return C.b.gar(d)
x=C.b.auQ(e,new A.aFT(f))
w=d[x]
v=x+1
u=d[v]
t=e[x]
t=B.J(w,u,(f-t)/(e[v]-t))
t.toString
return t},
b6j(d,e,f,g,h){var x,w,v=E.SC(null,null,y.i)
v.N(0,e)
v.N(0,g)
x=B.a3(v,v.$ti.c)
x.$flags=1
w=x
x=B.a_(w).h("a0<1,G>")
x=B.a3(new B.a0(w,new A.aFl(d,e,f,g,h),x),x.h("aA.E"))
x.$flags=1
return new A.auP(x,w)},
aOg(d,e,f){var x,w,v,u,t
if(d==e)return d
if(d==null)return e.aQ(f)
if(e==null)return d.aQ(1-f)
x=A.b6j(d.a,d.Gc(),e.a,e.Gc(),f)
w=B.ql(d.d,e.d,f)
w.toString
v=B.ql(d.e,e.e,f)
v.toString
u=f<0.5
t=u?d.f:e.f
u=u?d.c:e.c
return new A.j7(w,v,t,x.a,x.b,u)},
auP:function auP(d,e){this.a=d
this.b=e},
aFT:function aFT(d){this.a=d},
aFl:function aFl(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aaG:function aaG(){},
j7:function j7(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.a=g
_.b=h
_.c=i},
acG:function acG(d){this.a=d},
o_:function o_(d,e){this.a=d
this.b=e},
LK(d,e,f,g,h,i,j,k,l,m){var x,w,v=null
if(h==null)x=f!=null?new B.bJ(f,v,v,v,v,v,C.K):v
else x=h
if(m!=null||k!=null){w=g==null?v:g.xn(k,m)
if(w==null)w=B.mc(k,m)}else w=g
return new A.zo(e,d,l,x,j,w,C.u,i,v,v)},
qw:function qw(d,e){this.a=d
this.b=e},
oo:function oo(d,e){this.a=d
this.b=e},
rI:function rI(d,e){this.a=d
this.b=e},
zo:function zo(d,e,f,g,h,i,j,k,l,m){var _=this
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
U4:function U4(d,e){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=null
_.e=_.d=$
_.dY$=d
_.bm$=e
_.c=_.a=null},
at_:function at_(){},
at0:function at0(){},
at1:function at1(){},
at2:function at2(){},
at3:function at3(){},
at4:function at4(){},
at5:function at5(){},
at6:function at6(){},
aPd(){var x=new Float64Array(4)
x[3]=1
return new A.n3(x)},
n3:function n3(d){this.a=d}},D,E
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[41],A)
D=c[80]
E=c[53]
A.auP.prototype={}
A.aaG.prototype={
Gc(){var x,w,v,u=this.b
if(u!=null)return u
u=this.a.length
x=1/(u-1)
w=J.aO0(u,y.i)
for(v=0;v<u;++v)w[v]=v*x
return w}}
A.j7.prototype={
XG(d,e){var x=this,w=x.d.S(e).a19(d),v=x.e.S(e).a19(d),u=x.Gc()
return B.aIM(w,v,x.a,u,x.f,null)},
aQ(d){var x=this,w=x.a,v=B.a_(w).h("a0<1,G>")
w=B.a3(new B.a0(w,new A.acG(d),v),v.h("aA.E"))
return new A.j7(x.d,x.e,x.f,w,x.b,null)},
d8(d,e){var x=A.aOg(d,this,e)
return x},
d9(d,e){var x=A.aOg(this,d,e)
return x},
j(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.U(e)!==B.z(x))return!1
return e instanceof A.j7&&e.d.j(0,x.d)&&e.e.j(0,x.e)&&e.f===x.f&&B.cK(e.a,x.a)&&B.cK(e.b,x.b)},
gv(d){var x=this,w=B.bN(x.a),v=x.b
v=v==null?null:B.bN(v)
return B.S(x.d,x.e,x.f,x.c,w,v,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
k(d){var x=this,w=B.b(["begin: "+x.d.k(0),"end: "+x.e.k(0),"colors: "+B.k(x.a)],y.s),v=x.b
if(v!=null)w.push("stops: "+B.k(v))
w.push("tileMode: "+x.f.k(0))
return"LinearGradient("+C.b.b9(w,", ")+")"}}
A.o_.prototype={
eD(d){return B.ql(this.a,this.b,d)}}
A.qw.prototype={
eD(d){var x=B.ik(this.a,this.b,d)
x.toString
return x}}
A.oo.prototype={
eD(d){var x=B.d8(this.a,this.b,d)
x.toString
return x}}
A.rI.prototype={
eD(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.f_(new Float64Array(3)),a3=new B.f_(new Float64Array(3)),a4=A.aPd(),a5=A.aPd(),a6=new B.f_(new Float64Array(3)),a7=new B.f_(new Float64Array(3))
this.a.XQ(a2,a4,a6)
this.b.XQ(a3,a5,a7)
x=1-a8
w=a2.ms(x).X(0,a3.ms(a8))
v=a4.ms(x).X(0,a5.ms(a8))
u=new Float64Array(4)
t=new A.n3(u)
t.cp(v)
t.wV()
s=a6.ms(x).X(0,a7.ms(a8))
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
A.zo.prototype={
ac(){return new A.U4(null,null)}}
A.U4.prototype={
lX(d){var x,w,v=this,u=y.K
v.CW=u.a(d.$3(v.CW,v.a.w,new A.at_()))
x=y.Z
v.cx=x.a(d.$3(v.cx,v.a.x,new A.at0()))
w=y.h
v.cy=w.a(d.$3(v.cy,v.a.y,new A.at1()))
v.db=w.a(d.$3(v.db,v.a.z,new A.at2()))
v.dx=y.E.a(d.$3(v.dx,v.a.Q,new A.at3()))
w=v.dy
v.a.toString
v.dy=x.a(d.$3(w,null,new A.at4()))
w=v.fr
v.a.toString
v.fr=y.e.a(d.$3(w,null,new A.at5()))
w=v.fx
v.a.toString
v.fx=u.a(d.$3(w,null,new A.at6()))},
J(d){var x,w,v,u,t,s,r,q=this,p=null,o=q.gei(),n=q.CW
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
return B.b9(n,q.a.r,C.l,p,u,w,v,p,t,x,s,r,p)}}
A.n3.prototype={
cp(d){var x=d.a,w=this.a,v=x[0]
w.$flags&2&&B.aG(w)
w[0]=v
w[1]=x[1]
w[2]=x[2]
w[3]=x[3]},
a2y(d){var x,w,v,u,t,s=d.a,r=s[0],q=s[4],p=s[8],o=0+r+q+p
if(o>0){x=Math.sqrt(o+1)
r=this.a
r.$flags&2&&B.aG(r)
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
t.$flags&2&&B.aG(t)
t[w]=x*0.5
x=0.5/x
t[3]=(s[q+u]-s[p+v])*x
t[v]=(s[r+v]+s[q+w])*x
t[u]=(s[r+u]+s[p+w])*x}},
wV(){var x,w,v,u=Math.sqrt(this.gwH())
if(u===0)return 0
x=1/u
w=this.a
v=w[0]
w.$flags&2&&B.aG(w)
w[0]=v*x
w[1]=w[1]*x
w[2]=w[2]*x
w[3]=w[3]*x
return u},
gwH(){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return w*w+v*v+u*u+t*t},
gF(d){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return Math.sqrt(w*w+v*v+u*u+t*t)},
ms(d){var x=new Float64Array(4),w=new A.n3(x)
w.cp(this)
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
gv(d){return B.bN(this.a)},
X(d,e){var x,w=new Float64Array(4),v=new A.n3(w)
v.cp(this)
x=e.a
w[0]=w[0]+x[0]
w[1]=w[1]+x[1]
w[2]=w[2]+x[2]
w[3]=w[3]+x[3]
return v},
a_(d,e){var x,w=new Float64Array(4),v=new A.n3(w)
v.cp(this)
x=e.a
w[0]=w[0]-x[0]
w[1]=w[1]-x[1]
w[2]=w[2]-x[2]
w[3]=w[3]-x[3]
return v},
k(d){var x=this.a
return B.k(x[0])+", "+B.k(x[1])+", "+B.k(x[2])+" @ "+B.k(x[3])}}
var z=a.updateTypes(["o_(@)","oo(@)","qw(@)","rI(@)"])
A.aFT.prototype={
$1(d){return d<=this.a},
$S:540}
A.aFl.prototype={
$1(d){var x=this,w=B.J(A.aSt(x.a,x.b,d),A.aSt(x.c,x.d,d),x.e)
w.toString
return w},
$S:541}
A.acG.prototype={
$1(d){var x=B.J(null,d,this.a)
x.toString
return x},
$S:80}
A.at_.prototype={
$1(d){return new A.o_(y.D.a(d),null)},
$S:z+0}
A.at0.prototype={
$1(d){return new A.oo(y.W.a(d),null)},
$S:z+1}
A.at1.prototype={
$1(d){return new B.ml(y.S.a(d),null)},
$S:168}
A.at2.prototype={
$1(d){return new B.ml(y.S.a(d),null)},
$S:168}
A.at3.prototype={
$1(d){return new A.qw(y.k.a(d),null)},
$S:z+2}
A.at4.prototype={
$1(d){return new A.oo(y.W.a(d),null)},
$S:z+1}
A.at5.prototype={
$1(d){return new A.rI(y.w.a(d),null)},
$S:z+3}
A.at6.prototype={
$1(d){return new A.o_(y.D.a(d),null)},
$S:z+0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.o,[A.auP,A.aaG,A.n3])
x(B.bZ,[A.aFT,A.aFl,A.acG,A.at_,A.at0,A.at1,A.at2,A.at3,A.at4,A.at5,A.at6])
w(A.j7,A.aaG)
x(B.ad,[A.o_,A.qw,A.oo,A.rI])
w(A.zo,B.oz)
w(A.U4,B.kJ)})()
B.cf(b.typeUniverse,JSON.parse('{"o_":{"ad":["h8?"],"ar":["h8?"],"ar.T":"h8?","ad.T":"h8?"},"qw":{"ad":["ae"],"ar":["ae"],"ar.T":"ae","ad.T":"ae"},"oo":{"ad":["cN"],"ar":["cN"],"ar.T":"cN","ad.T":"cN"},"rI":{"ad":["aZ"],"ar":["aZ"],"ar.T":"aZ","ad.T":"aZ"},"zo":{"R":[],"f":[]},"U4":{"X":["zo"]}}'))
var y=(function rtii(){var x=B.O
return{D:x("h8"),k:x("ae"),S:x("im"),W:x("cN"),s:x("n<j>"),w:x("aZ"),i:x("y"),K:x("o_?"),E:x("qw?"),h:x("ml?"),Z:x("oo?"),e:x("rI?")}})();(function constants(){D.et=new B.bC(16,null,null,null)})()};
(a=>{a["AVGVGWL2bYE3rMP3yzokpz74sgw="]=a.current})($__dart_deferred_initializers__);