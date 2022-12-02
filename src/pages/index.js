import React from 'react'
import tw from "twin.macro"

//components
import Layout from '@components/Layout'
import { layoutPadding, h3, sectionTitleStyles } from "styles/baseStyles"
import DemoSquare from "@components/DemoSquare"
import { Link } from 'gatsby'
import ContactIcon from '@components/contactIcon'

//images
import img1 from './../images/bg.jpeg'
import newWindow from './../images/new-window.png'
import dribble from './../images/dribble.png'
import behance from './../images/behance.png'

const home = () => {

  const demoSquareData = [
    {
      'title': 'test title 1',
      'subTitle': 'lorum ipsum dolor imut',
      'url': "/testUrl",
      'img': img1
    },
    {
      'title': 'test title 2',
      'subTitle': 'lorum ipsum dolor imut',
      'url': "/testUrl",
      'img': img1
    },
    {
      'title': 'test title 3',
      'subTitle': 'lorum ipsum dolor imut',
      'url': "/testUrl",
      'img': img1
    }
  ]

  const contactIcon = [
    {
      'url': "https://dribbble.com/SamOsman",
      'img': dribble
    },
    {
      'url': "https://www.behance.net/samosman1",
      'img': behance
    }
  ]


  return (
    <Layout>
      <section css={[tw`bg-black-olive-light`]}>
        <div css={[layoutPadding]}>
          <p css={[tw`text-lg py-6 md:(py-0)`]}>I'm a font-end developer and UI designer that is focused on creating beautiful interfaces.</p>
        </div>
      </section>

      <section css={[layoutPadding]}>
        <h2 id='work' css={[h3, sectionTitleStyles]}>Work</h2>
        <div css={[tw`flex flex-row flex-wrap gap-8 mb-10 md:(gap-4 mb-2)`]}>
          {demoSquareData.map((item, index) => (
            <DemoSquare key={index}
              title={item.title}
              subTitle={item.subTitle}
              url={item.url}
              img={item.img}
            />

          ))}
        </div>
      </section>

      <div css={[tw`bg-black-olive-light`]}>
        <section css={[layoutPadding]}>
          <h2 id='resume' css={[h3, sectionTitleStyles]}>Resume</h2>
          <Link to='' css={[tw`underline flex flex-row items-center mb-8`]}>
            <p>Download my Resume here</p>
            <span css={[tw`ml-2`]}>
              <img css={[tw`w-5`]} src={newWindow} />
            </span>
          </Link>
          <div css={[tw`flex flex-row gap-6 mb-8 md:(mb-2)`]}>
            {contactIcon.map((item, key) => (
              <ContactIcon
                key={key}
                img={item.img}
                link={item.url}
              />
            ))}
          </div>
        </section>
      </div>

      <section css={[layoutPadding]}>
        <h2 id='contact' css={[h3, sectionTitleStyles]}>contact</h2>
        <p css={[tw`mb-8`]}>sam.gl.osman@gmail.com</p>
      </section>

    </Layout>
  )
}

export default home