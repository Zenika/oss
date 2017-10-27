<template>
  <!-- Main Navbar-->
  <header class="header">
    <nav class="navbar">
      <div class="container-fluid">
        <div class="navbar-holder d-flex align-items-center justify-content-between">
          <!-- Navbar Header-->
          <div class="navbar-header">
            <!-- Navbar Brand -->
            <a href="index.html" class="navbar-brand">
              <div class="brand-text brand-big hidden-lg-down">
                <strong>Open Source</strong> <span>Contributions</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'oss-header',
};
</script>

<style scoped>
  .navbar-holder{
    width: 100%;
  }
</style>
