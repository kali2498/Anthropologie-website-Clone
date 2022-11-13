import React from "react";

const login = () => {
  return (
    <div>
      className="d-flex justify-content-end align-items-center py-1" style=
      {{ background: "#f7f6f2" }}>
      <div className={`mx-3 ${styles.cont}`}>
        <RiGlobeLine fontSize="24px" color="#2e80a1" />{" "}
        <span className={styles.spans}> English ($) </span>{" "}
        <MdOutlineKeyboardArrowDown color="#2e80a1" />
      </div>
      <div
        className="modal"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <p className="text-center fs-2 mb-auto">Sign Up</p>
            <hr />
            <p className="text-center text-sm-start-center px-4 mt-auto">
              Sign in so you can save items to your wishlists, track your
              orders, and check out faster!
            </p>
            <div className="modal-body">
              <div className={style.style2}>
                <form className={style.form} onSubmit={handleSubmit}>
                  <p>FIRST NAME</p>
                  <input
                    required
                    onChange={handleChange}
                    name="first"
                    type="text"
                    className={style.style3}
                    style={{ textTransform: "capitalize" }}
                  />
                  <p>LAST NAME</p>
                  <input
                    required
                    onChange={handleChange}
                    name="last"
                    type="text"
                    className={style.style3}
                    style={{ textTransform: "capitalize" }}
                  />
                  <p>EMAIL</p>
                  <input
                    required
                    onChange={handleChange}
                    name="email"
                    type="email"
                    className={style.style3}
                  />
                  <p>PASSWORD</p>
                  <input
                    onChange={handleChange}
                    name="password"
                    type={!passtype ? "password" : "text"}
                    className={style.style3}
                  />
                  <FaRegEye
                    style={{ marginLeft: "-30px", cursor: "pointer" }}
                    onClick={() => {
                      setpasstype(!passtype);
                    }}
                  ></FaRegEye>
                  <p></p>
                  <input
                    required
                    type="submit"
                    data-bs-target="#exampleModalToggle2"
                    data-bs-toggle="modal"
                    value="Create"
                    className={style.style4}
                  />
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <p className="text-center mx-auto">
                If Already Have An Account Click Sign In.
              </p>
              <button
                className="btn btn-secondary d-grid col-10 row-2 mx-auto"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;

