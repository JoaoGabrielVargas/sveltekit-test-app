<script>
    import Input from "./Input.svelte";
    

    // let {data} = $props();

    let data = {
      item: {
        age: 33
      }
    }

    let isLoading = false;
    let timeoutId = null;

    function debounce(func, delay) {
        return function(...args) {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            func.apply(this, arg);
          }, delay)
        }
    }

    function findAge(value) {

    }
    // console.log("data", data)
</script>

<h1>Bem vindo ao teste do Svelte Kit!</h1>
<p>Essa é uma aplicação simples que apenas faz uma chamada api</p>
<Input />
<p>Idade aproximada: {data.item.age}</p>


