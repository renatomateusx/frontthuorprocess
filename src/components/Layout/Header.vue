<style scoped>
.hidden{
  display:none!important;
}
</style>
<template>
  <header class="topnavbar-wrapper">
    <!-- START Top Navbar-->
    <nav class="navbar topnavbar">
      <!-- START navbar header-->
      <div class="navbar-header">
        <a class="navbar-brand" href="#/">
          <div class="brand-logo">
            <img class="img-fluid" src="img/logoThuor.png" width="85" height="34" alt="App Logo" />
          </div>
          <div class="brand-logo-collapsed">
            <img class="img-fluid" src="img/logo-single.png" alt="App Logo" />
          </div>
        </a>
      </div>
      <!-- END navbar header-->
      <!-- START Left navbar-->
      <ul class="navbar-nav mr-auto flex-row">
        <!-- START User avatar EYE-->
        <li class="nav-item d-none d-md-block">
          <!-- Button used to collapse the left sidebar. Only visible on tablet and desktops-->
          <a class="nav-link" href @click.prevent="toggleSeeStore" title="Visualizar Loja">
            <em class="fa fa-eye"></em>
          </a>
        </li>
        <!-- END User avatar EYE-->
        <li class="nav-item" >
          <!-- Button used to collapse the left sidebar. Only visible on tablet and desktops-->
          <a
            href
            class="nav-link d-none d-md-block d-lg-block d-xl-block"
            @click.prevent="toggleAsideCollapsed"
          >
            <em class="fas fa-bars"></em>
          </a>
          <!-- Button to show/hide the sidebar on mobile. Visible on mobile only.-->
          <a href class="nav-link sidebar-toggle d-md-none" @click.prevent="toggleOffcanvas">
            <em class="fas fa-bars"></em>
          </a>
        </li>
        <!-- START User avatar toggle-->
        <li class="nav-item d-none d-md-block">
          <!-- Button used to collapse the left sidebar. Only visible on tablet and desktops-->
          <a class="nav-link" href @click.prevent="toggleUserBlock">
            <em class="icon-user"></em>
          </a>
        </li>
        <!-- END User avatar toggle-->
        <!-- START lock screen-->
        <li class="nav-item d-none d-md-block">
          <a class="nav-link" href @click.prevent="toggleSair" title="Sair">
            <em class="icon-lock"></em>
          </a>
        </li>
        <li class="nav-item d-none d-md-block">
          <a
            class="nav-link"
            href
            @click.prevent="toggleAdmin"
            title="Admin"
            v-show="isUserAdmin === 1"
          >
            <em class="fas fa-receipt"></em>
          </a>
        </li>
        <!-- END lock screen-->
      </ul>
      <!-- END Left navbar-->
      <!-- START Right Navbar-->
      <ul class="navbar-nav flex-row">
        <!-- Search icon-->
        <li class="nav-item hidden">
          <a class="nav-link" href="#" data-search-open>
            <em class="icon-magnifier"></em>
          </a>
        </li>
        <!-- Fullscreen (only desktops)-->
        <li class="nav-item d-none d-md-block hidden">
          <ToggleFullscreen tag="A" class="nav-link" href="#" />
        </li>
        <!-- START Alert menu-->
        <b-nav-item-dropdown class="dropdown-list hidden" no-caret menuClass="animated " right>
          <template slot="button-content">
            <em class="icon-bell"></em>
            <span class="badge badge-danger">11</span>
          </template>
          <b-dropdown-item>
            <!-- START list group-->
            <div class="list-group">
              <!-- list item-->
              <div class="list-group-item list-group-item-action">
                <div class="media">
                  <div class="align-self-start mr-2">
                    <em class="fab fa-twitter fa-2x text-info"></em>
                  </div>
                  <div class="media-body">
                    <p class="m-0">New followers</p>
                    <p class="m-0 text-muted text-sm">1 new follower</p>
                  </div>
                </div>
              </div>
              <!-- list item-->
              <div class="list-group-item list-group-item-action">
                <div class="media">
                  <div class="align-self-start mr-2">
                    <em class="fas fa-envelope fa-2x text-warning"></em>
                  </div>
                  <div class="media-body">
                    <p class="m-0">New e-mails</p>
                    <p class="m-0 text-muted text-sm">You have 10 new emails</p>
                  </div>
                </div>
              </div>
              <!-- list item-->
              <div class="list-group-item list-group-item-action hidden">
                <div class="media">
                  <div class="align-self-start mr-2">
                    <em class="fas fa-tasks fa-2x text-success"></em>
                  </div>
                  <div class="media-body">
                    <p class="m-0">Pending Tasks</p>
                    <p class="m-0 text-muted text-sm">11 pending task</p>
                  </div>
                </div>
              </div>
              <!-- last list item-->
              <div class="list-group-item list-group-item-action hidden">
                <span class="d-flex align-items-center">
                  <span class="text-sm">More notifications</span>
                  <span class="badge badge-danger ml-auto">14</span>
                </span>
              </div>
            </div>
            <!-- END list group-->
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <!-- END Alert menu-->
        <!-- START Offsidebar button-->
        <li class="nav-item hidden">
          <a href class="nav-link" @click.prevent.prevent="toggleOffsidebar">
            <em class="icon-notebook"></em>
          </a>
        </li>
        <!-- END Offsidebar.prevent menu-->
      </ul>
      <!-- END Right Navbar-->
      <HeaderSearch />
    </nav>
    <!-- END Top Navbar-->
  </header>
</template>

<script>
import { mapMutations } from "vuex";
import HeaderSearch from "@/components/Layout/HeaderSearch";
import ToggleFullscreen from "@/components/Common/ToggleFullscreen";
import UTILIS_API from "../../api/utilisAPI";
import API_NOTIFICATION from "../../api/notification";
export default {
  name: "Header",
  async created(){
    const LUser = await UTILIS_API.GetUserSession();
    if(LUser!= null && LUser.user.is_user_admin == 1){
      this.isUserAdmin = 1
    }
  },

  data: function() {
    return {
      isUserAdmin: 0,
    };
  },
  components: {
    HeaderSearch,
    ToggleFullscreen
  },
  methods: {
    /**
     * Triggers a window resize event when clicked
     * for plugins that needs to be redrawed
     */
    resize: e => {
      // all IE friendly dispatchEvent
      var evt = document.createEvent("UIEvents");
      evt.initUIEvent("resize", true, false, window, 0);
      window.dispatchEvent(evt);
      // modern dispatchEvent way
      // window.dispatchEvent(new Event('resize'));
    },
    ...mapMutations(["toggleSetting"]),
    toggleOffsidebar() {
      this.toggleSetting("offsidebarOpen");
    },
    toggleOffcanvas() {
      this.toggleSetting("asideToggled");
    },
    toggleAsideCollapsed() {
      this.toggleSetting("isCollapsed");
      this.resize();
    },
    toggleUserBlock() {
      this.toggleSetting("showUserBlock");
    },
    async toggleSeeStore() {
      const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
      if (LDadosLoja != undefined) {
        var url = "http://" + LDadosLoja.url_loja;
        this.openWindow(url);
      }
    },
    openWindow(url) {
      var win = window.open(url, "_blank");
      win.focus();
    },
    async toggleSair() {
      API_NOTIFICATION.ShowLoading();
      await UTILIS_API.Sair();
    },
    toggleAdmin() {
      API_NOTIFICATION.ShowLoading();
      const path = '/admin';
      this.$router.push(path);
    }
   
  }
};
</script>
<style scoped>
.hidden {
  display: none !important;
}
</style>