const Contact = () => {
  return (
    <section
      id="contact"
      class="d-flex vh-100 flex-column justify-content-center px-5"
    >
      <h1>Contact Me</h1>
      <div class="row">
        <div class="col-md-12 col-lg-8">
          <form>
            <div class="form-group">
              <label for="nameInput">Name</label>
              <input type="text" class="form-control" id="nameInput" />
            </div>
            <div class="form-group">
              <label for="emailInput">Email</label>
              <input type="email" class="form-control" id="emailInput" />
            </div>
            <div class="form-group">
              <label for="messageInput">Message</label>
              <textarea
                class="form-control"
                id="messageInput"
                rows="6"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-secondary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
