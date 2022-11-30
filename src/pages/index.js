import React from 'react'
import tw from "twin.macro"

//components
import Layout from '@components/Layout'
import { layoutPadding } from "styles/baseStyles"

const home = () => {

  const styles = tw``

  return (
    <Layout>
      <section css={[tw`bg-black-olive-light `]}>
        <div css={[layoutPadding]}>
          <p css={[tw`text-lg`]}>I'm a font-end developer and UI designer that is focused on creating beautiful interfaces</p>
        </div>

      </section>
    </Layout>
  )

}

export default home