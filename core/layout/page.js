import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const Page = ({ children, title }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Head>
    <style jsx global>{`
        body { 
          font: 16px Helvetica;
        }
    `}
    </style>

    { children }
  </div>
);

Page.defaultProps = {
  title: 'CircleCi Cypress',
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Page;