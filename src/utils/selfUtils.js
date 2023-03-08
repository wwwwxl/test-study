// 将多维数组转一维
export const jsonToArray=(nodes)=> {
    var r=[];
    if (Array.isArray(nodes)) {
      for (var i=0, l=nodes.length; i<l; i++) {
        r.push(nodes[i]); // 取每项数据放入一个新数组
        if (Array.isArray(nodes[i]["children"])&&nodes[i]["children"].length>0)
         // 若存在children则递归调用，把数据拼接到新数组中，并且删除该children
          r = r.concat(jsonToArray(nodes[i]["children"]));
            delete nodes[i]["children"]
      }
    } 
    return r;
}