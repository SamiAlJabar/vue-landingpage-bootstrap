<template>
  <div class="thisSection">
    <div class="container">
      <div class="row">
        <div class="col-md-12 titleSection">
          <h1>PACKAGE DETAILS</h1>
        </div>
      </div>
      <div class="row package">
        <div class="col-md-12">
          <div class="card-deck">
            <div class="card floating">
              <img src="../assets/tool.jpg" class="card-img-top" alt="tool">
              <div class="card-body">
                <h5 class="card-title">PACKAGE 1</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper erat at lectus tincidunt interdum. Sed hendrerit lectus eu libero vulputate, sed imperdiet ligula cursus.</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Starting at $160</small>
              </div>
            </div>
            <div class="card floatingOther">
              <img src="../assets/toolB.jpg" class="card-img-top" alt="toolB">
              <div class="card-body">
                <h5 class="card-title">PACKAGE 2</h5>
                <p class="card-text">In vitae leo aliquet, dapibus neque non, interdum felis. Sed efficitur nulla id sagittis placerat. Etiam bibendum massa non placerat dignissim. Suspendisse potenti. Duis sit amet nisl vitae augue aliquam suscipit volutpat egestas lacus. Aliquam at dictum lacus, ut blandit eros.</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Starting at $200</small>
              </div>
            </div>
            <div class="card floating">
              <img src="../assets/toolC.jpg" class="card-img-top" alt="toolC">
              <div class="card-body">
                <h5 class="card-title">PACKAGE 3</h5>
                <p class="card-text">Aenean id tempus turpis. Quisque et dolor rhoncus, porta sapien eget, pellentesque nulla. Aenean dignissim nec lacus in sodales.</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Starting at $290</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="row package">
        <div class="col-md-4 col-sm-12">
          <h1>Jumbo 1</h1>
        </div>
        <div class="col-md-4 col-sm-12">
          <h1>Jumbo 2</h1>
        </div>
        <div class="col-md-4 col-sm-12">
          <h1>Jumbo 3</h1>
        </div>
      </div> -->
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'FourthSection',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.thisSection {
  min-height: 130vh;
  background: url('../assets/fourth-section.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.titleSection {
  margin-top: 15vh;
  text-align: left;
}

.package {
  margin-top: 7vh;
}

/* .floatingOther {
    -webkit-animation-name: FloatingxOther;
    -webkit-animation-duration: 3s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: ease-in-out;
    -moz-animation-name: FloatingOther;
    -moz-animation-duration: 3s;
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: ease-in-out;
    margin-left: 30px;
    margin-top: 5px;
}

.floating {
    -webkit-animation-name: Floatingx;
    -webkit-animation-duration: 3s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: ease-in-out;
    -moz-animation-name: Floating;
    -moz-animation-duration: 3s;
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: ease-in-out;
    margin-left: 30px;
    margin-top: 5px;
} */

@-webkit-keyframes Floatingx {
    from {-webkit-transform:translate(0, 0px);}
    65% {-webkit-transform:translate(0, 15px);}
    to {-webkit-transform: translate(0, -0px);}    
}

@-moz-keyframes Floating {
    from {-moz-transform:translate(0, 0px);}
    65% {-moz-transform:translate(0, 15px);}
    to {-moz-transform: translate(0, -0px);}    
}

@-webkit-keyframes FloatingxOther {
    from {-webkit-transform:translate(0, 0px);}
    45% {-webkit-transform:translate(0, 35px);}
    to {-webkit-transform: translate(0, -0px);}    
}

@-moz-keyframes FloatingOther {
    from {-moz-transform:translate(0, 0px);}
    45% {-moz-transform:translate(0, 35px);}
    to {-moz-transform: translate(0, -0px);}    
}
</style>
