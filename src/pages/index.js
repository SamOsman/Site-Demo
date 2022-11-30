import React from 'react'
import tw from "twin.macro"

//components
import Layout from '@components/Layout'
import Button from '@components/button'


const home = () => {

  const styles = tw``

  return (
    <Layout>
      <section>
        <p>I'm a font-end developer and UI designer that is focused on creating beautiful interfaces</p>
        <Button
          styles={tw`underline bg-blue`}
        />
      </section>
    </Layout>
  )

}

export default home