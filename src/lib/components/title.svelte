<script>
  let { title } = $props();
</script>

<h2>{title}</h2>

<style>
  h2 {
    color: var(--text);
    font-family: "Inter", sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
  }
  @media(min-width: 700){
    h2{
      font-size: 30px;
      line-height: 36px;
    }
  }
  @media(min-width: 1500px){
    h2{
      font-size: 36;
      line-height: 40px;
    }
  }
</style>
