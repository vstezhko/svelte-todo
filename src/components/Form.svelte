<script>
    import {createEventDispatcher} from 'svelte'
    export let title = "Input what do you want:"
    export let buttonTitle = "Add todo"

    let counter = 0
    let text = ''
    const dispatch = createEventDispatcher()

    function handleAddClick() {
        dispatch('add', text);
        text = ""
    }

</script>


<div class="main-container">
    <label for="todo-text">{ title }</label>
    <input bind:value={text} class="todo-input" id="todo-text">
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