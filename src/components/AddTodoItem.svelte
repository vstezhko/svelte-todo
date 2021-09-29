<script>
    import { beforeUpdate, tick } from 'svelte';

    async () => {
        console.log('the component ');
        await tick();
        console.log('the component just updated');
    };

    export let title = "Input what do you want:"
    export let buttonTitle = "Add todo"

    let items = ['item1', 'item2']

    function handleAddClick () {
        items = [ ...items, 'item']
    }

    $: console.log(items)

</script>


<div class="main-container">
    <label for="todo-text">{ title }</label>
    <input type="text" class="todo-input" id="todo-text">
    <button on:click={handleAddClick}>{ buttonTitle }</button>
</div>

<style>
    .main-container {
        background-color: chartreuse;
        border-radius: 5px;
        padding: 10px;
    }

    .todo-input {
        width: 100%;
    }

    label {
        padding: 5px 0;
    }
</style>