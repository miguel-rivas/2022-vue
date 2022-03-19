import Vue from 'vue';
import NanoRow from 'nano-grid-vue/vue/row.vue';
import NanoColumn from 'nano-grid-vue/vue/column.vue';
import NanoIcon from 'nano-grid-vue/vue/icon.vue';
import NanoBtn from 'nano-grid-vue/vue/btn.vue';
import NanoScrollArea from 'nano-grid-vue/vue/scroll-area.vue';

import Container from '../components/container.vue';

Vue.component("container", Container);

Vue.component("row", NanoRow);
Vue.component("column", NanoColumn);
Vue.component("icon", NanoIcon);
Vue.component("btn", NanoBtn);
Vue.component("scroll-area", NanoScrollArea);

// ---------------------------------- Alias:Column
Vue.component("prefix", Vue.extend({
  props: {
    mode: {
      default: 'prefix'
    }
  },
  extends: NanoColumn
}));

Vue.component("suffix", Vue.extend({
  props: {
    mode: {
      default: 'suffix'
    }
  },
  extends: NanoColumn
}));

Vue.component("t-column", Vue.extend({
  props: {
    tableElement: {
      default: true
    }
  },
  extends: NanoColumn
}));

Vue.component("t-prefix", Vue.extend({
  props: {
    mode: {
      default: 'prefix'
    },
    tableElement: {
      default: true
    }
  },
  extends: NanoColumn
}));

Vue.component("t-suffix", Vue.extend({
  props: {
    mode: {
      default: 'suffix'
    },
    tableElement: {
      default: true
    }
  },
  extends: NanoColumn
}));

// ---------------------------------- Alias:Row
Vue.component("t-row", Vue.extend({
  props: {
    tableElement: {
      default: true
    }
  },
  extends: NanoRow
}));