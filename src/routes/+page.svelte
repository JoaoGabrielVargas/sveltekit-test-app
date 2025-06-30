<script>
  import { goto } from "$app/navigation";
  import Input from "./Input.svelte";

  // let {data} = $props();

  export let data;

  let inputValue = data.query;
  let isLoading = false;
  let timeoutId = null;

  function debounce(func, delay) {
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }

  function findAge(value) {
    isLoading = true;
    goto(`?query=${encodeURIComponent(value)}`, {
      replaceState: true,
      keepFocus: true,
    });
  }

  const debouncedSearch = debounce(findAge, 800);

  function handleInput(e) {
    inputValue = e.target.value;
    // debouncedSearch(inputValue);
  }

  $: if (data.query !== undefined) {
    isLoading = false;
  }
  // console.log("data", data)
</script>

<div>
  <h1>Bem vindo ao teste do Svelte Kit!</h1>
  <p>Essa é uma aplicação simples que apenas faz uma chamada api</p>
  <Input bind:value={inputValue} onInput={handleInput} />
  {#if isLoading}
    <p>Carregando...</p>
  {:else if data.results}
    <h2>Resultado para "{data.query}":</h2>
    <pre>{JSON.stringify(data.results, null, 2)}</pre>
  {:else if data.query && !data.results}
    <p>Nenhum resultado encontrado</p>
  {/if}
</div>
