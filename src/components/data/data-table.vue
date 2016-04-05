<style scoped>

</style>

<template>
<div class="data-table-container">
    <table id="{{ tableId }}" class="table table-striped table-bordered" width="100%"></table>
</div>
</template>

<script>
import 'datatables-bootstrap3-plugin/media/css/datatables-bootstrap3.min.css'
import 'datatables'
import 'datatables-bootstrap3-plugin'

export default {
  name: 'data-table',
  props: {
    url: {
      type: String,
      required: false,
      default () {
        return null
      }
    },
    data: {
      type: Array,
      required: false,
      default () {
        return []
      }
    },
    columns: {
      type: Array,
      required: true
    },
    options: {
      type: Object,
      required: false,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      _table: null,
      tableId: 'X' + this._uid
    }
  },
  ready () {
    this._table = this.makeTable(this.tableId, this.columns, null)

    if (this.url !== null) {
      this.getUrl(this.url)
    }

    this.updateTableData()
  },
  methods: {
    makeTable (id, columns, data) {
      return $('#' + id).DataTable({
        data: data,
        columns: columns
      })
    },
    updateTableData () {
      if (typeof this.data !== 'undefined' && this.data !== null) {
        this._table.clear()
        this._table.rows.add(this.data)
        this._table.draw()
      } else {
        console.error('You must pass new data to update table')
      }
    },
    getUrl (url) {
      this.$http.get(url).then((response) => {
        this.data = response.data
      }, (response) => {
        console.error(response)
      })
    }
  },
  watch: {
    'data': 'updateTableData'
  }
}
</script>