import Image from 'next/image';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Layout from '@/components/Layout';
import Template from '@/components/pages/Template';

const inter = Inter({ subsets: ['latin'] });

export default function TemplatePage() {
  return (
    <Layout>
      <Head>
        <title>Next Page Template</title>
        <meta name="description" content="This is the demo page" />
      </Head>

      <Template />
    </Layout>
  );
}
