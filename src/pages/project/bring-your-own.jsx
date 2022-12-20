import React from "react";
import tw from 'twin.macro'

//components
import Layout from './../../components/Layout'
import { layoutPadding, sectionTitleStyles } from "styles/baseStyles"


const BringYourOwn = () => {
    return (
        <Layout>
            <div css={[layoutPadding]}>
                <p>Page coming soon</p>
            </div>
        </Layout>
    )
}

export default BringYourOwn