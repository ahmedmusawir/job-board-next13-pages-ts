import Image from 'next/image';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Layout from '@/components/Layout';
import Template from '@/components/pages/Template';
import Dashboard from '@/components/pages/Dashboard';

const inter = Inter({ subsets: ['latin'] });

export default function DashboardPage() {
  return (
    <Layout>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="This is the demo page" />
      </Head>

      <Dashboard />
    </Layout>
  );
}
