<script>
  let { description } = $props();
</script>

<p>{description}</p>

<style>
  p {
    color: var(--text_secondary);
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #6e6e6e;
  }
  @media(min-width: 700px){
    p{
      font-size: 16px;
      line-height: 24px;
    }
  }
</style>
