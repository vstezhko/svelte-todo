<script>
    import {createEventDispatcher} from "svelte";

    let buttonText = 'Add ToDo Item';
    let labelToDoItem = 'Input'
    let text = ''
    const dispatch = createEventDispatcher();


    function addNewItem () {
        dispatch('add', text)
    }

</script>

<div class="main-container">
    <div class="form-body">
        <label for="inputToDo">{labelToDoItem}</label>
        <input type="text" id="inputToDo" bind:value={text}>
        <button on:click={addNewItem}>{buttonText}</button>
    </div>

</div>

<style>
    .main-container {
        width: 80%;
        margin: 5px auto;
    }

    .form-body {
        background-color: chartreuse;
        border-radius: 15px;
        padding: 10px;
    }

    input {
        width: 100%;
    }

    label {
        margin-bottom: 5px;
    }
</style>