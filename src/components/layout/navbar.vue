<style lang="less" scoped>
//Navbar custom dropdown menu
.navbar-nav > .accounts-menu {
  //fix width and padding
  > .dropdown-menu {
    > li {
      position: relative;
    }
    width: 280px;
    //Remove padding and margins
    padding: 0 0 0 0;
    margin: 0;
    top: 100%;
  }
  //Define header class
  > .dropdown-menu > li.header {
    border-radius: 4px 4px 0 0;
    background-color: #ffffff;
    padding: 7px 10px;
    border-bottom: 1px solid #f4f4f4;
    color: #444444;
    font-size: 14px;
  }

  //Define footer class
  > .dropdown-menu > li.footer > a {
    border-radius: 0 0 4px 4px;
    font-size: 12px;
    background-color: #fff;
    padding: 7px 10px;
    border-bottom: 1px solid #eeeeee;
    color: #444 !important;
    //@media (max-width: @screen-sm-max) {
    //  background: #fff !important;
    //  color: #444 !important;
    //}
    text-align: center;
    //Hover state
    &:hover {
      text-decoration: none;
      font-weight: normal;
    }
  }

  //Clear inner menu padding and margins
  > .dropdown-menu > li .menu {
    max-height: 200px;
    margin: 0;
    padding: 0;
    list-style: none;
    overflow-x: hidden;
    > li > a {
      display: block;
      white-space: nowrap; /* Prevent text from breaking */
      border-bottom: 1px solid #f4f4f4;
      // Hove state
      &:hover {
        background: #f4f4f4;
        text-decoration: none;
      }
    }
  }
}

</style>

<template>
<header class="main-header" v-el:navbar>
<loading-bar :progress="progress"></loading-bar>
     
    <!-- Logo -->
    <a class="logo" @click="loadingSet(100)">
      {{navTitle}}
    </a>
    <nav class="navbar navbar-static-top">
            <div class="collapse navbar-collapse pull-left" id="navbar-collapse">
                <ul class="nav navbar-nav">
                    <li class="dropdown accounts-menu" v-link-active>
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Clients <span class="caret"></span></a>
                        <ul class="dropdown-menu" role="menu">
                            <li class="header">There are {{ clients.length }} clients</li>
                            <li>
                                <!-- inner menu: contains the actual data -->
                                <ul class="menu">
                                    <!-- start account -->
                                    <li v-for="client in clients">
                                        <a @click="setClient(client.id)">
                                            <h6>{{ client.name }}</h6>
                                        </a>
                                    </li>
                                    <!-- end account -->
                                </ul>
                            </li>
                            <li class="footer"><a v-link="{ name: 'clients' }">Manage Clients</a></li>
                        </ul>
                    </li>
                </ul>
            </div>

            <!-- Navbar Right Menu -->
            <div class="navbar-custom-menu">
                <ul class="nav navbar-nav">
                    <!-- User Account Menu -->
                    <li class="dropdown user user-menu" v-link-active>
                        <!-- Menu Toggle Button -->
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                        <!-- The user image in the navbar-->
                        <img :src="user.picture" class="user-image" alt="User Image">
                        <!-- hidden-xs hides the username on small devices so only the image appears. -->
                        <span class="hidden-xs">{{ user.first_name }} {{ user.last_name }}</span>
                        </a>
                        <ul class="dropdown-menu">
                            <!-- The user image in the menu -->
                            <li class="user-header">
                                <img :src="user.picture" class="img-circle" alt="User Image">
                                <p>
                                {{ user.first_name }} {{ user.last_name }}
                                </p>
                            </li>
                            <!-- Menu Footer-->
                            <li class="user-footer">
                                <div class="pull-right">
                                    <a v-link="{ path: '/auth/logout' }" class="btn btn-default btn-flat">Logout</a>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-custom-menu -->
            <!-- Collect the nav links, forms, and other content for toggling -->

    </nav>
</header>
</template>

<script>
import {loadingSet, setClient} from 'src/vuex/actions'

export default {
  name: 'navbar',
  vuex: {
    getters: {
      progress: ({ loading }) => loading.progress,
      clients: ({ clients }) => clients.all,
      user: ({ user }) => user.info
    },
    actions: {
      loadingSet,
      setClient
    }
  },
  data () {
    return {
      navTitle: 'Feature Requests'
    }
  },
  ready () {
    $('.main-content-wrapper').css('padding-top', $(this.$els.navbar).height())
    if ($('body').hasClass('fixed')) {
      $('.content-wrapper, .right-side').css('min-height', $(window).height() - $('.main-footer').outerHeight())
    }
  }
}

</script>vue-autocomplete