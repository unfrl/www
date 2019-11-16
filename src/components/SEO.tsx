import { StaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import React from "react";

const LOGO = "https://i.imgur.com/tpUuWHc.png";

export interface ISEOProps {
    description?: string;
    lang?: string;
    meta?: [];
    keywords?: string[];
    tite?: string;
    title?: string;
}

export default class SEO extends React.Component<ISEOProps, any> {
    render() {
        let { description, lang, meta, keywords, title } = this.props;
        lang = lang || "en";
        meta = meta || [];
        return (
            <StaticQuery
                query={detailsQuery}
                render={data => {
                    const metaDescription = description || data.site.siteMetadata.description;
                    const metaTitle = data.site.siteMetadata.title || title;
                    return (
                        <Helmet
                            htmlAttributes={{
                                lang,
                            }}
                            title={title}
                            defaultTitle="Unfrl"
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
                                    (data.site.siteMetadata.keywords || []).length > 0
                                        ? {
                                              name: `keywords`,
                                              content: [
                                                  ...data.site.siteMetadata.keywords,
                                                  ...(keywords || [""]),
                                              ].join(`, `),
                                          }
                                        : []
                                )
                                .concat(meta || [])}
                        >
                            <link
                                rel="preconnect icon"
                                type="image/png"
                                href={LOGO}
                                sizes="16x16"
                            />
                            <script type="application/ld+json">{`
                            {
                                "@context": "https://schema.org",
                                "@type": "Organization",
                                "url": "https://unfrl.com",
                                "logo": "https://i.imgur.com/tpUuWHc.png",
                                "foundingDate": "2019",
                                "founders": [
                                {
                                "@type": "Person",
                                "name": "Andrew Noyes"
                                },
                                {
                                "@type": "Person",
                                "name": "Matthew Monahan"
                                } ],
                                "contactPoint": {
                                "@type": "ContactPoint",
                                "contactType": "sales",
                                "email": "hello@unfrl.com"
                                },
                                "email": "hello@unfrl.com",
                                "knowsAbout": ["software development", "Android", "iOS", "Windows"],
                                "location": {
                                    "@type": "Place",
                                    "address": {
                                        "@type": "PostalAddress",
                                        "addressLocality": "Salt Lake City",
                                        "addressRegion": "UT",
                                        "postalCode": "84102"
                                    },
                                    "name": "Unfrl Headquarters"
                                  }
                            }
                        `}</script>
                        </Helmet>
                    );
                }}
            />
        );
    }
}

const detailsQuery = graphql`
    query Default2SEOQuery {
        site {
            siteMetadata {
                title
                description
                author
                keywords
            }
        }
    }
`;
