import Vue from 'vue'

const socket = new WebSocket('ws://127.0.0.1:8080/socket')

export default window.bus = new Vue({
  methods: {
    getTime() {
      let d = new Date()
      return {h: d.getHours(), m: d.getMinutes()}
    },
    dispatch(message) {
      try {
        console.log(message)
        let msg = JSON.parse(message)
      } catch (e){

      }
      console.log(message)
    }
  },
  created() {
    console.log('bus.startUp()!')
    socket.onmessage = (e) => this.dispatch(e.data)
    socket.onopen = () => {
      this.connected = true
      console.log('connected')
    }
    socket.onclose = () => {
      this.connected = false
      console.log('disconnect')
    }
    this.$on('send', this.send)
    //this.socket.connect(host)
  }
})
