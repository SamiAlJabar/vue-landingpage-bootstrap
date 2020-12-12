<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="/">LP</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/#home">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#service">Service</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#howItWorks">How It Works</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#packages">Packages</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#contact">Contact</a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="/someotherpage">Some Other Page</a>
          </li> -->
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
