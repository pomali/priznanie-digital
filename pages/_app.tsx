import { AppProps } from "next/app";

import "../styles/global.css";
import "../styles/navody-digital-0.1.8.min.css";
import "../styles/libs.css";

import React, { useState } from "react";
import { calculate } from "../lib/calculation";
import {
  TaxForm,
  IncomeAndExpenseUserInput,
  PartnerUserInput,
} from "../lib/types";
import Layout from "../components/Layout";
import { initTaxFormUserInputValues } from "../lib/initialValues";
import { sortObjectKeys } from "../lib/utils";

function MyApp({ Component, pageProps }: AppProps) {
  const [taxForm, setTaxForm] = useState<TaxForm>(initTaxFormUserInputValues);
  const updateTaxForm = values => {
    setTaxForm(previousTaxForm => {
      return calculate({
        ...previousTaxForm,
        ...values,
      });
    });
  };

  return (
    <Layout
      debug={<pre>{JSON.stringify(sortObjectKeys(taxForm), null, 2)}</pre>}
    >
      <Component
        taxForm={taxForm}
        updateTaxForm={updateTaxForm}
        {...pageProps}
      />
    </Layout>
  );
}

export default MyApp;