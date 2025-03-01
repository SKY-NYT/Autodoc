import React from 'react'
import Background from '../components/Background'
import services from '../services.json'
const ServicesPage = () => {
  
  
  return (
<section className='relative'>
      <div >
       <Background className='pb-1.5'/>
       
       </div>
      <div className='p-20 grid place-items-center  py-10 '>
        <div className='grid grid-cols-3 gap-6 text-center  w-5/6'>
        {services.map((service,index) => (
          <div key={index}>
          <span className='text-amber-600 text-7xl'>{service.id}</span>
            <p>
              <h2 className='font-bold'>{service.title}</h2>
            <br/>
            {service.description}
            </p>
            </div>

        ))}
        
          
          
        </div>
</div>
    </section>
  )
}

export default ServicesPage