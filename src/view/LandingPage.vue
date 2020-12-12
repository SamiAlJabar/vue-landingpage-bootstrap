<template>
  <div >
    <Navbar id="fixedNavbar" />
    <FirstSection id="home" />
    <SecondSection id="service" />
    <ThirdSection id="howItWorks" />
    <FourthSection id="packages" />
    <FinalSection id="contact" />
  </div>
</template>

<script>
import FirstSection from '../components/FirstSection.vue'
import SecondSection from '../components/SecondSection.vue'
import ThirdSection from '../components/ThirdSection.vue'
import FourthSection from '../components/FourthSection.vue'
import FinalSection from '../components/FinalSection.vue'
import Navbar from '../components/Navbar.vue'

export default {
  name: 'LandingPage',
  components: {
    FirstSection,
    SecondSection,
    ThirdSection,
    FourthSection,
    FinalSection,
    Navbar
  },
  data() {
    return {
      scrollPosition: null
    }
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
      console.log(this.scrollPosition);
      if(this.scrollPosition >= 200) {
        document.getElementById('fixedNavbar').style.display = 'block';
      } else {
        document.getElementById('fixedNavbar').style.display = 'none';
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #fixedNavbar {
    display: none;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99;
    background-color: #F4F4F4;
  }
</style>
