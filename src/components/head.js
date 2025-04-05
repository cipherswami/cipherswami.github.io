import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import config from '@config';
import favicon from '@images/favicons/favicon.ico';
import ogImage from '@images/og.png';

import favicon16 from '@images/favicons/icon16.png';
import favicon32 from '@images/favicons/icon32.png';
import favicon57 from '@images/favicons/icon57.png';
import favicon60 from '@images/favicons/icon60.png';
import favicon70 from '@images/favicons/icon70.png';
import favicon72 from '@images/favicons/icon72.png';
import favicon76 from '@images/favicons/icon76.png';
import favicon96 from '@images/favicons/icon96.png';
import favicon192 from '@images/favicons/icon192.png';
import favicon512 from '@images/favicons/icon512.png';

const Head = ({ metadata }) => (
  <Helmet>
    <html lang="en" prefix="og: http://ogp.me/ns#" />
    <title itemProp="name" lang="en">
      {metadata.title}
    </title>
    <link rel="shortcut icon" href={favicon} />
    <link rel="canonical" href="http://cipherswami.github.io" />

    <meta name="description" content={metadata.description} />
    <meta name="keywords" content={config.siteKeywords} />
    <meta name="google-site-verification" content={config.googleVerification} />
    <meta property="og:title" content={metadata.title} />
    <meta property="og:description" content={metadata.description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={metadata.siteUrl} />
    <meta property="og:site_name" content={metadata.title} />
    <meta property="og:image" content={`${config.siteUrl}${ogImage}`} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:locale" content={config.siteLanguage} />
    <meta itemProp="name" content={metadata.title} />
    <meta itemProp="description" content={metadata.description} />
    <meta itemProp="image" content={`${config.siteUrl}${ogImage}`} />
    <meta name="twitter:card" content="summary_large_image" />

    <meta name="twitter:url" content={metadata.siteUrl} />
    <meta name="twitter:site" content={config.twitterHandle} />
    <meta name="twitter:creator" content={config.twitterHandle} />
    <meta name="twitter:title" content={metadata.title} />
    <meta name="twitter:description" content={metadata.description} />
    <meta name="twitter:image" content={`${config.siteUrl}${ogImage}`} />
    <meta name="twitter:image:alt" content={metadata.title} />

    <link rel="apple-touch-icon" sizes="57x57" href={favicon57} />
    <link rel="apple-touch-icon" sizes="60x60" href={favicon60} />
    <link rel="apple-touch-icon" sizes="72x72" href={favicon72} />
    <link rel="apple-touch-icon" sizes="76x76" href={favicon76} />
    <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
    <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
    <link rel="icon" type="image/png" sizes="96x96" href={favicon96} />
    <link rel="icon" type="image/png" sizes="70x70" href={favicon70} />
    <link rel="icon" type="image/png" sizes="192x192" href={favicon192} />
    <link rel="icon" type="image/png" sizes="512x512" href={favicon512} />
    <meta name="msapplication-TileImage" content={favicon512} />
    <meta name="msapplication-TileColor" content={config.colors.navy} />
    <meta name="theme-color" content={config.colors.navy} />
  </Helmet>
);

export default Head;

Head.propTypes = {
  metadata: PropTypes.object.isRequired,
};
