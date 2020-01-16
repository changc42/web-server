module.exports = {
    requireAuth: (req,res,next)=>{
        console.log("private route reached");
        next();
    },
    logger: (req,res,next)=>{
        console.log(req.method+' '+req.originalUrl+' '+new Date().toString());
            next();
    }
}