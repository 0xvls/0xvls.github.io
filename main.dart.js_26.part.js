((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,B={
aSz(d,e,f){var y,x,w,v,u,t,s=e.b
if(s<=0||e.a<=0||f.b<=0||f.a<=0)return C.Ie
switch(d.a){case 0:y=f
x=e
break
case 1:w=f.a
v=f.b
u=e.a
y=w/v>u/s?new A.J(u*v/s,v):new A.J(w,s*w/u)
x=e
break
case 2:w=f.a
v=f.b
u=e.a
x=w/v>u/s?new A.J(u,u*v/w):new A.J(s*w/v,s)
y=f
break
case 3:w=f.a
v=f.b
u=e.a
if(w/v>u/s){x=new A.J(u,u*v/w)
y=f}else{y=new A.J(w,s*w/u)
x=e}break
case 4:w=f.a
v=f.b
u=e.a
if(w/v>u/s){y=new A.J(u*v/s,v)
x=e}else{x=new A.J(s*w/v,s)
y=f}break
case 5:x=new A.J(Math.min(e.a,f.a),Math.min(s,f.b))
y=x
break
case 6:t=e.a/s
w=f.b
y=s>w?new A.J(w*t,w):e
s=f.a
if(y.a>s)y=new A.J(s,s/t)
x=e
break
default:x=null
y=null}return new B.NL(x,y)},
uH:function uH(d,e){this.a=d
this.b=e},
NL:function NL(d,e){this.a=d
this.b=e}},C
A=c[0]
D=c[2]
B=a.updateHolder(c[51],B)
C=c[55]
B.uH.prototype={
H(){return"BoxFit."+this.b}}
B.NL.prototype={}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(B.uH,A.jA)
y(B.NL,A.o)})();(function constants(){C.a4B=new B.uH(1,"contain")
C.eP=new B.uH(2,"cover")
C.nf=new B.uH(3,"fitWidth")
C.ng=new B.uH(6,"scaleDown")
C.Ie=new B.NL(D.H,D.H)})()};
(a=>{a["j1FP2lHcwTy1EPgHikjnDuSBjCc="]=a.current})($__dart_deferred_initializers__);