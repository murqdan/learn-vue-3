// state
const count = Vue.ref(0)

const Store = {
    // getter
    getCount () {
        return count.value
    },

    // setter
    setCount (_count) {
        count.value = _count
    }
};

export default Store