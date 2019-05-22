<template lang= html>
 <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>CS4220 Final</title>
</head>
<body>
    <div class="container">
        <div class="jumbotron">
            <h4 class="display-4">
                My Location
            </h4>
            <p class="lead">Enter your latitude and longitude to display your location on a Google Map</p>
            <hr>
            <!--<form> -->
                <div class="form-row">
                    <div class="col">
                        <input type="text" name="lat" id="lat" placeholder="Latitude" class="form-control" v-model="lat">
                    </div>
                    <div class="col">
                        <input type="text" name="lon" id="lon" placeholder="Longitude" class="form-control" v-model="lon">
                    </div>
                    
                    
                </div>
                <div class="form-row">
                    <!--
                    <div class="col">
                        <input type="button" @click="getGeolocation" value="Submit Geolocation" class="btn btn-primary mt-4" >
                    </div>-->
                    <div class="col">
                        <input type="submit" @click="setSubmitted" value="Show My Location" class="btn btn-primary mt-4" >
                    </div>
                </div>
            <!--</form>-->
        </div>
            <google-map v-if="submitted" ref="map" :lat="lat" :lon="lon"></google-map>
    </div>
</body>
</html>
</template>
<script>
import GoogleMap from './components/my-map.vue'

export default {
  name: 'app',
  data(){
      return{
          submitted:false,
          lat:34.066445,
          lon:-118.166670,
          query_param:""
      }
  },
  components: {
    GoogleMap
  },
  methods:{
      setSubmitted(){
        if(this.submitted){
          this.$refs.map.update();
        }
        this.submitted = true;
      },
      getGeolocation(){
          navigator.geolocation.getCurrentPosition(position=>{
              console.log(position)
              this.lat = position.coords.latitude
              this.lon = position.coords.longitude
          });
      }
  },
  mounted(){
    //Router Parameters
    console.log(this.$router.params)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>