import React, { Component } from "react";
import LocalForm from "./LocalForm";
import LocalTable from "./LocalTable";
import PageHeader from "../../components/auth/PageHeader";

class Products extends Component {
  render() {
    return (
      <div className="px-3">
        <PageHeader title="Produits" FormElement={LocalForm} />
        <LocalTable />
      </div>
    );
  }
}

export { Products };
