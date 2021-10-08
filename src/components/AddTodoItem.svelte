<script>
    import Form from './Form.svelte'
    export let title = "Input what do you want:"
    export let buttonTitle = "Add todo"


</script>

    <Form
        {title}
        {buttonTitle}
        on:add
    />

<style>
</style>