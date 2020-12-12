<template>
  <div class="thisSection">
    <div class="container">
      <div class="row">
        <div class="col-md-12 titleSection">
          <h1>SERVICE</h1>
          <p>Fusce sed est nisl. Nullam tincidunt purus at turpis convallis, eu feugiat lorem convallis. Duis at pretium quam, vitae tristique mauris. Sed ultricies vitae ex et ultricies. Sed tincidunt mi id massa venenatis, non convallis nisi posuere. In lorem felis, vulputate eu consequat cursus, dapibus non elit. Etiam facilisis id odio ac scelerisque. Duis vitae arcu sed odio elementum aliquam. Aenean quis orci a leo efficitur vehicula.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 titleSectionOther">
          <div class="row">
            <div class="col-md-1 col-sm-2 col-xs-12 iconss">
              <i class="fa fa-wrench" style="font-size: 40px;"></i>
            </div>
            <div class="col-md-11 col-sm-10 col-xs-12">
              <p>Fusce sed est nisl. Nullam tincidunt purus at turpis convallis, eu feugiat lorem convallis. Duis at pretium quam, vitae tristique mauris. Sed ultricies vitae ex et ultricies. Sed tincidunt mi id massa venenatis, non convallis nisi posuere. In lorem felis, vulputate eu consequat cursus, dapibus non elit.</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-1 col-sm-2 col-xs-12">
              <i class="fa fa-thumbs-up" style="font-size: 40px;"></i>
            </div>
            <div class="col-md-11 col-sm-10 col-xs-12">
              <p>Fusce sed est nisl. Nullam tincidunt purus at turpis convallis, eu feugiat lorem convallis. Duis at pretium quam, vitae tristique mauris. Sed ultricies vitae ex et ultricies. Sed tincidunt mi id massa venenatis, non convallis nisi posuere. In lorem felis, vulputate eu consequat cursus, dapibus non elit.</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-1 col-sm-2 col-xs-12">
              <i class="fa fa-truck" style="font-size: 40px;"></i>
            </div>
            <div class="col-md-11 col-sm-10 col-xs-12">
              <p>Fusce sed est nisl. Nullam tincidunt purus at turpis convallis, eu feugiat lorem convallis. Duis at pretium quam, vitae tristique mauris. Sed ultricies vitae ex et ultricies. Sed tincidunt mi id massa venenatis, non convallis nisi posuere. In lorem felis, vulputate eu consequat cursus, dapibus non elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'SecondSection',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.thisSection {
  min-height: 105vh;
  background: url('../assets/second-section.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  color: rgb(206, 206, 206);
}

.titleSection {
  margin-top: 15vh;
  text-align: left;
}

.titleSectionOther {
  margin-top: 10vh;
  text-align: left;
}

@media only screen and (max-width: 900px) {
  .titleSectionOther {
    margin-top: 7vh;
    margin-bottom: 10vh;
  }

}

@media only screen and (max-width: 600px) {
  .titleSectionOther {
    text-align: center;
    margin-top: 3vh;
    margin-bottom: 10vh;
  }

}
</style>
