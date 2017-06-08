<template>
  <div>
    <div :class="classes">
    <div class="modal-background"></div>
    <div class="modal-content">
      <section class="modal-card-body">
        <slot name="modal-content"></slot>
      </section>
      <section class="modal-card-foot">
        <div class="modal-footer-content is-pulled-right">
          <slot name="modal-footer"></slot>
          <button class="button is-danger" @click="closeModal">Dismiss</button>
        </div>
      </section>
    </div>
    <button class="modal-close" @click="closeModal"></button>
  </div>
  </div>
</template>

<script>
export default {
  computed: {
    classes () {
      return ['modal', 'is-active']
    }
  },
  data () {
    return {}
  },
  methods: {
    closeModal () {
      this.$emit('closeModal')
    }
  }
}
</script>
