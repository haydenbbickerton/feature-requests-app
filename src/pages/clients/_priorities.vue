<style lang="less">
.handle {
    position: relative;
    top: 1px;
    display: inline-block;
    font-family: 'Glyphicons Halflings';
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    float: right;
}
.handle:hover {
    cursor: pointer;
}
.handle:before {
    content: "\e068";
}
.sortable-ghost {
    background: #efefef;
}

.features {


  .feature {
      width: 100%;
      display: flex;
      height: 3rem;
      align-items: center;
      cursor: grab;

     .cell {
      display: flex;
      height: 3rem;
      align-items: center;

      &.f_id {
        width: 10%;
      }

      &.f_title {
        width: 45%;
        position: relative;

        .title-cell {
          width: 90%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          position: absolute;
        }
      }

      &.f_target_date {
        width: 25%;
      }

      &.f_areas {
        width: 20%;
      }

      &:first-child {
        text-align: center;
        font-weight: bold;
      }
    }

    &:nth-of-type(odd) {
      background: #f9f9f9;
    }

    &.header-row {
      background: #fff;
      border-bottom: 1px solid #aaa;
      span {
        text-align: center;
        font-weight: bold;
      }
    }
  }
}
</style> 

<template>
<div>
<div class="features">
  <!-- This is our "header row" -->
  <div class="feature header-row">
    <span class="cell f_id">
        Priority
    </span>
    <span class="cell f_title">
        Title
    </span>
    <span class="cell f_target_date">
        Target Date
    </span>
    <span class="cell f_areas">
        Areas
    </span>
  </div>
</div>


<!-- Can't get ghosting with table, so we'll do flexbox that looks like table -->
<div v-sortable="options" class="features">

  <!-- Features -->
  <div v-for="feature in features" class="feature grab" data-id="{{ feature.id }}">
    <span class="cell f_id">
        {{parseInt(prioritiesOrderInv[feature.id]) + 1}}
    </span>
    <span class="cell f_title">
        <span class="title-cell ">{{ feature.title }}</span>
    </span>
    <span class="cell f_target_date">
        {{ feature.target_date }}
    </span>
    <span class="cell f_areas">
      <span v-for="area in feature.areas" class="label label-{{areaColors[area]}}" style="margin-right:5px;"> {{ area }} </span>
    </span>
  </div>
</div>
</div>
</template>

<script>
/* eslint no-unused-vars:0 */
// import moment from 'moment'
// import {setClient, setFeature} from 'src/vuex/actions'
import Vue from 'vue'
import Sortable from 'vue-sortable'
import _ from 'lodash'

// Install the sorting directive
Vue.use(Sortable)

export default {
  name: 'priorities',
  computed: {
    prioritiesOrderInv: function () {
      /*
       * We invert this one so the id's are the keys, rather than values.
       * Then we can do prioritiesOrderInv[id] in our template to get the
       * position of the feature request.
       */
      return _.invert(this.prioritiesOrder)
    }
  },
  data () {
    return {
      areaColors: {
        'Policies': 'warning',
        'Billing': 'success',
        'Claims': 'info',
        'Reports': 'danger'
      },
      priorityMode: false,
      options: {
        filter: '.disabled',
        dataIdAttr: 'data-id',
        onEnd: (evt) => {
          this.$set('prioritiesOrder', this.sortable.toArray())
        }
      }
    }
  },
  ready () {
    // Calculate our priorities on ready
    this.$set('prioritiesOrder', this.sortable.toArray())
  },
  props: {
    features: {
      type: Array,
      required: true
    },
    prioritiesOrder: {
      default: () => {
        return {}
      }
    }
  }
}
</script>

