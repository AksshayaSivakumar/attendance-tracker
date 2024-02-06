const path=require('path');
const sequelize = require("../util/database");
const Sequelize = require('sequelize')

const rootDir=require('../util/path');
const ReviewModel= require('../models/reviewmodel');
const SearchCompanyModel=require('../models/searchcompanymodel');


exports.getForm=async(req, res) =>{
    res.sendFile(path.join(rootDir,'public','companyreview.html'));
  }


exports.submitReview = async (req, res) => {
  try {
    
      const { companyName, pros, cons, ratingValue} = req.body;
      
      const [company,created]= await SearchCompanyModel.findOrCreate({ where: { name: companyName } });
      const review = await ReviewModel.create({pros, cons, ratingValue, companyId: company.id,name:company.name });
      res.redirect('/reviews/get-form');
     try{
        res.status(201).json({ success: true, review:review });
      }
      catch(err){
        console.log(err);
      }
  }
      catch(err)
      {
        console.log(err);
      }
      

      
    }

exports.filterReviewsByCompanyName = async (req, res) => {
  try {
      const companyName = req.params.companyName;
      console.log(companyName);
      const reviews = await ReviewModel.findAll({where:{name:companyName}})
          
      const summary=await ReviewModel.findOne({
        attributes:[
          'name',[sequelize.fn('AVG',sequelize.col('ratingValue')),'averageRating']
        ],
        where:{name:companyName}
      })
      //console.log(reviews)
      console.log(summary)
      res.status(200).json({ success: true, reviews, summary });
      
  }
   catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};