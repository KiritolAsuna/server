var fs=require('fs');
var express=require('express');
var student=require('./student');

var router=express.Router();
router.get('/index',function(req,res){
	student.find(function(err,students){
		if(err){
			res.status(500).send('404');
		}
		else{

			res.render('index.html',{
				students:students
			});

		}
	});
});
router.get('/new',function(req,res){
	

			res.render('new.html')
});
router.post('/new',function(req,res){
	student.save(req.body,function(err){
		if(err){
		 	 res.status(500).send('404');
		}
		else{
			res.redirect('/index');
		}
	});
});
router.get('/edit',function(req,res){
	student.findById(parseInt(req.query.id),function(err,students){
		if(err){
			res.status(500).send('404');
		}
		else{
	
			res.render('edit.html',{
				students : students
			});
		}
	});

		
});
router.post('/edit',function(req,res){
	student.updata(req.body,function(err){
		if(err){
		 	res.status(500).send('404');
		}
		else{
			res.redirect('/index');
		}
	});
});
router.get('/delete',function(req,res){
	student.delete(req.query.id,function(err){
		if(err){
		 	res.status(500).send('404');
		}
		else{
			res.redirect('/index');
		}
	});
});
 module.exports=router;