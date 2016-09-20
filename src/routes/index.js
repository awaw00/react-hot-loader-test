import Container from './Container';
import Hello from './Hello';

export default {
  path: '/',
  component: Container,
  indexRoute: {
    component: Hello
  },
  childRoutes: [
    {
      path: '/hello',
      component: Hello
    }
  ]
}
