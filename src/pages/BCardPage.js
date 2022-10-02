import React, {Component, Fragment} from 'react';
import Dair from '../components/Dair/Dair';
import RelatedArticles from '../components/RelatedArticles/RelatedArticles';

class AboutPage extends Component {
    componentDidMount() {
        window.scroll(0, 0)

    }

    render() {
        return (
            <Fragment>
                <Dair></Dair>
                <RelatedArticles></RelatedArticles>

            </Fragment>
        );
    }
}

export default AboutPage;