<style scoped>

</style>

<template>
<div class="data-table-container">
    <table id="{{ tableId }}" class="table table-striped table-bordered" width="100%" v-el:table></table>
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
    },
    selectedId: {
      type: Number,
      required: false,
      default () {
        return 0
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
    this.tableClicks()

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
    },
    tableClicks () {
      let self = this

      /**
       * When user clicks on row, set active class and
       * selected id in data
       */
      $('#' + this.tableId + ' tbody').on('click', 'tr', function () {
        if ($(this).hasClass('active')) {
          $(this).removeClass('active')
        } else {
          self._table.$('tr.active').removeClass('active')
          $(this).addClass('active')
        }

        let data = self._table.row(this).data()
        self.selectedId = data.id
      })
    }
  },
  watch: {
    'data': 'updateTableData'
  }
}
</script>