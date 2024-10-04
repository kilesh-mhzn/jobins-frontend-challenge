import React from "react";
import { useRouteError } from "react-router-dom";
import styles from "./error-page.module.css";

import { useNavigate } from "react-router-dom";
import { Button } from "@ui/button/button";

const ErrorPage: React.FC = () => {
  const error: unknown = useRouteError();

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <main id="error-page" className={styles.container}>
      <section>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          {(error as Error)?.message ||
            (error as { statusText?: string })?.statusText}
        </p>
        <Button onClick={handleGoBack}>Go Back</Button>
      </section>
    </main>
  );
};

export default ErrorPage;
