<script>
  export let value = "";
  export let onInput;
</script>

<input
  type="text"
  bind:value
  on:input={onInput}
  placeholder="Digite seu nome..."
/>

<style>
  input {
    padding: 8px;
    font-size: 50px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
</style>
