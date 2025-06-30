<script>
  import { onMount } from "svelte";

  export let value = "";
  export let onInput;

  let placeholderText = "Digite seu nome...";
  let displayText = "";

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
  <input type="text" bind:value on:input={onInput} on:focus on:blur />

  {#if !value}
    <div class="placeholder-animation">
      <span class="typing-text">{displayText}</span>
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
  }

  .placeholder-animation {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    pointer-events: none;
    color: #62a87c;
    font-style: italic;
    font-size: 50px;
    text-align: center;
  }

  .typing-text {
    overflow: hidden;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: 0.15em;
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
</style>
