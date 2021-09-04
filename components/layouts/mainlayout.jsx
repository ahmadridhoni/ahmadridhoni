import React from "react";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";

export default function MainLayout({ children }) {
    return (
        <React.Fragment>
            <Header />
            <Content>
                {children}
            </Content>
            <Footer />
        </React.Fragment>
    )
}