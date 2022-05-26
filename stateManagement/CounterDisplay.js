const CounterDisplay = {
    setup() {
        const store = Vue.inject('Store')
        const count = Vue.computed(() => store.getCount())
        
        return { count }
    },
    template: `<div>{{ count }}</div>`
}

export default CounterDisplay