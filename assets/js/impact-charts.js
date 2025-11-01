
(function(){
  function $(s,sc){return (sc||document).querySelector(s)}
  function csvEscape(v){ if(v==null) return ""; v=String(v); if(v.includes('"')||v.includes(',')||v.includes('\n')) return '"'+v.replace(/"/g,'""')+'"'; return v; }
  function toCSV(rows){ return rows.map(r=>r.map(csvEscape).join(",")).join("\n"); }

  async function loadJSON(url){ const r=await fetch(url,{cache:'no-cache'}); if(!r.ok) throw new Error('Failed '+url); return await r.json(); }

  async function boot(){
    var el=$("#impactChart"); if(!el) return;
    var ctx=el.getContext("2d");
    var cc = el.getAttribute("data-country"); // optional
    var data = await loadJSON("/data/global_metrics.json");
    var labels = data.series.map(s=>s.name);
    var wld = data.series.map(s=>s.wld);

    var datasets=[{label:"World", data:wld}];
    var countries = (cc? [cc] : ["IND","EGY","KEN"]).slice(0,3);
    countries.forEach(function(code){
      var arr = data.series.map(s=>s[code]);
      datasets.push({label:code, data:arr});
    });

    // draw
    HavvaCharts.drawGroupedBar(ctx, labels, datasets, {});

    // CSV export
    var rows=[["Indicator","Unit","World"].concat(countries)];
    data.series.forEach(function(s,i){
      rows.push([s.name, s.unit, s.wld].concat(countries.map(c=>s[c])));
    });
    $("#btnCsv").addEventListener("click", function(){
      var blob = new Blob([toCSV(rows)], {type:"text/csv;charset=utf-8"});
      var a = document.createElement("a"); a.href=URL.createObjectURL(blob); a.download="impact_"+(cc||"compare")+".csv"; a.click();
    });

    // PNG export
    $("#btnPng").addEventListener("click", function(){
      var url = el.toDataURL("image/png");
      var a=document.createElement("a"); a.href=url; a.download="impact_"+(cc||"compare")+".png"; a.click();
    });
  }

  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
