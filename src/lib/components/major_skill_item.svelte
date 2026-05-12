
<script lang="ts">
  let {skill, percent} = $props(); // 0 to 100
</script>
<div class="skill-container">
  <div class="skill-labels">
    <div class="skill">{skill}:</div>
    <div class="skill">{percent}%</div>
  </div>
  <div class="progress-bar">
    <div class="progress-fill" style="width: {percent}%"></div>
  </div>
</div>
<style>
    .skill-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 8px;
    }

    .skill-labels {
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        color: var(--text);
    }
    .skill:nth-child(2){
      color: var(--text_secondary);
    }

  .progress-bar {
    width: 100%;
    height: 4px;
    background-color: var(--progressbar);
    border-radius: 10px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background-color: var(--primary);
    text-align: right;
    padding-right: 5px;
    color: white;
    font-weight: bold;
    line-height: 20px;
    border-radius: 10px 0 0 10px;
    transition: width 0.5s ease;
  }
</style>

