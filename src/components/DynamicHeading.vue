<script>
import { h } from 'vue'

export default {
  props: {
    level: {
      type: String,
      default: '1'
    }
  },
  render(){
    return h(`h${this.level}`, 'Hello New World')
  }
}
</script>

<style></style>
