import Component from 'vue-class-component';

import components from '../../../components';

@Component({
    components,
    template: require('./get-started-page.html'),
})
export default class GetStartedPage {
    data() {
        return {
            snippets: {
                link: require('./link.snippet.html'),
                bundle: require('./bundle.snippet.html')
            }
        }
    }
}