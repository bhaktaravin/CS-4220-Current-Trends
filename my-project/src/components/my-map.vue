<template >
<div>
  <div style="width:640px;margin:auto">
    <img :src="url">
  </div>

</div>
</template>

<script>


export default {
  name: 'GoogleMap',
  data(){
    return{
      url : "",
      base_url : 'https://maps.googleapis.com/maps/api/staticmap?',
      middle_url : '&zoom=15&size=640x640&maptype=roadmap&markers=color:red%7Clabel:%7C',
      ending_url : '&key=AIzaSyDPlNnorX97TdoebfG1oCyGKFqJy-t04UE'
    }
  },
  props:['lat','lon'],
  methods:{
  },
  methods:{
    update:function() {
       this.url = this.base_url + 'center=' + this.lat +',' + this.lon + this.middle_url + this.lat +',' + this.lon + this.ending_url;
       //console.log("OK")
    }
  },
  watch:{
    lat:function(){
      this.url = this.base_url + 'center=' + this.lat +',' + this.lon + this.middle_url + this.lat +',' + this.lon + this.ending_url;
    },
    lon:function(){
      this.url = this.base_url + 'center=' + this.lat +',' + this.lon + this.middle_url + this.lat +',' + this.lon + this.ending_url;
    }
  },
  mounted(){
    this.url = this.base_url + 'center=' + this.lat +',' + this.lon + this.middle_url + this.lat +',' + this.lon + this.ending_url;
  }
  }
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
