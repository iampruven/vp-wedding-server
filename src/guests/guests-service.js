const GuestsService = {
    isOnGuestList(db, firstname, lastname){
        return db('wedding')
            .select('firstname', 'lastname')
            .from('guests')
            .where({'firstname': firstname, 'lastname': lastname})

    }
}

module.exports = GuestsService;