import React from 'react';
import PageHeader from './global-components/page-header';
import Footer from './global-components/footer';
import NavbarV2 from './global-components/navbar-v2';
import { ChangePassword } from './section-components/changePassword';

const changePass = () => {
    return <>
        <NavbarV2 />
        <PageHeader headertitle="Account" subheader="Change Password" />
        <ChangePassword />
        <Footer />
    </>
}

export default changePass

