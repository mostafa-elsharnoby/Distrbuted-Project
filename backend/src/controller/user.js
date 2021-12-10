const User = require('../models/user')

exports.getUser = (req,res) => {
    User.findById(req.user._id , (error,user) => {
        if(error) return res.status(400).json({ error })
        if(user){
                res.status(200).json({user})
            }
        })
}

exports.updateUser = async (req,res) => {
    /*User.findById(req.user._id,(error,user) => {
        const {
            firstName,
            lastName,
            email,
            password
        } = req.body;

        const updatedUser = new User({ 
            firstName,
            lastName,
            email,
            password,
        });

        updatedUser.save((error,data) => {
            if(error){
                return res.status(400).json({
                    message:'something went wrong'
                });
            }
            if(data){
                return res.status(201).json({
                    message: 'Profile updated successfully',
                })
            }
        })
    })*/

    const user = await User.findById(req.user._id)
    if(user){
        user.firstName = req.body.firstName || user.firstName
        user.lastName = req.body.lastName || user.lastName
        user.email = req.body.email || user.email
        if(req.body.password){
            user.password = req.body.password || user.passord
        }
        const updatedUser = await user.save()
        res.status(200).json({
            message: 'Profile updated successfully',
        })
    }
    
}