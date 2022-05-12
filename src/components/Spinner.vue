<template>
  <div class="spinner"></div>
</template>

<script>
export default {};
</script>

<style>
.spinner {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: relative;
  left: 45%;
  top: 200px;
}

.spinner::before,
.spinner::after {
  content: "";
  position: absolute;
  border-radius: inherit;
}

.spinner::before {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(0deg, #ff00cc 0%, #333399 100%);
  top: 0;
  left: 0;
  animation: spin 0.5s infinite linear;
}
.spinner::after {
  width: 80%;
  height: 80%;
  background-color: var(--dark-primary);
  top: 10%;
  left: 10%;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>