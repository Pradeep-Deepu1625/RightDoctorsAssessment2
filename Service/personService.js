const personSchema = require('../Model/personSchema');
const personService = {
    get:()=>{
        return personSchema.find()
    },
    create:(personData)=>{
        const createdPerson = new personSchema(personData)
        return createdPerson.save()
    },
    getByName:(Name)=>{
        return personSchema.findOne(Name)
    },
    getById:(id)=>{
        return personSchema.findById(id)
    },
    update:(id,updatePerson)=>{
        return personSchema.findByIdAndUpdate(id,{$set:updatePerson},{new:true})
    },
    Delete:(key)=>{
        return personSchema.findOneAndDelete(key)
    }
}
module.exports = personService;