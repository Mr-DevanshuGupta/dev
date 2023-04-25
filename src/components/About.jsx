import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'

import { styles } from './styles'
import { services } from '../contants'
import {fadeIn, textVariant} from '../utlis/motion'

const ServiceCard = ({index, title, icon}) => {
  return(
    <p>{title}</p>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview
        </h2>
      </motion.div>

      <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in Javascript and little expertise in frameworks like React.js and Node.js. I'm a quick learner, multitasker and eager to learn new things. 
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (<ServiceCard key={service.title} index={index} {...service}/>
        ))}

      </div>
    </>
  )
}

export default About