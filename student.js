var fs=require('fs');
var mysql=require('mysql');
var con=function(sql,rets){
	var connection=mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'root',
	database:'stu'
});
connection.connect();
connection.query(sql,function(err,ret,fileds){
	if(err){
		throw err;
	}
	else{
		rets(ret);
	}
	});

	connection.end();
}


exports.findById=function(id,callback){
	con('SELECT * FROM `students` WHERE ID='+id+'',function(ret){
 
    callback(null,ret[0]);

});
}

exports.find=function(callback){
con('SELECT * FROM `students`',function(ret){

callback(null,ret);
});


}
exports.save=function(student,callback){

con('INSERT INTO `students` values(null,"'+student.name+'","'+student.gender+'","'+student.age+'","'+student.hobbies+'")',function(ret){

callback(null);
});	

	
}
exports.updata=function(student,callback){
var id=parseInt(student.id);
con('UPDATE `students` SET name ="'+student.name+'",gender="'+student.gender+'",age="'+student.age+'",hobbies="'+student.hobbies+'"WHERE id='+id+'',function(ret){

callback(null);
});	

}
exports.delete=function(id,callback){
var  id=parseInt(id);
con('DELETE FROM `students` WHERE id='+id+'',function(ret){

callback(null);
});

}
