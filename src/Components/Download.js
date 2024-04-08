import React from "react";

function Download() {
  return (
    <>
      <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
        <div className="card text-center">
          <div className="card-footer text-body-secondary">
            <h5 className="card-title">You can download my resume</h5>
            <p className="card-text">Here is my resume.</p>
            <a href="/PIYUSH_resume.pdf" download className="btn btn-primary">
              Download
            </a>
            <br />
            click to download
          </div>
        </div>

        {/* <!--Copyright section--> */}
        <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
          <span>© 2023 Copyright: </span>
          <a className="font-semibold text-neutral-600 dark:text-neutral-400" href="/home">
            Fun Area Home
          </a>
        </div>
      </footer>
    </>
  );
}

export default Download;
