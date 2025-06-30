<script>
  export let ageData;
  console.log("ageData", ageData);
</script>

<div class="result">
  <p>Nome pesquisado: <strong>{ageData.name}</strong></p>
  <div class="age-display">{ageData.age}</div>
  <p class="count">Sugestão de idade baseada em {ageData.count} registros</p>
</div>

<style>
  .result {
    margin: 2rem 0;
    animation: fadeIn 1.8s ease-out;
    color: #462255;
    background: #c3f3c0;
    background: linear-gradient(
      180deg,
      rgba(195, 243, 192, 1) 13%,
      rgba(126, 224, 129, 1) 50%,
      rgba(98, 168, 124, 1) 80%
    );
    padding: 2rem;
    border-radius: 50px;
    box-shadow:  0 10px 30px rgba(0, 0, 0, 0.5);
  }

  .age-display {
    font-size: 5rem;
    font-weight: bold;
    color: #313B72;
    margin: 1rem 0;
    line-height: 1;
  }

  .count {
    font-size: 0.9rem;
    color: #462255;
    font-style: italic;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
