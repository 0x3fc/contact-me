<script>
  import {
    clipboard,
    copyToastDisplay,
    copyDisplayOff
  } from "../../store/clipboard.js";
</script>

<div
  class="toast-container"
  style="display: {$copyToastDisplay ? 'block' : 'none'}">
  <div class="toast" role="alert">
    <span class="toast-badge">Copied</span>
    <span class="toast-message">
      <span class="underline">{$clipboard}</span>
      is copied to your clipboard
    </span>
    <i
      class="fas fa-times mx-1 hover:text-gray-400"
      on:click={copyDisplayOff} />
  </div>
</div>
