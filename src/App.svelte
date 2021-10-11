<script>
    import AddToDoItem from "./components/AddToDoItem.svelte";
    import {todoItems} from "./store/store";
    import {onDestroy} from "svelte";
    import Items from "./components/Items.svelte";
    import {v4 as uuid} from 'uuid';

    let items = []

    const unsubscribe = todoItems.subscribe(value => {
        items = value
    })

    function addItem(event) {
        todoItems.update(items => [...items, {
            id: uuid(),
            text: event.detail,
            done: false
        }])
    }


    function handleDoneChange (id, done){
        items.map((item) => {
            if (item.id === id) {
                item.done = !done
            }
        })
        todoItems.update (items => items)
    }

    function handleRemoveItem (id)  {
        todoItems.update (items => items.filter(item => (item.id !== id)));
    }

    onDestroy(() => {
        unsubscribe()
    })

</script>

<AddToDoItem on:add = {addItem}/>
{JSON.stringify(items)}
{#each items as {id, text, done}}
    <Items on:doneChange = {handleDoneChange(id, done)} on:removeClick = {handleRemoveItem(id)} text={text}/>
{/each}