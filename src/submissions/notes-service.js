const NotesService = {
    updateStatus(db,firstname,lastname, response, plus_one,note){
        return db('guests')
            .update({"response":response,"plus_one":plus_one,"note":note})
            .where({"firstname":firstname, "lastname": lastname})
    }
}

module.exports = NotesService;