/* eslint-disable import/no-anonymous-default-export */
import App from './App'

export default {
  title: 'App',
  component: App,
}

const Template = (props) => <App {...props} />

export const BaseApp = Template.bind({})
