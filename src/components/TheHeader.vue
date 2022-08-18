<template>
  <div flex justify-center>
    <nav text-xl mb-6 inline-flex gap-2>
      <button icon-btn @click="toggleDark()">
        <div dark:i-carbon-moon i-carbon-sun />
      </button>

      <a
        icon-btn i-carbon-logo-github
        rel="noopener noreferrer"
        href="https://github.com/heartbeatLV/argo-rarity"
        target="_blank"
        title="GitHub"
      />
    </nav>
  </div>
</template>
