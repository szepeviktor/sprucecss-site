import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Import components
import Layout from '../components/Layout';
import Seo from '../components/SearchEngineOptimalization';
import PageHeading from '../components/PageHeading';
import ExampleItem from '../components/ExampleItem';

export default function Examples() {
  return (
    <Layout>
      <Seo title="Examples" />
      <main id="content" className="layout-example">
        <div className="layout-example__container">
          <PageHeading
            title="Examples"
            description="Quick and straightforward examples to see how you can start with and use Spruce CSS."
          >
            <a href="https://github.com/conedevelopment/sprucecss-examples/archive/refs/heads/master.zip">Download</a>
            <a href="https://github.com/conedevelopment/sprucecss-examples">Github</a>
          </PageHeading>
          <div className="example-grid">
            <ExampleItem
              title="Authentication"
              url="https://sprucecss.com/examples/html/auth.html"
              description="A simple login example where you can check out the form styling and some usage of Spruce’s mixins and functions."
              github="https://github.com/conedevelopment/sprucecss-examples/tree/master/assets/scss/page/auth"
            >
              <StaticImage
                src={"../images/examples/auth.png"}
                width={ 1200 }
                quality={ 90 }
                alt="A generic login screen with a sidebar."
                className="example-item__thumbnail"
              />
            </ExampleItem>
            <ExampleItem
              title="Article"
              url="https://sprucecss.com/examples/html/article.html"
              description="A centered, breakint oug article layout for seeing the typography."
              github="https://github.com/conedevelopment/sprucecss-examples/tree/master/assets/scss/page/article"
            >
              <StaticImage
                src={"../images/examples/article.png"}
                width={ 1200 }
                quality={ 90 }
                alt="A simple article layout."
                className="example-item__thumbnail"
              />
            </ExampleItem>
          </div>
        </div>
      </main>
    </Layout>
  );
}
