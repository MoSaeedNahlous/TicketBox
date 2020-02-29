import React from 'react'

const ContactUs = () => {
    return (
        <div className="container">
            <h1 >Contact us</h1>
            <br />
            <div className="row">
                <div className="col-sm-8">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quia quidem voluptatibus id nemo.
                         Dignissimos suscipit perspiciatis,
                         nam ea, vero itaque quia saepe eos unde magnam cupiditate est adipisci dolores.
                         
                    </p>
                </div>
                <div className="col-sm-4" style={{backgroundColor:'#F1F1F1'}}>
            <form>
             <div class="form-group row">
                <div class="col-sm-12">
                    <br/>
                <input type="text" class="form-control"  placeholder="Your Name" />
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-12">
                <input type="email" class="form-control"  placeholder="Your Email" />
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-12">
                <input type="text" class="form-control"  placeholder="Your Phone" />
                </div>
            </div>

            <div class="form-group">
              <textarea class="form-control" rows="5" placeholder="Your Massage"></textarea>
            </div>
           
            <div class="form-group row">
                <div class="col-sm-10">
                <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
            </form>
            </div>
            </div>
        </div>
    )
}

export default ContactUs
