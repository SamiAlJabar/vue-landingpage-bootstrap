<template>
  <div class="thisSection">
    <div class="container">
      <div class="row">
        <div class="col-md-7 col-sm-12 titleSection">
          <h1>{{headerText}}</h1>
          <p>{{pText}}</p>
          <button type="button" class="btn btn-dark">{{bText}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FirstSection',
  data() {
    return {
      headerText: "REPAIR SERVICES",
      pText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper erat at lectus tincidunt interdum. Sed hendrerit lectus eu libero vulputate, sed imperdiet ligula cursus. In vitae leo aliquet, dapibus neque non, interdum felis. Sed efficitur nulla id sagittis placerat. Etiam bibendum massa non placerat dignissim. Suspendisse potenti. Duis sit amet nisl vitae augue aliquam suscipit volutpat egestas lacus. Aliquam at dictum lacus, ut blandit eros. Aliquam varius diam quis imperdiet ornare. Maecenas tempor leo ut ligula ultricies porta. Suspendisse vel massa dapibus, viverra odio at, facilisis ante.",
      bText: null,
    }
  },
  mounted() {
    this.bText = 'GET STARTED';
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.thisSection {
  height: 100vh;
  background: url('../assets/main-image.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

.titleSection {
  margin-top: 20vh;
  text-align: left;
}

@media only screen and (max-width: 700px) {
  .titleSection > button {
    margin-top: 7vh;
  }
  .titleSection {
    margin-top: 10vh;
  }
}
</style>
