describe('GET /BOOKS', () => {
    const defaultBook = {
        id: 1,
        name: 'Default book'
    };

    it('should bring an array of books', done => {
        request
            .get('/books')
            .expect(200)
            .expect(res => {
                expect(res.body[0]).to.eql(defaultBook);
            })
            .end(done);
    });
});