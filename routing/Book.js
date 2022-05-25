const Book = {
    props: ['id'],
    setup (props, context) {
        const book = Vue.reactive({})
        const route = VueRouter.useRoute()
        const router = VueRouter.useRouter()
        const { id } = route.params // get params id

        const fetchBook = (id) => {
            fetch('http://127.0.0.1:5500/books.json')
            .then(response => {
                return response.json()
            })
            .then(data => {
                const currentBook = data.find(book => book.id == id);
                if (currentBook) {
                    Object.assign(book, { ...currentBook })
                } else {
                    alert("Book not found")
                    router.push('/list-book')
                }
            })
        }

        if (id > 0) fetchBook(id)

        return {
            book
        }
    },
    template: 
    `<div>
        <h2> Detail Book </h2>
        <p>{{ book }}</p>
    </div>`
}

export default Book