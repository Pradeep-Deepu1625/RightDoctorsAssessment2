const personService = require('../Service/personService');
const personCtrl = {
    //Method => GET : persons
    getPersons:async(req,res,nex)=>{
            try{
                const people = await personService.get();
                if(people){
                    res.render('index',{people})
                }else{
                    res.status(400)
                    res.send({error:"people not found...!"})
                }
            }
            catch(err){
                res.status(500)
                res.send(err)
            }
    },

    // Method => GET : To Display the create form.
    getCreateFrom:async(req,res)=>{
        try{
            res.render('create')
        }
        catch(err){
            res.status(500)
            res.send(err)
        }
    },
    //Method => post : to create new person.
    createPerson:async(req,res,nex)=>{
            try{
                    const filterByName = await personService.getByName({Name:{$eq:req.body.Name}});
                        if(filterByName){
                            res.render('personExists')
                        }else{
                            const createdPersonData = await personService.create(req.body)
                            res.redirect('/people')
                        }
            }
            catch(err){
                res.status(500)
                res.send(err)
            }
    },

    //Method => GET To display edit form.
    getEditForm:async(req,res)=>{
        try{
            const filterPerson = await personService.getById(req.params.id)
            if(filterPerson){
                res.render('edit',{filterPerson})
            }else{
                res.render('invalidPerson')
            }
        }
        catch(err){
            res.status(500)
            res.send(err)
        }
    },
    updatePerson:async(req,res)=>{
        try{
            await personService.update(req.params.id,req.body)
            res.redirect('/people')
        }
        catch(err){
            res.status(500)
            res.send(err)
        }
    },


    //Mthod => GET : To display the confirmation to delete a person.
    getDeleteForm:async(req,res)=>{
        const filterPerson = await personService.getById(req.params.id);
        if(filterPerson){
            res.render('delete',{filterPerson})
        }
    },

    //Method => post : To delete A Perticular Person.
    deletePerson:async(req,res)=>{
        try{
            await personService.Delete({_id:{$eq:req.params.id}})
            res.redirect('/people')
        }
        catch(err){
            res.status(500)
            res.send(err)
        }
    }
}
module.exports = personCtrl