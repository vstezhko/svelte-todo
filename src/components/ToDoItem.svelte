<script>
    import {createEventDispatcher} from 'svelte'
    export let title = ''
    export let id = ''
    export let done
    const dispatch = createEventDispatcher()

    function handleRemoveClick() {
        dispatch('remove')
    }

    function handleDoneChange (event) {
       dispatch('doneChange', event.target.checked)
    }

</script>


<div class="main-container">
    <input
            type="checkbox"
            class="input-checkbox"
            checked={done}
            on:input={handleDoneChange}>
    <p class="title">{id}. {title}</p>
    <p class="remove-button" id={id} on:click={handleRemoveClick}>Remove</p>
</div>

<style>
    .main-container {
        background-color: blueviolet;
        border-radius: 5px;
        padding: 0 10px;
        height: 50px;
        margin: 5px 0;
        color: #cccccc;
        align-items: center;
        display: flex;
    }

    .main-container p {
        margin: 0;
    }

    .input-checkbox {
        margin-right: 10px;
    }

    .title {
        flex: 1
    }
    .remove-button {
        color: coral;
        cursor: pointer;
    }

</style>
