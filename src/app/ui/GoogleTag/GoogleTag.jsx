import Script from 'next/script';

const GoogleTag = () => (
  <>
    <Script
      strategy="lazyOnload"
      src={`https://www.googletagmanager.com/gtag/js?id=G-76D38YHHR7`}
    />
    <Script
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-76D38YHHR7');
        `,
      }}
    />
  </>
);

export default GoogleTag;
