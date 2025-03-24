import{c as Q,o as et,a as lt,t,i as l,b as c,s as G,d as Y,e as d,S as F,f as e,F as J,g as rt,h as it,j as W}from"./index.js";var st=t('<div class="card border-primary"><div class=card-header>About (<a target=_blank></a>)</div><div class=card-body><p>● After changing <b>Host</b> or <b>Port</b> the app must be restarted</p><p>● <b>Shoutrrr URL</b> provides notifications to Discord, Email, Gotify, Telegram and other services. <a href=https://containrrr.dev/shoutrrr/v0.8/ target=_blank>Link to documentation</a></p><p>● <b>Interfaces</b> - one or more, space separated</p><p>● <b>Timeout (seconds)</b> - time between scans</p><p>● <b>Args for arp-scan</b> - pass your own arguments to <code>arp-scan</code>. Enable <b>debug</b> log level to see resulting command. (Example: <code>-r 1</code>). See <a href=https://github.com/aceberg/WatchYourLAN/blob/main/docs/VLAN_ARP_SCAN.md target=_blank>docs</a> for more.</p><p>● <b>Arp Strings</b> - can setup scans for <code>vlans</code>, <code>docker0</code> and etcetera. See <a href=https://github.com/aceberg/WatchYourLAN/blob/main/docs/VLAN_ARP_SCAN.md target=_blank>docs</a> for more.</p><p>● <b>Trim History</b> - remove history after (hours)</p><p>● <b>Store History in DB</b> - if off, the History will be stored only in memory and will be lost on app restart. Though, it will keep the app DB smaller and InfluxDB is recommended for long term History storage</p><p>● <b>PG Connect URL</b> - address to connect to PostgreSQL DB. (Example: <code>postgres://username:password@192.168.0.1:5432/dbname?sslmode=disable</code>). Full list of URL parameters <a href=https://pkg.go.dev/github.com/lib/pq#hdr-Connection_String_Parameters target=_blank>here</a></p><p>● If you find this app useful, please, <a href=https://github.com/aceberg#donate target=_blank>donate</a></p><p>● Commission you own app (Golang, React/SolidJS). Contact <a href=https://github.com/aceberg target=_blank>here');function nt(){const[i,n]=Q(""),[a,s]=Q("");return et(async()=>{const r=await lt();n(r),s("https://github.com/aceberg/WatchYourLAN/releases/tag/"+r)}),(()=>{var r=st(),o=r.firstChild,p=o.firstChild,b=p.nextSibling;return l(b,i),c(()=>G(b,"href",a())),r})()}var at=t("<option value=dark selected>dark"),ot=t("<option value=light>light"),dt=t('<div class="card border-primary"><div class=card-header>Basic config</div><div class="card-body table-responsive"><form method=post><table class="table table-borderless"><tbody><tr><td>Host</td><td><input name=host type=text class=form-control></td></tr><tr><td>Port</td><td><input name=port type=text class=form-control></td></tr><tr><td>Theme</td><td><select name=theme class=form-select></select></td></tr><tr><td>Color mode</td><td><select name=color class=form-select></select></td></tr><tr><td>Local node-bootstrap URL</td><td><input name=node type=text class=form-control></td></tr><tr><td>Shoutrrr URL</td><td><textarea name=shout class=form-control style=width:100%; rows=3 wrap=soft></textarea></td></tr><tr><td><button type=submit class="btn btn-primary">Save</button></td><td><button type=button style=float:right; class="btn btn-info">Test notification</button></td><td>'),ct=t("<option selected>"),pt=t("<option>"),bt=t("<option value=dark>dark"),ht=t("<option value=light selected>light");function ft(){const i=["cerulean","cosmo","cyborg","darkly","emerald","flatly","grass","grayscale","journal","litera","lumen","lux","materia","minty","morph","ocean","pulse","quartz","sand","sandstone","simplex","sketchy","slate","solar","spacelab","superhero","united","vapor","wood","yeti","zephyr"],n=()=>{rt()};return(()=>{var a=dt(),s=a.firstChild,r=s.nextSibling,o=r.firstChild,p=o.firstChild,b=p.firstChild,_=b.firstChild,g=_.firstChild,f=g.nextSibling,P=f.firstChild,k=_.nextSibling,I=k.firstChild,v=I.nextSibling,B=v.firstChild,w=k.nextSibling,H=w.firstChild,x=H.nextSibling,R=x.firstChild,C=w.nextSibling,D=C.firstChild,S=D.nextSibling,E=S.firstChild,A=C.nextSibling,N=A.firstChild,L=N.nextSibling,U=L.firstChild,T=A.nextSibling,q=T.firstChild,u=q.nextSibling,j=u.firstChild,z=T.nextSibling,M=z.firstChild,V=M.nextSibling,O=V.firstChild;return G(o,"action",Y+"/api/config/"),l(R,d(J,{each:i,children:y=>d(F,{get when(){return y==e().Theme},get fallback(){return(()=>{var m=pt();return m.value=y,l(m,y),m})()},get children(){var m=ct();return m.value=y,l(m,y),m}})})),l(E,d(F,{get when(){return e().Color=="dark"},get fallback(){return[bt(),ht()]},get children(){return[at(),ot()]}})),l(j,()=>e().ShoutURL),O.$$click=n,c(()=>P.value=e().Host),c(()=>B.value=e().Port),c(()=>U.value=e().NodePath),a})()}it(["click"]);var mt=t('<div class="card border-primary"><div class=card-header>InfluxDB2 config</div><div class="card-body table-responsive"><form method=post><table class="table table-borderless"><tbody><tr><td>Enable</td><td><div class="form-check form-switch"></div></td></tr><tr><td>Address</td><td><input name=addr type=text class=form-control></td></tr><tr><td>Token</td><td><input name=token type=text class=form-control></td></tr><tr><td>Org</td><td><input name=org type=text class=form-control></td></tr><tr><td>Bucket</td><td><input name=bucket type=text class=form-control></td></tr><tr><td>Skip TLS verify</td><td><div class="form-check form-switch"></div></td></tr><tr><td><button type=submit class="btn btn-primary">Save</button></td><td>'),$t=t("<input class=form-check-input type=checkbox name=enable checked>"),_t=t("<input class=form-check-input type=checkbox name=enable>"),ut=t("<input class=form-check-input type=checkbox name=skip checked>"),gt=t("<input class=form-check-input type=checkbox name=skip>");function vt(){return(()=>{var i=mt(),n=i.firstChild,a=n.nextSibling,s=a.firstChild,r=s.firstChild,o=r.firstChild,p=o.firstChild,b=p.firstChild,_=b.nextSibling,g=_.firstChild,f=p.nextSibling,P=f.firstChild,k=P.nextSibling,I=k.firstChild,v=f.nextSibling,B=v.firstChild,w=B.nextSibling,H=w.firstChild,x=v.nextSibling,R=x.firstChild,C=R.nextSibling,D=C.firstChild,S=x.nextSibling,E=S.firstChild,A=E.nextSibling,N=A.firstChild,L=S.nextSibling,U=L.firstChild,T=U.nextSibling,q=T.firstChild;return G(s,"action",Y+"/api/config_influx/"),l(g,(()=>{var u=W(()=>!!e().InfluxEnable);return()=>u()?$t():_t()})()),l(q,(()=>{var u=W(()=>!!e().InfluxSkipTLS);return()=>u()?ut():gt()})()),c(()=>I.value=e().InfluxAddr),c(()=>H.value=e().InfluxToken),c(()=>D.value=e().InfluxOrg),c(()=>N.value=e().InfluxBucket),i})()}var xt=t('<div class="card border-primary"><div class=card-header>Prometheus config</div><div class="card-body table-responsive"><form method=post><table class="table table-borderless"><tbody><tr><td>Enable</td><td><div class="form-check form-switch"></div></td></tr><tr><td><button type=submit class="btn btn-primary">Save</button></td><td><a href=/metrics target=_blank>/metrics'),Ct=t("<input class=form-check-input type=checkbox name=enable checked>"),St=t("<input class=form-check-input type=checkbox name=enable>");function yt(){return(()=>{var i=xt(),n=i.firstChild,a=n.nextSibling,s=a.firstChild,r=s.firstChild,o=r.firstChild,p=o.firstChild,b=p.firstChild,_=b.nextSibling,g=_.firstChild;return G(s,"action",Y+"/api/config_prometheus/"),l(g,(()=>{var f=W(()=>!!e().PrometheusEnable);return()=>f()?Ct():St()})()),i})()}var kt=t("<option value=sqlite selected>sqlite"),wt=t("<option value=postgres>postgres"),At=t('<div class="card border-primary"><div class=card-header>Scan settings</div><div class="card-body table-responsive"><form method=post><table class="table table-borderless"><tbody><tr><td>Interfaces</td><td><input name=ifaces type=text class=form-control></td></tr><tr><td>Timeout (seconds)</td><td><input name=timeout type=number class=form-control></td></tr><tr><td>Args for arp-scan</td><td><input name=arpargs type=text class=form-control></td></tr><tr><td>Arp Strings</td><td><input name=arpstrs type=text class=form-control></td></tr><tr><td>Log level</td><td><select name=log class=form-select></select></td></tr><tr><td>Trim History (hours)</td><td><input name=trim type=number class=form-control></td></tr><tr><td>Store History in DB</td><td><div class="form-check form-switch"></div></td></tr><tr><td>Use DB</td><td><select name=usedb class=form-select></select></td></tr><tr><td>PG Connect URL</td><td><textarea name=pgconnect class=form-control style=width:100%; rows=3 wrap=soft></textarea></td></tr><tr><td><button type=submit class="btn btn-primary">Save</button></td><td>'),Lt=t("<input name=arpstrs type=text class=form-control>"),Tt=t("<option selected>"),Pt=t("<option>"),It=t("<input class=form-check-input type=checkbox name=histdb checked>"),Bt=t("<input class=form-check-input type=checkbox name=histdb>"),Ht=t("<option value=sqlite>sqlite"),Rt=t("<option value=postgres selected>postgres");function Dt(){return(()=>{var i=At(),n=i.firstChild,a=n.nextSibling,s=a.firstChild,r=s.firstChild,o=r.firstChild,p=o.firstChild,b=p.firstChild,_=b.nextSibling,g=_.firstChild,f=p.nextSibling,P=f.firstChild,k=P.nextSibling,I=k.firstChild,v=f.nextSibling,B=v.firstChild,w=B.nextSibling,H=w.firstChild,x=v.nextSibling,R=x.firstChild,C=R.nextSibling,D=C.firstChild,S=x.nextSibling,E=S.firstChild,A=E.nextSibling,N=A.firstChild,L=S.nextSibling,U=L.firstChild,T=U.nextSibling,q=T.firstChild,u=L.nextSibling,j=u.firstChild,z=j.nextSibling,M=z.firstChild,V=u.nextSibling,O=V.firstChild,y=O.nextSibling,m=y.firstChild,K=V.nextSibling,X=K.firstChild,Z=X.nextSibling,tt=Z.firstChild;return G(s,"action",Y+"/api/config_settings/"),l(C,d(J,{get each(){return e().ArpStrs},children:$=>(()=>{var h=Lt();return h.value=$,h})()}),D),l(N,d(J,{each:["debug","info","warn","error"],children:$=>d(F,{get when(){return $==e().LogLevel},get fallback(){return(()=>{var h=Pt();return h.value=$,l(h,$),h})()},get children(){var h=Tt();return h.value=$,l(h,$),h}})})),l(M,(()=>{var $=W(()=>!!e().HistInDB);return()=>$()?It():Bt()})()),l(m,d(F,{get when(){return e().UseDB=="sqlite"},get fallback(){return[Ht(),Rt()]},get children(){return[kt(),wt()]}})),l(tt,()=>e().PGConnect),c(()=>g.value=e().Ifaces),c(()=>I.value=e().Timeout),c(()=>H.value=e().ArpArgs),c(()=>q.value=e().TrimHist),i})()}var Et=t("<div class=row><div class=col-md><div class=mt-4></div></div><div class=col-md><div class=mt-4></div><div class=mt-4>");function Ut(){return(()=>{var i=Et(),n=i.firstChild,a=n.firstChild,s=n.nextSibling,r=s.firstChild,o=r.nextSibling;return l(n,d(ft,{}),a),l(a,d(Dt,{})),l(s,d(vt,{}),r),l(r,d(yt,{})),l(o,d(nt,{})),i})()}export{Ut as default};
