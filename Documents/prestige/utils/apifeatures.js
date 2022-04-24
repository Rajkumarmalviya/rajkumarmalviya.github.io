class ApiFeatures{
    constructor(query,queryStr){
        this.query=query;
        this.queryStr=queryStr
    }
    search(){
        const keyword = this.queryStr.keyword ? {
            name:{
                $regex:this.queryStr.keyword,
                $options:"i",

            }
        }:{};

        
        this.query = this.query.find({...keyword});
        return this;
    }

    filter(){
         const queryCopy ={...this.queryStr}

      // removing some fields from catagory 
         const removeFields = ["keyword","page","limit"];
         removeFields.forEach(key=>delete queryCopy[key]);
         
         // filter for Price and Ratings
          
let queryStr=JSON.stringify(queryCopy);
queryStr=queryStr.replace(/\b(gt|gte|lt|lte)\b/g,(key) =>`$${key}`);



this.query=this.query.find(JSON.parse(queryStr));



         return this;

    } 

    pagination(resultperPage){
const currentPage = Number(this.queryStr.page)||1;// 50-10

const skip = resultperPage*(currentPage-1);

this.query=this.query.limit(resultperPage).skip(skip);
return this ;  
}
};

module.exports = ApiFeatures