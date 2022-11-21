const mongoose =require("mongoose")
const Schema=mongoose.Schema;

//categories => field =>['type','color']
const categories_model=new Schema({
    type:{
        type: String,
        default:"investment"
    },
    color:{
        type:String ,
        default: "#f9c74f"
    }
})

//Transactions => field -> ['name','type','amount','date']
const transaction_model=new Schema({
    name:{
        type: String,
         default:"Anonymous"
    },
    type:{
        type: String,
        default:"Investment"
    },
    amount:{
        type: Number
    }
})

const Categories=mongoose.model('Categories',categories_model);
const Transaction=mongoose.model("Transaction",transaction_model);

exports.default=Transaction;
module.exports={
    Categories,
    Transaction
}