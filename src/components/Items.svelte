<script>
    export let text ='sample todo text';
    import {createEventDispatcher} from "svelte";
    import {tweened} from 'svelte/motion';
    import { cubicIn } from 'svelte/easing';
    import { interpolateLab } from 'd3-interpolate';
    const dispatch = createEventDispatcher();

    const doneMotion = tweened('gold', {
        delay: 0,
        duration: 500,
        easing: cubicIn,
        interpolate: interpolateLab,
    })


    function handleDoneChange (event) {
        doneMotion.set(event.target.checked ? 'chartreuse' : 'gold');
        dispatch('doneChange')
    }

    function handleRemoveChange () {
        dispatch('removeClick')
    }

</script>


<div class="item-container" style="background-color: {$doneMotion}">
    <input type="checkbox" on:input={handleDoneChange}>
    <div class="item-text">{text}</div>
    <div class="btn-remove-item" on:click={handleRemoveChange}>Remove</div>
</div>


<style>
    .item-container {
        width: 80%;
        margin: 5px auto;
        background-color: gold;
        display: flex;
        padding: 10px;
        border-radius: 15px;

    }
    input {
        margin: auto 10px auto 0;
        align-items: baseline;
    }
    .item-text {
        flex: 1;
    }
    .btn-remove-item {
        color: crimson;
        cursor: pointer;
    }
</style>