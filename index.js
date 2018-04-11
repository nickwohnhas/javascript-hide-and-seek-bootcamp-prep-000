function getFirstSelector(selector){
var element = document.querySelector(selector)
return element
}
function nestedTarget(){
 var target = document.querySelector('#nested .target')
 return target
}
function increaseRankBy(n){
  var nodes = document.querySelectorAll('.ranked-list')
 var lists1 = nodes[0]
 var lists2 = nodes[1] 
 var children1 = lists1.children
 var children2 = lists2.children
 for (var i = 0; i<children1.length; i++){
   children1[i].innerHTML = parseInt(children1[i].innerHTML) + n 
   }
 for (var counter = 0;counter<children2.length;counter++){
   children2[counter].innerHTML = parseInt(children2[counter].innerHTML) + n
 }
}
function deepestChild(){
  var divlist = document.querySelector('#grand-node').querySelectorAll('div')
  for (var i = 0;i<divlist.length;i++){
    var deepestchild = divlist[i]
  }
  return deepestchild
}