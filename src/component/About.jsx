import React from 'react'

export default function About() {
  return (
    <div>
        <section id="about">
        <div className="container my-5 py-5 ">
            <div className="row">
                <div className="col-md-6">
                    <img src="/assets/about1.jpg" alt="About" className="w-75 mt-5 rounded-top rounded-bottom" />
                </div>
                <div className="col-md-6">
                    <h3 className="fs-5 text-center">About Us</h3>
                    <h1 className="display-6 mb-2 text-center">Who <b>We </b>Are</h1>
                    <hr className='w-100'/>
                    <p className="lead mb-4 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempora, neque omnis aut expedita praesentium doloribus doloremque rerum quasi porro, non dolorum commodi dolorem. Rem enim, rerum nisi sint blanditiis sit assumenda possimus harum architecto itaque nostrum ea necessitatibus amet, molestias perspiciatis minus vel deleniti corrupti aspernatur eos quam consequuntur!</p>
                    <div className="text-center">
                    <button className="btn btn-primary rounded-pill py-2">Get Started</button>
                    <button className="btn btn-outline-primary rounded-pill px-2 py-2 ms-2">Connect Us</button>
            </div>
                </div>
                
            </div>
        </div>
        </section>
    </div>
  )
}
