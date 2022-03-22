import React from 'react'

export default function Form() {
  return (
    <>
    <div className="ContactUs_container">
          <br />
          <div className="ContactUs_field">
            {" "}
            <input
              type="text"
              alt="Name"
              name="name"
              id="ContactUs_cont_name"
              required="required"
            />{" "}
            <span> Name * </span>
          </div>
          <div className="ContactUs_field">
            {" "}
            <input
              type="email"
              name="email"
              alt="email"
              id="ContactUs_cont_email"
              required="required"
            />
            <span> Login Id * </span>
          </div>
          <div className="ContactUs_field">
            <input type="number" name="phone" id="ContactUs_cont_phone" required="required" />
            <span> Phone No. *</span>
          </div>
          <div className="ContactUs_field">
            <input type="text" name="ItemName" id="ContactUs_cont_organisation" required="unrequired" />
            <span>ItemName </span>{" "}
          </div>
          <div className="ContactUs_field">
            {" "}
            <textarea
              required="required"
              name="message"
              id="ContactUs_cont_message"
              // cols="65"
              // rows="6"
            ></textarea>
            <span>Description </span>
          </div>
          <div className="ContactUs_field">
            <input type="text" name="Quantity" id="ContactUs_cont_organisation" required="unrequired" />
            <span>Quantity </span>{" "}
          </div>
          <div className="ContactUs_field">
            <input type="text" name="Unit" id="ContactUs_cont_organisation" required="unrequired" />
            <span>Unit/Price </span>{" "}
          </div>
          <div className="ContactUs_field">
            Reason to Contact *{" "}
            <select id="ContactUs_s1">
              <option selected hidden value="">
                --Select any one--
              </option>
              <option name="submit blog" value="To submit a blog">
                To submit a blog
              </option>
              <option name="sponsership" value="Sponsorship">
                Sponsorship
              </option>
              <option name="brand_ambassador" value="Brand Ambassador">
                Brand Ambassador
              </option>
              <option name="content was abusive" value="Content was abusive">
                Content was abusive
              </option>
              <option name="other" value="Other">
                Other
              </option>
            </select>
          </div>
          <div className="ContactUs_field">
            Person Contacting us is a *{" "}
            <select id="ContactUs_s2">
              <option selected hidden value="">
                --Select any one--
              </option>
              <option name="club_alumni" value=" Club Alumni">
                Club Alumni
              </option>
              <option name="companyrepresentative" value="Company Representative">
                Company Representative
              </option>
              <option name="student" value="Student">
                Student
              </option>
              <option name="professor" value="Professor">
                Professor
              </option>
              <option name="other" value="Other">
                Other
              </option>
            </select>
          </div>
          <div className="ContactUs_button">
            <button id="contact_button" onClick={submit}> Submit </button>
          </div>
        </div>
   
 
    </>
  )
}
