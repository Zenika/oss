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
                <span id="logo"> 
                  <img src="../assets/znk.png" />
                </span>
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

<style lang="scss" scoped>
.navbar {
  background-color: #b31835;
}

.navbar-holder{
  width: 100%;
}

#logo {
  background-color: white;
  width: 35px;
  height: auto;
  border-radius: 50%;
  
  img {
    width: 70%;
    height: 70%;
    margin: 15%;
  }
}
</style>
