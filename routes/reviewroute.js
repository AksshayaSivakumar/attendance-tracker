const path=require('path');
const express=require('express');
const reviewController=require('../controllers/reviewcontroller');

const router=express.Router();


router.get('/get-form',reviewController.getForm);
router.post('/submit-review', reviewController.submitReview);
//router.get('/list-reviews', reviewController.listReviews);
router.get('/filter-reviews/:companyName', reviewController.filterReviewsByCompanyName);



module.exports=router;