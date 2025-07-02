<script>
  import { goto } from "$app/navigation";
  import Input from "./Input.svelte";
  import AgeComponent from "./AgeComponent.svelte";

  let {data} = $props();

  let inputValue = $state(data.query);
  let isLoading = $state(false);
  let timeoutId = $state(null);

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
    debouncedSearch(inputValue);
  }

  function resetName () {
    inputValue = '';
    goto('/', {
      replaceState: true,
      keepFocus: true
    })
  }
  $effect(() => {
    if (data.query !== undefined) {
      isLoading = false;
    }
  });
  console.log("data", data)
</script>

<div class="container">
  <h1>Bem vindo ao teste do Svelte Kit!</h1>
  <p class="subtitle">
    Essa é uma aplicação simples que apenas faz uma chamada api
  </p>
  {#if data.results}
    <AgeComponent ageData={data.results}/>
    <button onclick={resetName} class="reset-btn">Buscar outro nome</button>
  {:else}
    <Input bind:value={inputValue} onInput={handleInput} />
  {/if}

</div>

<style>
  :global(body) {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    background: #462255;
    background: linear-gradient(
      180deg,
      rgba(70, 34, 85, 1) 20%,
      rgba(49, 59, 114, 1) 55%,
      rgba(98, 168, 124, 1) 90%
    );
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    color: #333;
  }

  .container {
    padding: 2rem;
    text-align: center;
  }

  h1 {
    margin: 0 0 0.5rem;
    color: #C3F3C0;
    font-size: 2.5rem;
  }

  .subtitle {
    margin: 0 0 2rem;
    color: #7EE081;
    font-style: italic;
  }

  .reset-btn {
    margin-top: 2rem;
    padding: 12px 24px;
    font-size: 1.1rem;
    background: #7EE081;
    color: #313B72;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: bold;
    box-shadow: 0 4px 15px rgba(126, 224, 129, 0.3);
  }

  .reset-btn:hover {
    background: #62A87C;
    color: #7EE081;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(126, 224, 129, 0.4);
  }

  .reset-btn:active {
    transform: translateY(1px);
  }
</style>
