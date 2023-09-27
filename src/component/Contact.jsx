import React from 'react'

function Contact() {
  return (
    <div>
        <section id="contact">
            <div className="container my-5 py-5">
                <div className="row mb-5">
                    <div className="col-12">
                        <h3 className="fs-5 text-center mb-0">Contact Us</h3>
                        <h1 className="display-6 text-center mb-4">OHave Some <b>Question</b></h1>
                        <hr className='w-25 mx-auto'/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-mb-6">
                        <img src="/assets/conact.jpg" alt="Conact Us" className='w-50'/>
                    </div>
                    
                    <div className="col-md-6">
                    <form action="">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>
                            <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </form>
                    </div>
                    
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact