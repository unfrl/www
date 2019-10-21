import { StaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import React from "react";

const LOGO = 'https://i.imgur.com/tpUuWHc.png';

export interface ISEOProps {
    description: string,
    lang: string,
    meta: [],
    keywords: [string],
    tite: string
}

export default class SEO extends React.Component<any, any> {
    render() {
        let { description, lang, meta, keywords, title } = this.props;
        lang = lang || 'en';
        meta = meta || [];
        keywords = keywords || [];
        return (
            <StaticQuery
                query={detailsQuery}
                render={data => {
                    const metaDescription =
                        description || data.site.siteMetadata.description;
                    const metaTitle = data.site.siteMetadata.title || title;
                    return (
                        <Helmet
                            htmlAttributes={{
                                lang,
                            }}
                            title={title}
                            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
                            meta={[
                                {
                                    name: `author`,
                                    content: data.site.siteMetadata.author,
                                },
                                {
                                    name: `publisher`,
                                    content: data.site.siteMetadata.author,
                                },
                                {
                                    name: `description`,
                                    content: metaDescription,
                                },
                                {
                                    property: `og:title`,
                                    content: metaTitle,
                                },
                                {
                                    property: `og:description`,
                                    content: metaDescription,
                                },
                                {
                                    property: `og:type`,
                                    content: `website`,
                                },
                                {
                                    property: `og:image`,
                                    content: LOGO,
                                },
                                {
                                    property: `twitter:image`,
                                    content: LOGO,
                                },
                                {
                                    name: `twitter:card`,
                                    content: `summary`,
                                },
                                {
                                    name: `twitter:creator`,
                                    content: data.site.siteMetadata.author,
                                },
                                {
                                    name: `twitter:title`,
                                    content: metaTitle,
                                },
                                {
                                    name: `twitter:description`,
                                    content: metaDescription,
                                },
                            ]
                                .concat(
                                    (keywords || []).length > 0
                                        ? {
                                            name: `keywords`,
                                            content: keywords.join(`, `),
                                        }
                                        : []
                                )
                                .concat(meta)}
                        >
                            <link rel="icon" type="image/png" href={LOGO} sizes="16x16" />
                        </Helmet>
                    )
                }}
            />
        )
    }
}

const detailsQuery = graphql`
  query Default2SEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`