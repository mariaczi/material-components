import Component from 'vue-class-component';
import docCollectionLinks from './links';
import docCollectionHeader from './header';
import docCollectionSecondaryContent from './secondary-content';
import docAvatarContent from './avatar';
import docSnippet from '../snippet';

var template = require('./collections.html');

@Component({
    template: template,
    components: {
        docCollectionLinks,
        docCollectionHeader,
        docCollectionSecondaryContent,
        docAvatarContent,
        docSnippet
    }
})
export default class Badges {
    data() {
        return {
            collectionLinksSnippet: require('./links/links.snippet.html'),
            collectionHeaderSnippet: require('./header/header.snippet.html'),
            collectionSecondaryContentSnippet: require('./secondary-content/secondary-content.snippet.html'),
            collectionAvatarSnippet: require('./avatar/avatar.snippet.html')
        }
    }
}