import chartjsPluginAnnotation from "chartjs-plugin-annotation";
import { Line, mixins } from "vue-chartjs";

export default {
  extends: Line,
  mixins: [mixins.reactiveProp],
  props: ["options"],
  mounted() {
    this.addPlugin([chartjsPluginAnnotation]),
      this.renderChart(this.chartData, this.options);
  },
  watch: {
    options: {
      handler() {
        this.renderChart(this.chartData, this.options);
      },
      deep: true,
    },
  },
};
