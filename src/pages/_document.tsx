import Document, { DocumentContext } from 'next/document';

/**
 * @see https://nextjs.org/docs/advanced-features/custom-document
 */
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }
}

export default MyDocument;
