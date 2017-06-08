<template>
  <div>
    <modal @closeModal="close">
      <span slot="modal-footer">
        <button class="button is-success" @click="createInvoice">
          {{ entity.id ? 'Save' : 'Create'}}
        </button>
      </span>
      <div slot="modal-content">
        <div class="columns">
          <div class="column is-half content">
            <h2>{{ entity.id ? 'Document: ' + entity.internalReference : 'Create Document'}}</h2>
          </div>
          <div class="column is-half">
            <div class="field">
              <p class="control">
                <label class="checkbox">
                  <input type="checkbox" v-model="entity.requireRevision">
                  Document needs revision
                </label>
              </p>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column is-quarter">
            <div class="field">
              <label class="label">Date of Issue</label>
              <p class="control">
                <input class="input" type="text" v-model="entity.issueDate" placeholder="dd/mm/yyyy">
              </p>
            </div>
          </div>
          <div class="column is-quarter">
            <div class="field">
              <label class="label">Payment Date</label>
              <p class="control">
                <input class="input" type="text" v-model="entity.paymentDate" placeholder="dd/mm/yyyy">
              </p>
            </div>
          </div>
          <div class="column is-half">
            <div class="field">
              <label class="label">Entity</label>
              <p class="control">
                <input class="input" type="text" v-model="entity.entity" placeholder="Entity">
              </p>
            </div>
          </div>
          </div>
        <div class="columns">
          <div class="column is-half">
            <div class="field">
              <label class="label">Internal Reference</label>
              <p class="control">
                <input class="input" type="text" v-model="entity.internalReference" placeholder="Internal reference">
              </p>
            </div>
          </div>
          <div class="column is-half">
            <div class="field">
              <label class="label">Owner</label>
              <p class="control">
                <input class="input" type="text" v-model="entity.owner" placeholder="Document Owner">
              </p>
            </div>
          </div>
        </div>
          <div class="columns">
            <div class="column is-quarter">
              <div class="field">
                <label class="label">Payment type</label>
                <p class="control">
                  <span class="select">
                    <select v-model="entity.paymentType">
                      <option disabled value="">Select one</option>
                      <option v-for="option in paymentTypes" v-bind:value="option.value">
                        {{ option.text }}
                      </option>
                    </select>
                  </span>
                </p>
              </div>
            </div>
            <div class="column is-quarter">
              <div class="field">
                <label class="label">Movement type</label>
                <p class="control">
                  <span class="select">
                    <select v-model="entity.movementType">
                      <option disabled value="">Select one</option>
                      <option v-for="option in movementTypes" v-bind:value="option.value">
                        {{ option.text }}
                      </option>
                    </select>
                  </span>
                </p>
              </div>
            </div>
            <div class="column is-quarter">
              <div class="field">
                <label class="label">Amount</label>
                <p class="control">
                  <input class="input" type="text" v-model="entity.amount" placeholder="€ 00,00">
                </p>
              </div>
            </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="field">
            <label class="label">Description</label>
            <p class="control">
              <textarea class="textarea" placeholder="invoice details"  v-model="entity.description"></textarea>
            </p>
          </div>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="field">
            <label class="label">Adicional notes</label>
            <p class="control">
              <textarea class="textarea" placeholder="invoice adicional notes"  v-model="entity.notes"></textarea>
            </p>
          </div>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
  import Modal from '../General/Modal'

  export default {
    components: { Modal },
    data () {
      return {
        paymentTypes: [
          {text: 'Bank Transfer', value: 'bt'},
          {text: 'Card', value: 'card'},
          {text: 'Cash', value: 'cash'},
          {text: 'Not paid', value: 'unpaid'}
        ],
        movementTypes: [
          {text: 'Income', value: 'income'},
          {text: 'Outcome', value: 'outcome'}
        ],
        entity: {}
      }
    },
    methods: {
      close () {
        this.$emit('closeInvoiceForm')
      },
      createInvoice () {
        // todo: change id assign
        if (!this.entity.id) {
          this.entity.id = this.entity.internalReference
          this.$emit('create:invoice', this.entity)
        }
        this.$emit('closeInvoiceForm')
      }
    },
    mounted () {
      this.entity = this.entityTemplate // Object.assign({}, this.entityTemplate)
    },
    props: ['entityTemplate']
  }
</script>
