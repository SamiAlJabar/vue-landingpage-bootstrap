<template>
  <div class="thisSection">
    <div class="container">
      <div class="row">
        <div class="col-md-12 titleSection">
          <h1>CONTACT</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <div class="jumbotron">
            <p class="lead">Aenean id tempus turpis. Quisque et dolor rhoncus, porta sapien eget, pellentesque nulla. Aenean dignissim nec lacus in sodales. Phasellus semper, tellus eu auctor rutrum, erat erat gravida tellus, eget aliquet orci ligula ac turpis. Nam fermentum suscipit libero eu facilisis. Integer vel consectetur sem.</p>
            <hr class="my-4">
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          </div>
        </div>
        <form class="col-md-6">
          <div class="form-row">
            <div class="form-group col-md-12" style="text-align: left">
              <label for="inputEmail">Email</label>
              <input type="email" class="form-control" id="inputEmail">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-12" style="text-align: left">
              <label for="description">Description</label>
              <textarea type="text" class="form-control" rows="10" id="description"></textarea>
            </div>
          </div>
          <button style="float: right;" type="submit" class="btn btn-dark">SEND</button>
        </form>
      </div> 
    </div>
    </div>
    
</template>

<script>
export default {
  name: 'FinalSection',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.thisSection {
  min-height: 120vh;
}

.titleSection {
  margin-top: 10vh;
  margin-bottom: 10vh;
}

.jumbotron {
  background-color: #F4F4F4;
}

@media only screen and (max-width: 800px) {
  .thisSection {
    padding-bottom: 10vh;
  }
}

</style>
