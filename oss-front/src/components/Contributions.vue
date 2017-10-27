<template>
  <div class="page-content d-flex align-items-stretch">
    <div class="content-inner">
      <div class="container-fluid">
        <div v-for="section in sections" :key="section.name">
          <h2>{{section.name}}</h2>
          <div class="row">
            <div v-for="contribution in section.contributions" :key="contribution.name" class="col-4">
              <div class="card">
                <div class="card-header">
                  <h3>{{contribution.name}}</h3>
                </div>
                <div class="card-body">
                  {{contribution.description}}
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
      sections: [
        {
          name: 'IoT',
          contributions: [
            {
              name: 'MARIE',
              description: 'Pouet',
            },
            {
              name: 'MARIE',
              description: 'Pouet',
            },
            {
              name: 'MARIE',
              description: 'Pouet',
            },
            {
              name: 'MARIE',
              description: 'Pouet',
            },
          ],
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
