<template>
  <div class="thisSection">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-sm-12 titleSection">
          <h1>HOW IT WORKS</h1>
          <p>Fusce sed est nisl. Nullam tincidunt purus at turpis convallis, eu feugiat lorem convallis. Duis at pretium quam, vitae tristique mauris. Sed ultricies vitae ex et ultricies. Sed tincidunt mi id massa venenatis, non convallis nisi posuere.</p>
          <div class="row">
            <div class="col-md-6 col-sm-12">
              <div class="jumbotron">
                <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="jumbotron">
                <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThirdSection',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.thisSection {
  min-height: 100vh;
  background: url('../assets/third-section.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.titleSection {
  margin-top: 15vh;
  text-align: left;
}

.titleSectionOther {
  margin-top: 10vh;
  text-align: left;
}

.jumbotron {
  padding: 15px;
  background-color: #F4F4F4;
  text-align: center;
  box-shadow: 1px 1px 3px rgb(73, 73, 73, 0.7);
}
</style>
