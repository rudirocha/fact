<template>
  <div id="wrapper">
    <div class="columns">
      <div class="column is-2">
        <aside class="menu">
          <p class="label">Fact menu</p>
          <ul class="menu-list">
            <li>
              <a href="#General"> <i class="fa fa-hand-spock-o"></i> Main</a>
              <a href="#" @click="openInvoiceForm"><i class="fa fa-plus"></i> Create New</a>
            </li>
          </ul>
        </aside>
      </div>
      <div class="column">
        <h1 class="title">Fact Cenas</h1>
        <p>All cenas de facts</p>
        <table class="table is-striped">
          <thead>
            <tr>
              <th>Internal Reference</th>
              <th>Issue Date</th>
              <th>Payment Date</th>
              <th>Entity</th>
              <th>MovementType</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(document, index) in this.documents">
              <td>{{ document.internalReference }} </td>
              <td>{{ document.issueDate }} </td>
              <td>{{ document.paymentDate }} </td>
              <td>{{ document.entity }} </td>
              <td>{{ document.movementType }} </td>
              <td>
                <button class="button is-danger is-small" @click="documents.splice(index,1)">
                  <i class="fa fa-times"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <invoice-form v-if="isCreatingInvoice"
    @closeInvoiceForm="isCreatingInvoice = false"
    @create:invoice="createInvoice"
    :entityTemplate="Object.assign({}, getInvoiceTemplate())">
    </invoice-form>
  </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation'
  import InvoiceForm from './Fact/InvoiceForm'

  export default {
    name: 'landing-page',
    data () {
      return {
        isCreatingInvoice: false,
        documents: [
          {
            internalReference: 'FACT1_2017',
            issueDate: '02-01-2017',
            paymentDate: '06-12/2018',
            entity: 'Uptec',
            movementType: 'Cash',
            description: 'Just a small description'
          },
          {
            internalReference: 'FACT2_2017',
            issueDate: '02-01-2017',
            paymentDate: '06-12/2018',
            entity: 'IPO',
            movementType: 'Bank Transfer',
            description: 'Just a small description'
          },
          {
            internalReference: 'FACT2_2017',
            issueDate: '02-01-2017',
            paymentDate: '06-12/2018',
            entity: 'IPO',
            movementType: 'Bank Transfer',
            description: 'Just a small description'
          }
        ]
      }
    },
    components: { SystemInformation, InvoiceForm },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },
      openInvoiceForm () {
        this.isCreatingInvoice = true
      },
      createInvoice (document) {
        this.documents.push(document)
      },
      getInvoiceTemplate () {
        return {
          internalReference: null,
          entity: null,
          issueDate: null,
          paymentDate: null,
          description: null,
          movementType: null
        }
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
</style>
