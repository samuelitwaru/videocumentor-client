// const createSerie = import('components/CreateSerieModal.vue');
import createSerieModal from 'components/CreateSerieModal.vue';

const components = {
  'create-serie-modal': createSerieModal,
};

export default async ({ app }) => {
  Object.entries(components).forEach(([name, component]) => {
    app.component(name, component);
  });
};
