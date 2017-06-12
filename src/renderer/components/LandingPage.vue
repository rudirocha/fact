<template>
  <div id="wrapper">
    <div class="columns">
      <div class="column is-2">
        <aside class="menu">
          <p class="label has-text-centered">Menu</p>
          <ul class="menu-list">
            <li>
              <a href="#" @click="openInvoiceForm"><i class="fa fa-plus"></i> Create New</a>
            </li>
          </ul>

          <p class="label has-text-centered"><i class="fa "></i></p>
          <div class="content is-small has-text-centered">
            Income Percentage
          </div>
          <vue-easy-pie-chart line-cap="butt" :percent="parseFloat(incomePercentage)" :bar-color="incomePercentage > 0 ? '#00ff00' : '#ff0000'">
            <div class="content is-small">
              {{ incomePercentage }}%
            </div>
          </vue-easy-pie-chart>
          <div class="content has-text-centered">
          <span class="tag is-medium is-success" title="income">In: € {{ sums.income || 0 }}</span>
          <span class="tag is-medium is-danger">Out: € {{ sums.outcome || 0 }}</span>
          <span class="tag is-medium is-warning">Total: € {{ sums.total || 0  }}</span>
          </div>
        </aside>
      </div>
      <div class="column">
        <table class="table is-striped">
          <thead>
            <tr>
              <th title="movementType"> <i class="fa fa-file-o"></i> </th>
              <th>Internal Reference</th>
              <th>Entity</th>
              <th>amount</th>
              <th>Issue Date</th>
              <th>Payment Date</th>
              <th>Payment Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(document, index) in this.documents"
            :title="document.requireRevision? 'Please review this document' : ''"
            :class="{'bg-require': document.requireRevision}">
              <td>
                <i v-if="document.movementType== 'income'" class='fa fa-sign-in' title="Income"></i>
                <i v-else-if="document.movementType== 'outcome'" class='fa fa-sign-out' title="outcome"></i>
                <i v-else class='fa fa-question' title="Unknown Movement Type"></i>
              </td>
              <td>{{ document.internalReference }} </td>
              <td>{{ document.entity }} </td>
              <td>{{ document.amount }} €</td>
              <td>{{ document.issueDate }} </td>
              <td>{{ document.paymentDate }} </td>
              <td>{{ document.paymentType }} </td>
              <td>
                <button class="button is-warning is-small" @click="editDocument(document)">
                  <i class="fa fa-pencil"></i>
                </button>
                <button class="button is-danger is-small" @click="documents.splice(index,1)">
                  <i class="fa fa-times"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <invoice-form v-if="showModal"
    @closeInvoiceForm="hideModal"
    @create:invoice="createInvoice"
    :entityTemplate="editedDocument">
    </invoice-form>
  </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation'
  import InvoiceForm from './Fact/InvoiceForm'
  import VueEasyPieChart from 'vue-easy-pie-chart'
  import 'vue-easy-pie-chart/dist/vue-easy-pie-chart.css'

  export default {
    name: 'landing-page',
    data () {
      return {
        isCreatingDocument: false,
        isEditDocument: false,
        editedDocument: {},
        documents: [
          {
            internalReference: 'FACT1_2017',
            issueDate: '02-01-2017',
            paymentDate: '06-12/2018',
            entity: 'Uptec',
            paymentType: 'Cash',
            movementType: 'income',
            description: 'Just a small description',
            requireRevision: true
          },
          {
            internalReference: 'FACT2_2017',
            issueDate: '02-01-2017',
            paymentDate: '06-12/2018',
            entity: 'IPO',
            paymentType: 'Bank Transfer',
            description: 'Just a small description',
            requireRevision: true
          },
          {
            internalReference: 'FACT2_2017',
            issueDate: '02-01-2017',
            paymentDate: '06-12/2018',
            entity: 'IPO',
            movementType: 'outcome',
            paymentType: 'Bank Transfer',
            description: 'Just a small description'
          }
        ]
      }
    },
    components: { SystemInformation, InvoiceForm, VueEasyPieChart },
    computed: {
      incomePercentage () {
        return ((this.sums.total / this.sums.income) * 100 || 0).toFixed(2)
      },
      showModal () {
        return this.isCreatingDocument === true || this.isEditDocument === true
      },
      sums () {
        let sums = {
          total: 0,
          income: 0,
          outcome: 0
        }
        this.documents.forEach(document => {
          if (document.movementType === 'income') {
            sums.income += parseFloat(document.amount)
          }
          if (document.movementType === 'outcome') {
            sums.outcome += parseFloat(document.amount)
          }
        })
        sums.total = sums.income - sums.outcome
        return sums
      }
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },
      openInvoiceForm () {
        this.isCreatingDocument = true
        this.editedDocument = this.getInvoiceTemplate()
      },
      createInvoice (document) {
        this.documents.push(document)
      },
      editDocument (document) {
        this.editedDocument = document
        this.isEditDocument = true
      },
      getInvoiceTemplate () {
        return Object.assign(
          {},
          {
            id: null,
            internalReference: null,
            entity: null,
            issueDate: null,
            paymentDate: null,
            description: null,
            paymentType: null,
            movementType: null,
            amount: 0,
            owner: null,
            notes: null,
            requireRevision: false
          }
        )
      },
      hideModal () {
        this.isCreatingDocument = false
        this.isEditDocument = false
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  .bg-require {
    background-color: #FFDD57 !important;
  }
</style>
