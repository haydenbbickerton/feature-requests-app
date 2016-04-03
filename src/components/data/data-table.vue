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
      required: true
    },
    columns: {
      type: Array,
      required: true
    },
    options: {
      type: Object,
      required: false,
      default: function () {
        return {}
      }
    }
  },
  data: function () {
    return {
      _table: null,
      tableId: 'X' + this._uid,
      tableData: null
    }
  },
  ready: function () {
    this._table = this.makeTable(this.tableId, this.columns, null)
    // this.$set('tableData', this.getData(this.url))
    this.getData(this.url)
    // this._tableData = this.getData(this.url)
  },
  methods: {
    makeTable: function (id, columns, data) {
      return $('#' + id).DataTable({
        data: data,
        columns: columns
      })
    },
    updateTableData: function (data) {
      console.log('updating table')
      if (typeof data !== 'undefined' && data !== null) {
        this._table.clear()
        this._table.rows.add(data)
        this._table.draw()
      } else {
        console.warning('You must pass new data to update table')
      }
    },
    getData: function (url) {
      this.$http.get(url).then((response) => {
        // Success
        this.tableData = response.data
      }, function (response) {
        console.warning(response)
      })
    }
  },
  watch: {
    'tableData': 'updateTableData'
  }
}
</script>