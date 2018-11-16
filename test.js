var express=require('express');
app=express();
var fs=require('fs');
app.engine('html',require('express-art-template'));
app.use('/node_modules/',express.static('./node_modules/'));
app.get('/',(req,res)=>{
	fs.readFile('./views/test.html',function(err,data){
		if(err){}
			else{
				res.end(data);
			}
	})
});
app.listen(5000,function(){
	console.log('running....');
})