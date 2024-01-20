const path=require('path');
const express=require('express');
const attendanceController=require('../controllers/attendancecontroller');

const router=express.Router();




router.post('/postdate',attendanceController.postDate);





//router.get('/get-expense',databaseController.getExpenseDetails);
//router.post('/post-expense',databaseController.postExpenseDetails);

//router.delete('/delete-expense/:id',databaseController.deleteExpenseDetails);


module.exports=router;