
const fs=require('fs'),vm=require('vm'),assert=require('assert');
const path=process.argv[2],cases=['Locket/1.0','VSCO/1.0','Unknown-App/1.0'];
const code=fs.readFileSync(path,'utf8');
const base={subscriber:{subscriptions:{},entitlements:{}}};
for(const ua of cases){
 let calls=[];const context={
   $request:{headers:{'User-Agent':ua}},
   $response:{body:JSON.stringify(base)},
   $done:(v)=>calls.push(v),
   console:{log:()=>{}},
 };
 try { vm.runInNewContext(code,context,{timeout:2000}); } catch(e) { throw new Error(`${path}: ${ua}: ${e.stack}`); }
 assert(calls.length===1,`${path}: ${ua} calls=${calls.length}`);
 let output=calls[0]||{};
 let out=output.body?JSON.parse(output.body):base;
 const ent=Object.keys(out.subscriber.entitlements);
 if(path.includes('Locket_QuangMinh.js')){
  if(ua.includes('Locket')) assert(ent.includes('Gold'),`missing Gold ${ua}`);
  else assert(ent.length===0,`cross-app edit ${ua}: ${ent}`);
 }
 if(path.endsWith('/revenuecat.js')){
  if(ua.includes('Locket')||ua.includes('Unknown')) assert(ent.length===0,`generic cross-app edit ${ua}: ${ent}`);
  if(ua.includes('VSCO')) assert(ent.includes('membership'),`VSCO other mapping missing: ${ent}`);
 }
 console.log(path.split('/').pop(),ua,ent.length?ent.join(','):'unchanged');
}
