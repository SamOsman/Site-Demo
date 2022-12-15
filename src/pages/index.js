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
import linkedIn from './../images/linkedin.png'
import Github from './../images/github.png'
import resume from './../../public/static/SamOsman_FrontEndDev_Resume.pdf'

const home = () => {

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

  const demoSquareData = [
    {
      'title': 'test title 1',
      'subTitle': 'lorum ipsum dolor imut',
      'url': "/testUrl",
      'img': img1,
      'classname':'reveal fade-bottom'
    },
    {
      'title': 'test title 2',
      'subTitle': 'lorum ipsum dolor imut',
      'url': "/testUrl",
      'img': img1,
      'classname':'reveal fade-bottom'
    },
    {
      'title': 'test title 3',
      'subTitle': 'lorum ipsum dolor imut',
      'url': "/testUrl",
      'img': img1,
      'classname':'reveal fade-bottom'
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
    },
    {
      'url': "https://www.linkedin.com/in/sam-osman/",
      'img': linkedIn
    },
    {
      'url': "https://github.com/SamOsman/",
      'img': Github
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
              classname={item.classname}
            />

          ))}
        </div>
      </section>

      <div css={[tw`bg-black-olive-light`]}>
        <section css={[layoutPadding]}>
          <h2 id='resume' css={[h3, sectionTitleStyles]}>Resume</h2>
          <a href={resume} target="_blank" css={[tw`underline flex flex-row items-center mb-8`]}>
            <p>Download my Resume here</p>
            <span css={[tw`ml-2`]}>
              <img css={[tw`w-5`]} src={newWindow} />
            </span>
          </a>
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
        <h2 id='contact' css={[h3, sectionTitleStyles]}>Contact</h2>
        <p css={[tw`mb-8`]}>sam.gl.osman@gmail.com</p>
      </section>

    </Layout>
  )
}

export default home