const cds=require ('@sap/cds');

module.exports = (srv)=>
        {  
        srv.on ('hii',async(req)  =>{
                console.log("welcome")
                return `Hello ${req.data.input}!`
        } )
        
}
 