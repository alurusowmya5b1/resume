//XMLHttpRequest
/*function json(file,callback) {

	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function() {
		if(xhr.readyState===4 && xhr.status==200)
		{
         callback(xhr.responseText);
		}
	}
	xhr.send(null);

}
json("data.json",function (text) {

 let d=JSON.parse(text);
 console.log(d);
 basics(d.BasicDetails);
 hobbie(d.Hobbies);
 edu(d.education);
 techskills(d.skills);
 carr(d.career);
 ach(d.achievements);
 descript(d.Description);
}
)*/
//fetch API
fetch("data.json")
.then(function(response) {
   return response.json();
})
.then(function(d) {
 console.log(d);
 basics(d.BasicDetails);
 hobbie(d.Hobbies);
 edu(d.education);
 techskills(d.skills);
 carr(d.career);
 ach(d.achievements);
 descript(d.Description);
})
var main=document.querySelector(".first");
var l=document.createElement("div");
l.classList.add("left");
l.setAttribute("id","nirula");
main.appendChild(l);

function basics(cse) {
   var i=document.createElement("img");
   i.src=cse.image;
   i.alt="profile photo";
   l.appendChild(i);
   var nam=document.createElement("h3");
   nam.textContent=cse.name;
   l.appendChild(nam);
   var em=document.createElement("h3");
   em.textContent=cse.email;
   l.appendChild(em);
   var ph=document.createElement("h3");
   ph.textContent=cse.phone;
   l.appendChild(ph);
   var addr=document.createElement("h3");
   addr.textContent=cse.address;
   l.appendChild(addr);
}
var r=document.createElement("div");
r.classList.add("right");
main.appendChild(r);
function edu(e){
 var e1=document.createElement("div");
 e1.classList.add("educa");
 r.appendChild(e1);
 var head=document.createElement("h2");
  head.textContent="Education";
  e1.appendChild(head);
  head.appendChild(document.createElement("HR"));
    for (var i = 0; i < e.length; i++) {
     var h=document.createElement("h2");
     h.textContent=e[i].course;
     e1.appendChild(h);
     var u=document.createElement("ul");
     e1.appendChild(u);
     var list=document.createElement("li");
     list.textContent=e[i].college;
     u.appendChild(list);
     var list2=document.createElement("li");
     list2.textContent=e[i].cgpa;
     list.appendChild(list2);

    }
}
function techskills(t){
var d=document.createElement("div");
d.textContent=" Technical skills";
 r.appendChild(d);
 d.appendChild(document.createElement("HR"));
 var tab=document.createElement("table");
  var row=" ";
  for(var i=0;i<t.length;i++){
  	row+="<tr><td>"+t[i].name+"</td><td>"+t[i].value+"</td></tr>";
  } 
  tab.innerHTML=row;
  d.appendChild(tab);
}
function carr(c1) {
 var obj=document.createElement("div");
 r.appendChild(obj);
 var h1=document.createElement("h1");
 h1.textContent="Career Objective";
 obj.appendChild(h1);
 h1.appendChild(document.createElement("HR"));
 var para=document.createElement("h3");
 para.textContent=c1.ca;
 obj.appendChild(para);
 para.setAttribute("id","xyz");
}
function ach(a){
  var obj=document.createElement("div");
 r.appendChild(obj);
 var h1=document.createElement("h1");
  h1.textContent="Achievements";
  obj.appendChild(h1);
  h1.appendChild(document.createElement("HR"));
  for(i in a){
   var u=document.createElement("ul");
   obj.appendChild(u);
   var l=document.createElement("li");
   l.textContent=a[i];
   u.appendChild(l);
   u.setAttribute("id","abc");
  }
  }
function descript(desc){
var obj=document.createElement("div");
 r.appendChild(obj);
 var h1=document.createElement("h1");
 h1.textContent="Description";
 obj.appendChild(h1);
 h1.appendChild(document.createElement("HR"));
 var para=document.createElement("h3");
 para.textContent=desc.des;
 obj.appendChild(para);
 para.setAttribute("id","x");
}
function hobbie(hb){
 var obj=document.createElement("div");
 l.appendChild(obj);
 var h1=document.createElement("h1");
  h1.textContent="Hobbies";
  obj.appendChild(h1);
  h1.appendChild(document.createElement("HR"));
  for(i in hb){
   var u=document.createElement("ul");
   obj.appendChild(u);
   var lis=document.createElement("li");
   lis.textContent=hb[i];
   u.appendChild(lis);
   u.setAttribute("id","s");
  }
}