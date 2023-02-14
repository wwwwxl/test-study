var obj={firstName:"zhang",lastName:'san'};
	
	var obj1=Object.defineProperties(obj,{fullName:{
		//设置内部属性相关特性
		//configurable:true,
		get:function(){
			return this.firstName+this.lastName;
		},set:function(data){
			str=data.split(" ")
			this.firstName=str[0];
			this.lastName=str[1];
		},
	}});
	
	obj.fullName="li si";
	console.log("obj.fullName = ",obj.fullName);
	console.log("obj = ",obj);
  	console.log("obj===obj1 为 ",obj===obj1);