<template>
  <div class="spinner"></div>
</template>

<script>
export default {};
</script>

<style>
.spinner {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: relative;
  left: 50%;
  top: 100px;
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
  animation: spin 0.6s infinite linear;
}
.spinner::after {
  width: 85%;
  height: 85%;
  background-color: var(--dark-primary);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>