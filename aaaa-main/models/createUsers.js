const User =require("../db/db");
const bcrypt = require("bcryptjs");

const createUserts = async(username, email, password) => {
    try{
       const hashedPasswordc= await bcrypt.hash(password, 10) 
       await User.create(
            username,
            email,
            password= hashedPasswordc

            )
    }catch (error){
        throw error
    }
}



