<template>
  <div class="page-content d-flex align-items-stretch">
    <div class="content-inner">
      <div class="container-fluid">
        <div v-for="section in sections" :key="section.name">
          <h1>{{section.name}}</h1>
          <div class="row">
            <div v-for="contribution in section.contributions" :key="contribution.name" class="col-lg-3 col-sm-6">
              <div class="card">
                <div class="card-header">
                  <h3>{{contribution.name}}</h3>
                </div>
                <div class="card-body">
                  {{contribution.description}}<br />
                  <span class="badge badge-secondary" v-for="contributor in contribution.contributors" :key="contributor.name">
                    @{{contributor.name}}
                  </span>
                </div>
                <div class="card-footer d-flex align-items-center" v-if="contribution.links">
                  <a target="_blank" v-for="link in contribution.links" :key="link.name" :href="link.url"  class="btn btn-secondary float-left">
                    {{link.name}}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'oss-contributions',
  data() {
    return {
      sections: [],
    };
  },
  created() {
    this.getContributions();
  },
  methods: {
    getContributions() {
      this.$http.get('https://raw.githubusercontent.com/Zenika/oss/master/contributions.json')
        .then((res) => { this.sections = res.data.sections; });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-content {
  height: 100%;
}
</style>
