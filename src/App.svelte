<script>
    import AddTodoItem from './components/AddTodoItem.svelte'
    import ToDoItem from './components/ToDoItem.svelte'
    import {v4 as uuid} from "uuid";
    import {todoItems} from './store/store.js'

    function handleAddClick(event) {
        todoItems.update(items => {
            return [...items, {id: uuid(), text: event.detail, done: false}]
        })
    }


    function handleDoneChange(id, done) {
        todoItems.update(items => {
            return items.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        done
                    }
                } else {
                    return item
                }})
            })


    }

    function handleRemove (id) {
        todoItems.update(items  => {
            return items.filter(item => {
                return item.id !==id
            })
        })
     }


</script>


<div class="wrapper">
    <AddTodoItem on:add={handleAddClick}/>
    {#each $todoItems as {id, text, done}, index}
        <ToDoItem title={text} id={index + 1}
                  done={done}
                  on:doneChange={(event) => handleDoneChange(id, event.detail)}
                  on:remove={()=>handleRemove(id)}
                  />
    {:else}
        There are no items
    {/each}
</div>

{JSON.stringify($todoItems)}


<style>


</style>