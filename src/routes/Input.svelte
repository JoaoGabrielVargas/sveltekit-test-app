<script>
  import { onMount } from "svelte";

  let {value = "", onInput} = $props();
  let placeholderText = "Digite seu nome...";
  let displayText = $state("");

  onMount(() => {
    let charIndex = 0;
    const typeText = () => {
      if (charIndex < placeholderText.length) {
        displayText += placeholderText.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 150);
      } else {
        setTimeout(() => {
          charIndex = 0;
          displayText = "";
          typeText();
        }, 1300);
      }
    };
    typeText();
  });
</script>

<div class="input-container">
  <input type="text" bind:value oninput={onInput} />

  {#if !value}
    <div class="placeholder-animation">
      <span class="typing-text">{displayText}|</span>
    </div>
  {/if}
</div>

<style>
  .input-container {
    position: relative;
    width: 100%;
  }

  input {
    padding: 8px;
    font-size: 50px;
    border: none;
    border-radius: 4px;
    background: transparent;
    text-align: center;
    color: #7ee081;
    font-style: italic;
  }

  .placeholder-animation {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    pointer-events: none;
    color: #62a87c;
    font-style: italic;
    font-size: 50px;
    justify-content: center;
  }

  .typing-text {
    letter-spacing: 0.15em;
  }

</style>
