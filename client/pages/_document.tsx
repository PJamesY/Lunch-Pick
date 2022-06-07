import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import dotenv from 'dotenv';
dotenv.config();

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const kakaoKey = `${process.env.KAKAO_KEY}`;
    return (
      <Html>
        <Head>
          <script
            type="text/javascript"
            src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoKey}&libraries=services`}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
