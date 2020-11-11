const GuestsService = {
    isOnGuestList(db, firstname, lastname){
        return db('wedding')
            .select('*')
            .from('guests')
            .where({'firstname': firstname, 'lastname': lastname})

    },
    getFamily(db, family){
        return db('wedding')
            .select('*')
            .from('guests')
            .where({"family":family})
    }
    
}

module.exports = GuestsService;